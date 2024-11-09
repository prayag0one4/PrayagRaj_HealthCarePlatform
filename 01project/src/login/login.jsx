import React from "react";
import "./login.css";
import {useAuth0} from "@auth0/auth0-react"
function LoginPage() {
    const{user,loginWithRedirect,isAuthenticated,logout} =  useAuth0();
  return (
    <div className="login-page">
      <div className="login-content">
        <h1 className="site-name">Medicare+</h1>
        <h2 className="tagline">Medical & Health Care Services</h2>
        <p className="description">
          Online medical consultations with certified medical professionals
        </p>
        <button className="login-button" onClick={(e)=>loginWithRedirect()}>Login Now</button>
      </div>
    </div>
  );
}

export default LoginPage;
