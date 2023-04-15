import React from "react";

//import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

//import react router dom
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
    <div className="max-w-[1200px] mx-auto bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
      <Footer />
    </>
  );
}

export default App;
