 
 
 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Routers from "../routes/Routers.jsx";

const Layout = () => {
  return (
   <>
      <Header />
      <main >
      <Routers />
    </main>
     <Footer />
  
   
    </>
  );
};

export default Layout;
