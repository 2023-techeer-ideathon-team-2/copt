import TopicInputContainer from '../containers/TopicInputContainer';
import PositionInputContainer from '../containers/PositionInputContainer';
import TechInputContainer from '../containers/TechInputContainer';
import { Button } from '@/components';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { techStepAtom } from '@/atoms/tech-step';
import { useNavigate } from 'react-router-dom';

const StepArrays = [
  <TopicInputContainer key={0} />,
  <PositionInputContainer key={1} />,
  <TechInputContainer key={2} />,
];

const SelectPage = () => {
  const [rootStep, setRootStep] = useState(0);
  const [techStep, setTechStep] = useAtom(techStepAtom);
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (rootStep === 0) return;
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
    navigate('/result');
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
