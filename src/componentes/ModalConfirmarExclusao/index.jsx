import styled from "styled-components";

const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const ModalTitulo = styled.h2`
    margin: 0;
    font-size: 24px;
    color: #333;
`;

const ModalMensagem = styled.p`
    font-size: 18px;
    color: #666;
`;

const BotaoGrupo = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`;

const Botao = styled.button`
    background-color: ${props => (props.confirm ? '#4CAF50' : '#F44336')};
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: ${props => (props.confirm ? '#45A049' : '#E53935')};
    }
`;

function ModalConfirmarExclusao({ estaAberto, estaFechado, confirmar }) {
    if (!estaAberto) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitulo>Confirmação</ModalTitulo>
                <ModalMensagem>Você tem certeza que deseja excluir este card?</ModalMensagem>
                <BotaoGrupo>
                    <Botao onClick={confirmar} confirm>Confirmar</Botao>
                    <Botao onClick={estaFechado}>Cancelar</Botao>
                </BotaoGrupo>
            </ModalContainer>
        </ModalOverlay>
    )
}

export default ModalConfirmarExclusao;