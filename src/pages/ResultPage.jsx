import { useState, useEffect } from 'react';
import result from '@/data/result.json';
import { Button } from '@/components';
import CodeContainer from '@/containers/CodeContainer';
import axios from 'axios';

const ResultPage = () => {
  const [depth, setDepth] = useState(result.파일구조);
  const [visible, setVisible] = useState(false);
  const [codeList, setCodeList] = useState([]);

  useEffect(() => {
    const prompt = "나는 spring boot 2.대 버전으로 쇼핑몰을 만들어 보려해 장바구니 기능과 상품 리스트 출력 기능, 검색 기능이 필요해 DB는 JPA를 사용할게. 폴더 구조와 코드를 다음과 같은 json형식으로 주고, 코드 제공을 해줘. 코드는 ```(code)```에 싸서 보여줘 그 외 설명은 안줘도돼. JSON 폴더 구조:  ``` {     \"src\": {         \"main\": {             \"java\": {                 \"com.shoppingmall\": {                     \"config\": {                         \"WebConfiguration.java\"                      },                    \"controller\": {                         \"CartController.java\",                         \"ProductController.java\"                     },                     \"model\": {                         \"CartItem.java\",                         \"Product.java\"                     },                     \"repository\": {                         \"CartItemRepository.java\",                         \"ProductRepository.java\"                     },                     \"service\": {                         \"CartService.java\",                         \"ProductService.java\",                         \"SearchService.java\"                      },                     \"ShoppingmallApplication.java\"                 }             }         }     },     \"pom.xml\" } ";
    
    const getCode = async () => {
      console.log("요청완료")
      try {
        const response = await axios.post("https://api.openai.com/v1/engines/text-davinci-003/completions", {
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 3500
        }, {
          headers: {
            Authorization: 'Bearer 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',
            "Content-Type": "application/json",
          },
        });
        
        const codeText = response.data.choices[0].text;
        const codeList = codeText.split('```').filter(Boolean);
        
        setCodeList(codeList);
      } catch (error) {
        console.log(error);
      }
    };

    getCode();
  }, []);

  const renderedCodeList = codeList.map((item, index) => (
    <p key={index}>{item}</p>
  ));


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <div
        style={{
          backgroundColor: 'white',
          width: '70%',
          height: '60%',
          padding: '36px',
        }}>
        <Button
          text='초기화'
          style={{ marginBottom: '26px', width: '150px' }}
          backgroundcolor='#9B68B4'
          onClick={() => {
            setDepth(result.파일구조);
          }}
        />
        {Object.keys(depth).map((key) => {
          return (
            <div
              key={key}
              style={{
                fontSize: '20px',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
              onClick={() => {
                if (Object.keys(depth[key]).length === 0) {
                  setVisible(true);
                  return;
                }
                setDepth(depth[key]);
              }}>
              {key}
            </div>
          );
        })}
        {renderedCodeList}
      </div>
      {visible && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '100%',
            }}>
            <CodeContainer />

            <Button
              text='이전으로'
              style={{ marginTop: '20px' }}
              backgroundcolor='#9B68B4'
              onClick={() => {
                setVisible(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
