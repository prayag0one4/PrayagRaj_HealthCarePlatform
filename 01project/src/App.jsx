 
import Layout from './Layout/Layout'
import './App.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
 

  return (
    <I18nextProvider i18n={i18n}>
      <>
   
   <Layout />
   </>
    </I18nextProvider>
    
  )
}

export default App;
