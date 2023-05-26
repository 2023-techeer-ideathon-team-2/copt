import TopicInputContainer from '../containers/TopicInputContainer';
import PositionInputContainer from '../containers/PositionInputContainer';
import TechInputContainer from '../containers/TechInputContainer';
import { Button } from '@/components';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { techStepAtom } from '@/atoms/tech-step';

const StepArrays = [
  <TopicInputContainer key={0} />,
  <PositionInputContainer key={1} />,
  <TechInputContainer key={1} />,
];

const SelectPage = () => {
  const [rootStep, setRootStep] = useState(0);
  const [techStep, setTechStep] = useAtom(techStepAtom);

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
    if (techStep < 2) {
      setTechStep(techStep + 1);
      return;
    }
    console.log('hello');
  };

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
          width: 600,
          height: 600,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
        }}>
        <div style={{ flex: 1 }}>{StepArrays[rootStep]}</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button
            style={{ flex: 1 }}
            disabled={rootStep === 0}
            onClick={handlePrevious}>
            이전
          </Button>
          <Button style={{ flex: 1 }} onClick={handleNext}>
            {techStep === 2 ? '완료' : '다음'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
