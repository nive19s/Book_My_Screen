import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
// import CinemaLanding from "./components/CinemaLanding";

function App() {

  return (

    <>  
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/*My Routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>


    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element = {<CinemaLanding />} />

    // </Routes>
    // </BrowserRouter>
    // <>
    //   <CinemaLanding />;
    // </>
  )
}

export default App
