import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css'
import Expertise from "./components/Expertise";
import Works from "./components/Work";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Reviews/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
