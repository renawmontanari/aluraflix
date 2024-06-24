import styled from "styled-components";

const BotaoCustomizado = styled.button`
    padding: 32px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: #FFF;
    margin: 32px 0;
    border:solid 1px #fff;
    background-color: transparent;
`

function Botao({ children }) {
    return (
        <BotaoCustomizado>
            {children}
        </BotaoCustomizado>
    )
}

export default Botao;