import { useAtom } from 'jotai';
import { formAtom } from '@/atoms/form';
import Title from '@/components/Title';
import Input from '@/components/Input';

const TopicInputContainer = () => {
  const [form, setForm] = useAtom(formAtom);

  const handleChange = (e) => {
    setForm({
      ...form,
      topic: e.target.value,
    });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title
          title='Please enter a Topic
🌱'
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Input
          onChange={handleChange}
          value={form.topic}
          style={{
            fontSize: '36px',
            width: '450px',
            border: 'none',
            borderBottom: '1px solid #000',
          }}
        />
      </div>
    </>
  );
};

export default TopicInputContainer;
