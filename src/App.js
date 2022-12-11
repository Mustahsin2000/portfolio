import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLink from "./components/SocialLink";
import {createBrowserRouter} from "react-router-dom";
import Main from "./Layout/Main";
import Experience from "./components/Experience";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/'
        }
      ]
    }
  ])
  return (
    <div className="App w-10/12 mx-auto">
     <Navbar></Navbar>
    <Home></Home>
    <SocialLink></SocialLink>
    <About></About>
    <Projects></Projects>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
