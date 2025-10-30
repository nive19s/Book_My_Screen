import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
// import CinemaLanding from "./components/CinemaLanding";

function App() {

  return (

    <>  
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/*My Routes*/}
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
          <Route path="/movies" element={<h1>Movies Page</h1>} />
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
