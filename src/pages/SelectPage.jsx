import TopicInputContainer from '../containers/TopicInputContainer';
import PositionInputContainer from '../containers/PositionInputContainer';
import TechInputContainer from '../containers/TechInputContainer';
import { Button } from '@/components';
import { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { techStepAtom } from '@/atoms/tech-step';
import { formAtom } from '@/atoms/form';
import axios from 'axios';

const StepArrays = [
  <TopicInputContainer key={0} />,
  <PositionInputContainer key={1} />,
  <TechInputContainer key={2} />,
];

const SelectPage = () => {
  const [rootStep, setRootStep] = useState(0);
  const [techStep, setTechStep] = useAtom(techStepAtom);
  const form = useAtomValue(formAtom);

  const handlePrevious = () => {
    if (rootStep !== 0 && techStep === 0) {
      setRootStep(rootStep - 1);
      return;
    }
    setTechStep(techStep - 1);
  };

  const handleNext = () => {
    if (rootStep !== 2) {
      setRootStep(rootStep + 1);
      return;
    }
    if (techStep < 1) {
      setTechStep(techStep + 1);
      return;
    }
    console.log(form);
    getCode();
  };

  const prompt = "나는 spring boot 2.대 버전으로 쇼핑몰을 만들어 보려해 장바구니 기능과 상품 리스트 출력 기능, 검색 기능이 필요해 DB는 JPA를 사용할게. 폴더 구조와 코드를 다음과 같은 json형식으로 주고, 코드 제공을 해줘. 코드는 ```(code)```에 싸서 보여줘 그 외 설명은 안줘도돼. JSON 폴더 구조:  ``` {     \"src\": {         \"main\": {             \"java\": {                 \"com.shoppingmall\": {                     \"config\": {                         \"WebConfiguration.java\"                      },                    \"controller\": {                         \"CartController.java\",                         \"ProductController.java\"                     },                     \"model\": {                         \"CartItem.java\",                         \"Product.java\"                     },                     \"repository\": {                         \"CartItemRepository.java\",                         \"ProductRepository.java\"                     },                     \"service\": {                         \"CartService.java\",                         \"ProductService.java\",                         \"SearchService.java\"                      },                     \"ShoppingmallApplication.java\"                 }             }         }     },     \"pom.xml\" } ";
  const getCode = async() => {
    console.log("요청되었습니다.")
    await axios
        .post("https://api.openai.com/v1/engines/text-davinci-003/completions",{
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 3500
        },{
          headers: {
            Authorization: 'Bearer ',
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
            console.log(response)
            console.log(response.data.choices[0].text)
        })
        .catch((error) => {
          console.log(error)
        })
  }


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
          backgroundColor: '#fff',
          width: '70%',
          height: '60%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '25px',
          boxShadow: '0px 11.6189px 124.28px rgba(37, 72, 153, 0.17)',
          padding: '2rem',
        }}>
        {StepArrays[rootStep]}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '1.7rem',
            borderTop: '1px solid #ccc',
          }}>
          <Button
            backgroundcolor='#F5F7FB'
            text={'Prev'}
            onClick={handlePrevious}
          />
          <Button
            backgroundcolor='#9B68B4'
            text={techStep === 1 ? 'Submit' : 'Next'}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
