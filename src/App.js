import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import About from './About';
import GrupaNNN from './GrupaNNN';

function App() {
  const [grp, setDetails] = useState({ specializarea: "SDTW", anul: "1", grupa: "1B", color: 'red' });

  const schimbaStilizarea = () => {
    const culori = ["red", "purple", "yellow", "blue"];
    const culoareRandom = culori[Math.floor(Math.random() * culori.length)];
    setDetails((prevColor) => ({ ...prevColor, color: culoareRandom }));
  };

  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <img
            src="https://ac.tuiasi.ro/wp-content/uploads/2019/05/cropped-logo_ac_iasi.png"
            className="img"
            alt=""
          ></img>
          <Header />
        </div>
        <div className="nav">
        <Nav />
        </div>
        <div >
          <Routes>
          <Route path="grp" element={<GrupaNNN  />} />

            <Route path="signin" element={<Signin />} />
            <Route path="about" element={<About grp={grp} setCuloareText={schimbaStilizarea} />} />
          </Routes>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
