import styled from "styled-components";
export default function Carteira(){
    return(
        <>
        <DivOla>
        <h1>Olá, Fulano</h1>
        <ion-icon name="log-out-outline"></ion-icon>
        </DivOla>
        <ContainerCarteira>
        <p>Não há registros de <br/>entrada ou saída</p>
        </ContainerCarteira>
        <DivAdiciona>
            <Item>
            <ion-icon name="add-circle-outline"></ion-icon>
                Nova<br/>entrada
            </Item>
            <Item>
            <ion-icon name="remove-circle-outline"></ion-icon>
                Nova<br/>saída
            </Item>
        </DivAdiciona>
        </>
    )
}
const DivOla =styled.div`
    width:90%;
    height: 31px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:22px;
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
    min-height: 446px;
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