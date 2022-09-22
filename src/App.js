import logo from './logo.svg';
import './App.css';
import './Interfaces/Styles.css'
import './Interfaces/elementsVisual.css'
import './Interfaces/tablets.css'
import './Interfaces/phones.css'
import './Interfaces/custom-resolution.css'
import {NavBar} from "./Sections/NavBar";
import {HeroSection} from "./Sections/HeroSection";
import {MainSection} from "./Sections/MainSection";
import {CircleSection} from "./Sections/CircleSection";
import {FormSection} from "./Sections/formSection";
import {FooterSection} from "./Sections/FooterSection";
import {CopyrightSection} from "./Sections/CopyrightSection";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HeroSection/>
        <MainSection/>
        <CircleSection/>
        <FormSection/>
        <FooterSection/>
        <CopyrightSection/>
    </div>
  );
}

export default App;
