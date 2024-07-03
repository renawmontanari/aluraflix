import { useState } from "react";
import styled from "styled-components";

const ContainerVideoNovo = styled.section`
    width: 1440px;
    height: 880px;
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    background-color: #262626;
`

const Label = styled.label`
    margin-top: 10px;
    display: block;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 10px;
    color: #FFF;
`;

const TituloEditar = styled.h2`
    width: 100%;
    height: 75px;
    font-size:36px;
    font-weight: 600;
    line-height: 70px;
    color: #ffffff;
    display: flex;
    align-items: center;
    border-top: solid 1px #ffffff67;
    border-bottom: solid 1px #ffffff67;
    background-color: #262626;
`

const Input = styled.input`
    width: 573px;
    height: 62px;
    padding: 8px;
    margin-top: 5px;
    font-size: 16px;
    background-color: #262626;
    border-radius: 10px;
    border: 3px solid #cccccc5c;
`;

const Select = styled.select`
    width: 595px;
    height: 82px;
    padding: 8px;
    margin-top: 5px;
    color: #b4b4b4;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #262626;
    border-radius: 10px;
    border: 3px solid #cccccc5c;
`;

const TextArea = styled.textarea`
    width: 573px;
    height: 112px;
    padding: 8px;
    margin-top: 5px;
    border: 3px solid #cccccc5c;
    font-size: 16px;
    background-color: #262626;
    border-radius: 10px;
`;

const Botao = styled.button`
    width: 180px;
    height: 54px;
    background-color: transparent;
    border: 2px solid #8d8d8d;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    line-height: 24px;
`;

const Form = styled.form`
    width: 1440px;
    height: 655px;
    display: flex;
    background-color: #262626;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
`

const BoxBotoes = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const BoxTitulos = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    color: #FFF;
    background-color: #262626;
    h2 {
        font-size: 60px;
        font-weight: 800;
        line-height: 70px;
    }
    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
    }
`

const BoxInputsPrimarios = styled.div`
    width: 1440px;
    height: 115px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;
`

const BoxInputsSecundarios = styled.div`
    width: 1440px;
    height: 115px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;
`

const BoxDescricao = styled.div`
    width: 1440px;
    height: 155px;
    display: flex;
    flex-direction: column;
`

function VideoNovo() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [video, setVideo] = useState("");
    const [descricao, setDescricao] = useState("");

    const aoMudar = (evento) => {
        const { name, value } = evento.target;

        switch (name) {
            case "titulo":
                setTitulo(value);
                break;
            case "categoria":
                setCategoria(value);
                break;
            case "imagem":
                setImagem(value);
                break;
            case "video":
                setVideo(value);
                break;
            case "descricao":
                setDescricao(value);
                break;
            default:
                break;
        }
    };

    const aoEnviar = async (evento) => {
        evento.preventDefault();

        const novoCard = {
            titulo,
            categoria,
            imagem,
            video,
            descricao
        };

        try {
            const response = await fetch("http://localhost:3000/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoCard)
            });

            if (!response.ok) {
                throw new Error("Erro ao criar novo card.");
            }

            setTitulo("");
            setCategoria("");
            setImagem("");
            setVideo("");
            setDescricao("");

            alert("Novo card criado com sucesso!");
        } catch (error) {
            console.error("Erro ao criar novo card:", error);
            alert("Erro ao criar novo card. Por favor, tente novamente.");
        }
    }

    const limparInputs = () => {

    }

    return (
        <>
            <ContainerVideoNovo>
                <BoxTitulos>
                    <h2>NOVO VÍDEO</h2>
                    <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
                </BoxTitulos>
                <div>
                    <Form onSubmit={aoEnviar}> 
                        <TituloEditar>Criar Card:</TituloEditar>
                        <BoxInputsPrimarios>
                            <div>
                                <Label>Título</Label>
                                <Input 
                                    type="text" 
                                    name="titulo" 
                                    value={titulo} 
                                    onChange={aoMudar} 
                                    placeholder="O que é JavaScript?" 
                                />
                            </div>
                            <div>
                                <Label>Categoria</Label>
                                <Select 
                                    name="categoria" 
                                    value={categoria} 
                                    onChange={aoMudar}
                                >
                                    <option value="">Selecione uma categoria</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="mobile">Mobile</option>
                                </Select>
                            </div>
                        </BoxInputsPrimarios>
                        <BoxInputsSecundarios>
                            <div>  
                                <Label>Imagem</Label>
                                <Input 
                                    type="text" 
                                    name="imagem"
                                    value={imagem}
                                    onChange={aoMudar}
                                    placeholder="URL da imagem" 
                                />
                            </div>
                            <div>
                                <Label>Vídeo</Label>
                                <Input 
                                    type="text"
                                    name="video"
                                    value={video}
                                    onChange={aoMudar}
                                    placeholder="URL do vídeo" 
                                />
                            </div>
                        </BoxInputsSecundarios>
                        <BoxDescricao>
                            <Label>Descrição</Label>
                            <TextArea 
                                name="descricao" 
                                value={descricao}
                                onChange={aoMudar}
                                placeholder="Descrição do conteúdo"
                            ></TextArea>
                        </BoxDescricao>
                        <BoxBotoes>
                            <Botao type="submit">SALVAR</Botao>
                            <Botao type="button" onClick={limparInputs}>LIMPAR</Botao>
                        </BoxBotoes>
                    </Form>
                </div>
            </ContainerVideoNovo>
        </>
    )
}

export default VideoNovo;