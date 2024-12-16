import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutUs from './Component/AboutUs';

function App() {
  return (
    <div>
       <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
