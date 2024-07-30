import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './Components/Pages/heropage';
import AboutUs from './Components/Pages/aboutuspage';
import MenuPage from './Components/Pages/menupage';
import ContactUsPage from './Components/Pages/contactuspage';
import Navbar from './Components/Common/navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/AboutPage" element={<AboutUs />} />
        <Route path='/menuPage' element= { <MenuPage /> } />
        <Route path='/contactPage' element= { <ContactUsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
