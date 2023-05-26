import { useState } from 'react';
import result from '@/data/result.json';
import { Button } from '@/components';
import CodeContainer from '@/containers/CodeContainer';

const ResultPage = () => {
  const [depth, setDepth] = useState(result.파일구조);
  const [visible, setVisible] = useState(false);

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
