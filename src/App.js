import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import CustomSynthesis from './pages/CustomSynthesis';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} /> 
        <Route path="/Services" element={<CustomSynthesis/>} /> 
        <Route path="/About Us" element={<AboutUs/>} /> 
        <Route path="/Contact Us" element={<ContactUs/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
