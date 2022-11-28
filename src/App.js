//import logo from './logo.svg';
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Math from "./components/Math";
import Profile from "./components/Profile";
import Forprops from "./components/Forprops";
import Counter from "./components/Counter";
import Destructringprops from "./components/Destructringprops";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* <About/>
      <Contact/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/textform" element={<div className="container  my-3">
        <TextForm heading="Enter the text"></TextForm>
      </div>}></Route>
          <Route path="/resume" element={<Resume name={"sid"}/>}></Route>
        </Routes>
      </BrowserRouter>
{/* 
      <div className="container  my-3">
        <TextForm heading="Enter the text"></TextForm>
      </div> */}
      <Hello />
      <Message />
      <Math />
      <Profile Name="kim" lastName="aung">
        <p>prop child</p>
      </Profile>
      <Profile Name="john" lastName="doe" />
      <Profile Name="harry" lastName="tim" />
      <Forprops message="This is a message from props" messageCode={89.9} />
      {/* <Counter /> */}
      <Destructringprops name="cane" lastname="bush" />
      {/* <Resume name="sid" /> */}
      <FunctionEvent />
    </div>
  );
}

export default App;
