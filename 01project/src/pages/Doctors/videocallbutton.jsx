import { useNavigate } from 'react-router-dom';

const videocallbutton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/video-call');
  };

  return (
    <button className="btn w-full px-2 rounded-md" onClick={handleRedirect}>
      Start Video Consultation
    </button>
  );
};

export default videocallbutton;
