import styled from "styled-components";
import logo from './logo.png';
import { Link } from "react-router-dom";
import CabecalhoLink from '@/componentes/CabecalhoLink';

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
    border-bottom: solid 1px #2271D1;
    box-shadow: 0px 5px 0px 0px #2271D1B2;
    justify-content: space-between;
    background-color: #262626;
`

const CaixaBotao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`

const BotaoCustomizado = styled.button`
    width: 180px;
    height: 54px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    color: #FFF;
    border:solid 1px #fff;
    background-color: transparent;
`

function Header() {
    return (
        <ContainerHeader>
            <div>
                <Link to="./">
                    <img src={logo} alt="Logo-Aluraflix" />
                </Link>
            </div>
            <CaixaBotao>
                <CabecalhoLink url="./">
                    <BotaoCustomizado>
                        Home
                    </BotaoCustomizado>
                </CabecalhoLink>
                <CabecalhoLink url="./videonovo">
                    <BotaoCustomizado>
                        Novo Vídeo
                    </BotaoCustomizado>
                </CabecalhoLink>
            </CaixaBotao>
        </ContainerHeader>
    )
}

export default Header;