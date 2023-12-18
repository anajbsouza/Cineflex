import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import NavBar from "./components/NavBar";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    
    axios.defaults.headers.common['Authorization'] = 'wpLLQQ7GfvOlpZSwtSkjcon6';
    const [buyerInfo, setBuyerInfo] = useState({})

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route path="/assentos/:idSessao" element={<SeatsPage setBuyerInfo={setBuyerInfo}/>} />
                <Route path="/sucesso" element={<SuccessPage buyerInfo={buyerInfo}/>} />
            </Routes>
        </BrowserRouter>
    )
}



