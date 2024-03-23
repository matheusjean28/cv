import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Frameworks from "./Components/Frameworks";
import FindMe from "./Components/FindMe";
import Copy from "./Components/Copy";
import RigthModal from "./Components/RigthModal";

import { useState } from "react";

function App() {
    const [showModel, setShowModel] = useState(false);
  return (
    <>
      <RigthModal showModel={showModel} setShowModel={setShowModel} />
      <Header  showModel={showModel} setShowModel={setShowModel} />
       <AboutMe />
       <Projects />
       <Frameworks />
       <FindMe />
       <Copy /> 
    </>)

}

export default App;
