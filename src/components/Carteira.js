import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";

export default function Carteira({token, nome}){
    const [transacoes, setTransacoes]= useState([]);
    useEffect(()=>{
        const URL = "http://localhost:5000/carteira"
        const config = {
            headers: {
                authorization: `Bearer ${token}` 
            }
        }

        const promise = axios.get(URL, config)

        promise.then((res)=>{
            setTransacoes(res.data);
        })
        promise.catch((err)=>{
            alert(err.response.data.message)
        })
    },[])
    return(
        <Tela>
        <DivOla>
        <h1>Olá, {nome}</h1>
        <Link to={`/`}><ion-icon name="log-out-outline"></ion-icon></Link>
        </DivOla>
        <ContainerCarteira>
        {transacoes.length===0?
        <p>Não há registros de <br/>entrada ou saída</p>
        : 
        <Transacoes>{transacoes.map((t) => <Transacao><div><p className="day">{t.day}</p><p className="description">{t.description}</p> </div><p className={t.type==="saida"?"vermelho":"verde"}>{t.value}</p></Transacao>)}</Transacoes>
        }
        </ContainerCarteira>
        <DivAdiciona>
            <Item >
                <Link to={`/entrada`}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </Link>
                <Link to={`/entrada`}>
                    Nova<br/>entrada
                </Link>
            </Item>
            <Item>
                <Link to={`/saida`}><ion-icon name="remove-circle-outline"></ion-icon></Link>
                <Link to= {`/saida`}>Nova<br/>saída</Link>
            </Item>
        </DivAdiciona>
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
`
const DivOla =styled.div`
    width:90%;
    height: 31px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:22px;
    padding-top:25px;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;  
        color: #FFFFFF;
    }
    ion-icon{
        color: #FFFFFF;
        font-size: 30px;
    }
`
const ContainerCarteira = styled.div`
    width:90%;
    min-height: 60vh;
    background: #FFFFFF;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vh;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
`
const DivAdiciona= styled.div`
    width: 90%;
    display:flex;
    justify-content: space-between;
`
const Item = styled.div`
    width: 48%;
    box-sizing:border-box;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    padding-left: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    ion-icon{
        color: #FFFFFF;
        font-size: 26px;
    }
`
const Transacoes= styled.div`
    width:100%;
    min-height: 60vh;
    display:flex;
    flex-direction:column;
`
const Transacao = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    padding: 15px;
    box-sizing:border-box;
    div{
        width:80%;
        display:flex;
    }
    .day{
    }
    .description{
        margin-left:10px;
        color: #000000;
    }
    .verde{
        color:green;
    }
    .vermelho{
        color:red;
    }
`