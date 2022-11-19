import GlobalStyle from "../style/GlobalStyle"
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Container>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </Container>
        </>
    )
}
const Container= styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color: #8c11be;
    font-family: 'Raleway';
`