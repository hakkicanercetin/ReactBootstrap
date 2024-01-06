import  "../node_modules/bootstrap/scss/bootstrap.scss";
import { HeroDiv } from "./sections/hero/Hero";
import { Navbar } from "./sections/navbar/Navbar";
import { Footer } from "./sections/footer/Footer";
import { Features } from "./sections/features/features";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
function App() {

  return (
    <>
      <Navbar></Navbar>
      <HeroDiv></HeroDiv>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}

export default App
