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

const FecharButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #333;
`;

const Label = styled.label`
    margin-top: 10px;
    display: block;
    font-size: 16px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`;

const BotaoSalvar = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

const BotaoLimpar = styled.button`
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

function ModalEditar({ aberto, fechado }) {

    return (
        <>
            <Overlay aberto={aberto} onClick={fechado} />
            <DialogEstilizado aberto={aberto}>
                <form method="dialog">
                    <button type="button" onClick={fechado}>Fechar X</button>
                    <label>Titulo</label>
                    <input type="text" placeholder="O que é javascript?" />

                    <label>Categoria</label>
                    <select>
                        <option>
                            <option value=""></option>
                            <option value="">Teste</option>
                        </option>
                    </select>
                        
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