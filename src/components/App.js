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
    const [nome, setNome] = useState("Fulano")
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login setToken={setToken} setNome={setNome}/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/carteira" element= {<Carteira token={token} nome={nome}/>}/>
            <Route path="/entrada" element={<Entrada token={token}/>}/>
            <Route path="/saida" element={<Saida token={token}/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}