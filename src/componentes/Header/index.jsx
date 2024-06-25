import styled from "styled-components";

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
                <img src="./imagens/logo.png" alt="Logo-Aluraflix" />
            </div>
            <CaixaBotao>
                <BotaoCustomizado>
                    Home
                </BotaoCustomizado>
                <BotaoCustomizado>
                    Novo Vídeo
                </BotaoCustomizado>
            </CaixaBotao>
        </ContainerHeader>
    )
}

export default Header;