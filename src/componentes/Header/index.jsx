import styled from "styled-components";
import Botao from "../Botao/Botao";

const ContainerHeader = styled.header`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
    height: 125px;
    display: flex;
    padding: 0px 51px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background-color: #262626;
`

const CaixaBotao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

function Header() {
    return (
        <ContainerHeader>
            <div>
                <img src="./imagens/logo.png" alt="Logo-Aluraflix" />
            </div>
            <CaixaBotao>
                <Botao>Home</Botao>
                <Botao>Novo Vídeo</Botao>
            </CaixaBotao>
        </ContainerHeader>
    )
}

export default Header;