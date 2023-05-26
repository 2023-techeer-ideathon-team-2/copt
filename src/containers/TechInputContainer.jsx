import { useAtomValue, useAtom } from 'jotai';
import { techStepAtom } from '@/atoms/tech-step';
import Title from '@/components/Title';
import { Radio } from '@/components';

import { formAtom } from '@/atoms/form';

const TechInputContainer = () => {
  const techStep = useAtomValue(techStepAtom);
  const [form, setForm] = useAtom(formAtom);

  const FE_TRACK = [
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title title={'Choose Your Language 🖋'} />
      </div>
      <Radio
        text='Javascript'
        id='js'
        value='JS'
        name='language'
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        checked={form.language === 'JS'}
      />
      <Radio
        text='Tyescript'
        id='ts'
        value='TS'
        name='language'
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        checked={form.language === 'TS'}
      />
    </>,
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title title={'Choose Your Framework 🔥'} />
      </div>
      <Radio
        text='React'
        id='react'
        value='REACT'
        name='framework'
        onChange={(e) => setForm({ ...form, etc: e.target.value })}
        checked={form.etc === 'REACT'}
      />
      <Radio
        text='Vue'
        id='vue'
        value='VUE'
        name='framework'
        onChange={(e) => setForm({ ...form, etc: e.target.value })}
        checked={form.etc === 'VUE'}
      />
    </>,
  ];

  const BE_TRACK = [
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title title={'Choose Your Framework 🔥'} />
      </div>
      <Radio
        text='SpringBoot'
        id='springboot'
        value='SPRINGBOOT'
        name='framework'
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        checked={form.language === 'SPRINGBOOT'}
      />
      <Radio
        text='Flask'
        id='flask'
        value='FLASK'
        name='language'
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        checked={form.language === 'FLASK'}
      />
      <Radio
        text='Django'
        id='django'
        value='DJANGO'
        name='language'
        onChange={(e) => setForm({ ...form, language: e.target.value })}
        checked={form.language === 'DJANGO'}
      />
    </>,
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Title title={'Choose Your RDBMS🔎'} />
      </div>
      <Radio
        text='MySQL'
        id='mysql'
        value='MYSQL'
        name='rdbms'
        onChange={(e) => setForm({ ...form, etc: e.target.value })}
        checked={form.etc === 'MYSQL'}
      />
      <Radio
        text='MariaDB'
        id='mariadb'
        value='MARIADB'
        name='rdbms'
        onChange={(e) => setForm({ ...form, etc: e.target.value })}
        checked={form.etc === 'MARIADB'}
      />
    </>,
  ];

  if (form.position === 'FE') return FE_TRACK[techStep];
  if (form.position === 'BE') return BE_TRACK[techStep];
};

export default TechInputContainer;
