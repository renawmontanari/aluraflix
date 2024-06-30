import styled from "styled-components";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    display: ${props => (props.aberto ? 'block' : 'none')};
`;

const DialogEstilizado = styled.dialog`
    width: 974px;
    height: 1140px;
    position: absolute;
    background: #03122F;
    padding: 0;
    border: 0;
    display: ${props => (props.aberto ? 'block' : 'none')};
`;

function ModalEditar({ aberto, fechado }) {

    return (
        <>
            <Overlay aberto={aberto} onClick={fechado} />
            <DialogEstilizado aberto={aberto}>
                <form method="dialog">
                    <button type="button" onClick={fechado}>Fechar X</button>
                    <p>Olá, Mundo!</p>
                    <label>Titulo</label>
                    <input type="text" placeholder="O que é javascript?" />

                    <label>Categoria</label>
                    <input type="text" placeholder="O que é javascript?" />

                    <label>Imagem</label>
                    <input type="text" placeholder="O que é javascript?" />

                    <label>Vídeo</label>
                    <input type="text" placeholder="O que é javascript?" />

                    <label>Descrição</label>
                    <textarea></textarea>

                    <button type="button">SALVAR</button>
                    <button type="button">LIMPAR</button>
                </form>
            </DialogEstilizado>
        </>
    )
}

export default ModalEditar;