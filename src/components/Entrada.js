import styled from "styled-components";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";

export default function Entrada({token}){
    const [enviaEntrada, setEnviaEntrada] = useState({});
    const navigate = useNavigate();

    function enviaForm(e){
        e.preventDefault();
        const URL= "http://localhost:5000/entrada"
        const body = {...enviaEntrada}
        const config = {
            headers: {
                authorization: `Bearer ${token}` 
            }
        }
        const promise = axios.post(URL, body, config)
        promise.then((res)=>{
            console.log(res.data)
            navigate("/carteira");
        })
        promise.catch((err)=>{
            alert(err.response.data.message)
        })
    }
    function atualizaImput(e) {
        setEnviaEntrada({
            ...enviaEntrada,
            [e.target.name]: e.target.value
        })
      }

    return(
        <Tela>
            <DivTitulo><h1>Nova entrada</h1></DivTitulo>
        <form onSubmit={enviaForm}>
            <input
            name= "value"
            type= "number"
            placeholder= "Valor"
            autoComplete="off"
            required
            onChange={atualizaImput}
            />
            <input
            name= "description"
            type="text"
            placeholder= "Descrição"
            required
            autoComplete="off"
            onChange={atualizaImput}
            />
            <button type="submit">Salvar entrada</button>
        </form>
        </Tela>
    )
}
const Tela = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction:column;
    align-items: center;
    background-color: #8c11be;
    font-family: 'Raleway';

    form{
        display: flex;
        flex-direction:column;
        margin-bottom: 36px;
    }

    input {
        padding-left: 10px;
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        background-color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        box-sizing: border-box;
      }
      button{
        background-color: #A328D6;
        width: 326px;
        height: 46px;
        border:none;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor:pointer;
        border-radius: 5px;
      }
`
const DivTitulo =styled.div`
    width:90%;
    height: 31px;
    display:flex;
    align-items: center;
    margin-bottom:40px;
    padding-top:25px;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;  
        color: #FFFFFF;
    }`