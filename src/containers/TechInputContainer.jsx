import { useAtom } from 'jotai';
import { techStepAtom } from '@/atoms/tech-step';

const TechInputContainer = () => {
  const [techStep, setTechStep] = useAtom(techStepAtom);
  // const TechArrays = [];

  return <div>{techStep}</div>;
};

export default TechInputContainer;
