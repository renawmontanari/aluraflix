import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";

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
    top: 914px;
    display: flex;
    align-content: center;
    z-index: 10;
    border-radius: 15px;
    background: #03122F;
    border: solid 4px #6BD1FF;
    display: ${props => (props.aberto ? 'block' : 'none')};
`;

const BotaoFecharModal = styled.button`
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
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    color: #FFF;
    background-color: #03122F;
`;

const TituloEditar = styled.h2`
    font-size:60px;
    font-weight: 800;
    line-height: 70px;
    color: #2271D1;
    background-color: #03122F;
`

const Input = styled.input`
    width: 573px;
    height: 62px;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;
`;

const Select = styled.select`
    width: 573px;
    height: 82px;
    padding: 8px;
    margin-top: 5px;
    color: #797979;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;
`;

const TextArea = styled.textarea`
    width: 573px;
    height: 112px;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;
`;

const Botao = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    border: 2px solid #c5c5c5;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    line-height: 24px;
`;

const Form = styled.form`
    width: 574px;
    height: 955px;
    background-color: #03122F;
    display: flex;
    gap: 40PX;
    flex-direction: column;
`

const BoxBotoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const IconeFechar = styled(RiCloseCircleLine)`
    font-size: 58px;
    color: #FFF;
`

function ModalEditar({ aberto, fechado }) {

    return (
        <>
            <Overlay aberto={aberto} onClick={fechado} />
            <DialogEstilizado aberto={aberto}>
                <BotaoFecharModal onClick={fechado}>
                    <IconeFechar />
                </BotaoFecharModal>
                <Form>
                    <TituloEditar>EDITAR CARD:</TituloEditar>
                    <div>
                        <Label>Título</Label>
                        <Input type="text" placeholder="O que é JavaScript?" />
                    </div>

                    <div>
                        <Label>Categoria</Label>
                        <Select>
                            <option value="">Selecione uma categoria</option>
                            <option value="teste">Teste</option>
                        </Select>
                    </div>

                    <div>
                        <Label>Imagem</Label>
                        <Input type="text" placeholder="URL da imagem" />
                    </div>

                    <div>
                        <Label>Vídeo</Label>
                        <Input type="text" placeholder="URL do vídeo" />
                    </div>

                    <div>
                        <Label>Descrição</Label>
                        <TextArea placeholder="Descrição do conteúdo"></TextArea>
                    </div>
                    
                    <BoxBotoes>
                        <Botao type="button">SALVAR</Botao>
                        <Botao type="button">LIMPAR</Botao>
                    </BoxBotoes>
                </Form>
            </DialogEstilizado>
        </>
    )
}

export default ModalEditar;