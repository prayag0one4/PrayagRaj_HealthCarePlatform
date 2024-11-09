import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidePanel from "./SidePanel"

const Videocalling = () => {
    const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate('/video-call');
    };

    return (
        <div>
            <SidePanel />
            <button onClick={handleRedirect}>
                Start Video Consultation
                </button>
        </div>
    );
};

export default Videocalling;