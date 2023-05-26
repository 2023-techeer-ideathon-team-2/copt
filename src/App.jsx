import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components';
import { EntryPage, SelectPage, ResultPage } from '@/pages';
import 'normalize.css';
import '@/styles/global.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/select' element={<SelectPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
