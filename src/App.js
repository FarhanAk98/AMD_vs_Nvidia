//Farhan Akhtar
import './CSS/App.css';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue.js';
import About from './pages/About';
import ContactUs from './pages/ContactUs.js';
import NavBar from './components/NavBar.js';
import Selector from './pages/selector';
import Results from './pages/Results';
import { Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue/:card' element={<Catalogue />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/selector' element={<Selector />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
