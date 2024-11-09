import { useNavigate } from 'react-router-dom';

const Videocallbutton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/video-call');
  };

  return (
    <button onClick={handleRedirect}>
      Start Video Consultation
    </button>
  );
};

export default Videocallbutton;
