 
import Layout from './Layout/Layout'
import {useAuth0} from "@auth0/auth0-react"
import './App.css'
import { I18nextProvider } from 'react-i18next';
import LoginPage  from './login/login.jsx';
import i18n from './i18n';

export default function App() {
  const{user,loginWithRedirect,isAuthenticated,logout} =  useAuth0();
  console.log("current user", user);
  console.log({isAuthenticated})
  
  if(isAuthenticated){
    return  (
      <I18nextProvider i18n={i18n}>
        <>
     
     <Layout />
     </>
      </I18nextProvider>
      
    );
  }
  else{
    return <LoginPage />;
  }
 
}

// export default App;
