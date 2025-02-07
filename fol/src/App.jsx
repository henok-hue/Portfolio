import React from "react";
import { useState , useEffect } from "react";
import ra from './assets/icons8-facebook-logo-50.png'
import Gra from './assets/icons8-instagram-50.png'
import Ga from './assets/icons8-linkedin-50.png'
import Ar from './assets/icons8-arrow-50.png'
import Td from './assets/3d-render-software-testing-concept-with-computer.png'
import Port from "./Port";
import Proj from "./Proj";
import Cont from "./Cont";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    
return (
<>
<BrowserRouter>
<Routes>
    <Route index element={<Port />} />
    <Route path="/Cont" element={<Cont />} />
  
</Routes></BrowserRouter>
</>
)
};
export default App

