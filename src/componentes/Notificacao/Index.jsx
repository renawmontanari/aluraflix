import styled from "styled-components";

const NotificacaoContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${props => (props.type === 'success' ? '#4CAF50' : '#F44336')};
    color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: opacity 0.5s ease;
`

function Notificacao ({ message, type, visible }) {
    return (
        <NotificacaoContainer type={type} visible={visible}>
            {message}
        </NotificacaoContainer >
    );
}

export default Notificacao;