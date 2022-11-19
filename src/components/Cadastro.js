import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro(){
    const [cadastroUsuario, setCadastroUsuario] = useState({});

    function enviaForm(){
        console.log("enviado");
    }
    function atualizaImput(e) {
        setCadastroUsuario({
            ...cadastroUsuario,
            [e.target.name]: e.target.value
        })
      }
    return(
        <CadastroContainer>
        <h1>MyWallet</h1>
        <form onSubmit={enviaForm}>
            <input
            name= "name"
            type= "text"
            placeholder= "Nome"
            autoComplete="off"
            required
            onChange={atualizaImput}
            />
            <input
            name= "email"
            type= "email"
            placeholder= "E-mail"
            autoComplete="off"
            required
            onChange={atualizaImput}
            />
            <input
            name= "password"
            type="password"
            placeholder= "Senha"
            required
            autoComplete="off"
            onChange={atualizaImput}
            />
            <input
            name= "check"
            type= "password"
            placeholder= "Confirme a senha"
            required
            autoComplete="off"
            onChange={atualizaImput}
            />
            <button type="submit">Cadastrar</button>
        </form>
        <Link to={`/`}><p>Já tem uma conta? Entre agora!</p></Link>
        </CadastroContainer>
    )
}
const CadastroContainer= styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px; 
        color: #FFFFFF;   
        margin-bottom:24px;    
    }
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
      }
      p{
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
      }
`