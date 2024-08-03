import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Frameworks from "./Components/Frameworks";
import Copy from "./Components/Copy";
import RigthModal from "./Components/RigthModal";

import { useState } from "react";
import Portifolio from "./Components/Portifolio";

function App() {
    const [showModel, setShowModel] = useState(false);
  return (
    <>
      <RigthModal  showModel={showModel} setShowModel={setShowModel} />
      <Header  showModel={showModel} setShowModel={setShowModel} />
       <AboutMe />
      <Portifolio/>
       <Projects />
       {/* <Frameworks /> */}
       
       <Copy /> 
    </>)

}

export default App;
