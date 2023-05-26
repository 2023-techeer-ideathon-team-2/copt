import { useAtom } from 'jotai';
import { formAtom } from '@/atoms/form';

const TopicInputContainer = () => {
  const [form, setForm] = useAtom(formAtom);

  const handleChange = (e) => {
    setForm({
      ...form,
      topic: e.target.value,
    });
  };

  return (
    <div>
      <div>주제를 입력해주세요</div>
      <input onChange={handleChange} value={form.topic} />
    </div>
  );
};

export default TopicInputContainer;
