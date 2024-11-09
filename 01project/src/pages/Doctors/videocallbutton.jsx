import { useNavigate } from "react-router-dom";

const Videocallbutton = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/video-call");
  };

  return (
    <button
      onClick={handleRedirect}
      className="w-full mt-6 bg-blue-200 text-black py-3 rounded-md shadow-md hover:shadow-lg transition-shadow font-medium"
    >
      Start Video Consultation
    </button>
  );
};

export default Videocallbutton;
