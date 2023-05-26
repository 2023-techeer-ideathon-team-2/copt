import Title from '@/components/Title';
import { Radio } from '@/components';
import { useAtom } from 'jotai';
import { formAtom } from '@/atoms/form';

const PositionInputContainer = () => {
  const [form, setForm] = useAtom(formAtom);

  const handleChange = (e) => {
    setForm({
      ...form,
      position: e.target.value,
    });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title title={'Choose Your Position🔎'} />
      </div>
      <Radio
        text='Frontend'
        id='fe'
        value='FE'
        name='position'
        onChange={handleChange}
        checked={form.position === 'FE'}
      />
      <Radio
        text='Backend'
        id='be'
        value='BE'
        name='position'
        onChange={handleChange}
        checked={form.position === 'BE'}
      />
    </>
  );
};

export default PositionInputContainer;
