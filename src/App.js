import React from "react";

//import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//import pages
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PropertyDetails from "./pages/PropertyDetails";

//import react router dom
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="relative overflow-hidden">
      <Header />
    <div className="max-w-[1200px] mx-auto bg-white ">
      <Routes>
        <Route path="/house-rent-react" element={<Home />} />
        <Route path="/house-rent-react/about" element={<About />} />
        <Route path="/house-rent-react/contact" element={<Contact />} />
        <Route path="/house-rent-react/Property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;
