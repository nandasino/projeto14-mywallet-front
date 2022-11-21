import GlobalStyle from "../style/GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Carteira from "./Carteira";
import Entrada from "./Entrada";
import Saida from "./Saida";
import { useState } from "react";

export default function App(){
    const [token, setToken]= useState(null);
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setToken={setToken}/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/carteira" element= {<Carteira token={token}/>}/>
            <Route path="/entrada" element={<Entrada/>}/>
            <Route path="/saida" element={<Saida/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}