import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="App w-10/12 mx-auto">
     <Navbar></Navbar>
    <Home></Home>
    <SocialLink></SocialLink>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
