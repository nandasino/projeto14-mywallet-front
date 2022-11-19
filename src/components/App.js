import GlobalStyle from "../style/GlobalStyle"
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Cadastro from "./Cadastro";
import Carteira from "./Carteira";

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/carteira" element= {<Carteira/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}