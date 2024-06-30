import styled from "styled-components";

const ContainerVideoNovo = styled.section`
    width: 1172px;
    height: 1100px;
    background-color: aliceblue;
`

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
    width: 874px;
    height: 955px;
    background-color: #03122F;
    flex-wrap: wrap;
    gap: 40PX;
`

const BoxBotoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

function VideoNovo() {
    return (
        <>
            <ContainerVideoNovo>
                <div>
                    <h2>NOVO VÍDEO</h2>
                    <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
                </div>
                <div>
                    <Form>
                        <TituloEditar>CRIAR CARD:</TituloEditar>
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
                </div>
            </ContainerVideoNovo>
        </>
    )
}

export default VideoNovo;