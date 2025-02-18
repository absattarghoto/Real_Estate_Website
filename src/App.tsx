
import AboutUs from "./Components/AboutUs/Index";
import Crousel from "./Components/Crousel/Index";
import FindServices from "./Components/FindServices/Index";
import Hero from "./Components/Hero/Imdex";
import NavBar from "./Components/NavBar/Index";
import NewsUp from "./Components/NewsUp/Index";
import ProjectSection from "./Components/ProjectSection/Index";
import Services from "./Components/Services/Index";
import StoreSection from "./Components/StoreSection/Index";


const App = () => {
  return (
    <>
    <NavBar/>
   <Hero/>
   <Crousel/>
   <Services/>
   <FindServices/>
   <AboutUs/>
   <StoreSection/>
   <NewsUp/>
   <ProjectSection/>
    </>
  );
}

export default App;
