import { useState } from "react";
import styled from "styled-components";
import dominiosProibidos from '../../database/dominiosProibidos.json';
import Notificacao from "../../componentes/Notificacao/Index";

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

    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
        padding: 20px;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 10px;
    }

    @media (max-width: 480px) {
        width: auto;
    }
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

    @media (max-width: 768px) {
        font-size: 28px;
        height: auto;
        padding: 10px 0;
        line-height: 40px;
    }

    @media (max-width: 768px) {
        width: 400px;
    }

    @media (max-width: 480px) {
        width: 380px;
    }
`

const Input = styled.input`
    width: 573px;
    height: 62px;
    padding: 8px;
    margin-top: 5px;
    font-size: 16px;
    color: #FFF;
    background-color: #262626;
    border-radius: 10px;
    border: 3px solid #cccccc5c;

    @media (max-width: 768px) {
        width: 100%;
        height: 50px;
    }

    @media (max-width: 768px) {
        width: 600px;
    }

    @media (max-width: 480px) {
        width: 380px;
    }
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

    @media (max-width: 768px) {
        width: 100%;
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 396px;
        height: 70px;
    }
`;

const TextArea = styled.textarea`
    width: 573px;
    height: 112px;
    padding: 8px;
    margin-top: 5px;
    color: #FFF;
    border: 3px solid #cccccc5c;
    font-size: 16px;
    background-color: #262626;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: 100px;
    }

    @media (max-width: 480px) {
        width: 380px;
    }
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

    @media (max-width: 768px) {
        width: 160px;
        height: 50px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 140px;
        height: 45px;
        font-size: 16px;
    }
`;

const Form = styled.form`
    width: 1440px;
    height: 655px;
    display: flex;
    background-color: #262626;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;

    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
        padding: 20px;
    }

    @media (max-width: 768px) {
        height: auto;
        padding: 10px;
    }

    @media (max-width: 480px) {
        width: 410px;
    }
`

const BoxBotoes = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        margin-top: 10px;
    }

    @media (max-width: 480px) {
        width: 390px;
        flex-direction: row;
    }
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

        @media (max-width: 768px) {
            font-size: 40px;
            line-height: 50px;
        }

        @media (max-width: 480px) {
            font-size: 30px;
            line-height: 40px;
        }
    }
    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;

        @media (max-width: 768px) {
            font-size: 16px;
            line-height: 20px;
        }

        @media (max-width: 480px) {
            width: 300px;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
        }
    }
`

const BoxInputsPrimarios = styled.div`
    width: 1440px;
    height: 115px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
        height: auto;
        gap: 10px;
    }
`

const BoxInputsSecundarios = styled.div`
    width: 1440px;
    height: 115px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
        height: auto;
        gap: 10px;
    }
`

const BoxDescricao = styled.div`
    width: 1440px;
    height: 155px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 600px;
    }

    @media (max-width: 480px) {
        width: 400px;
    }
`

const Error = styled.div`
    color: red;
    margin-top: 6px;
    letter-spacing: 2px;
    font-size: 16px;
`;

const BoxInputs = styled.div`
    @media (max-width: 768px) {
        width: 600px;
    }

    @media (max-width: 480px) {
        width: 400px;
    }
`;

function VideoNovo() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [video, setVideo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });

    const validarURL = (url) => {
        try {
            new URL(url);
            const dominio = new URL(url).hostname;
            if (dominiosProibidos.some(proibido => dominio.includes(proibido))) {
                return false;
            }
            return true;
        } catch (_) {
            return false;
        }
    }

    const validar = () => {
        const novoErrors = {};

        const campos = { titulo, categoria, imagem, video, descricao };

        Object.entries(campos).forEach(([key, value]) => {
            switch (key) {
                case "titulo":
                    if (!value) novoErrors[key] = "O Título é obrigatório";
                    break;
                case "categoria":
                    if (!value) novoErrors[key] = "A categoria é obrigatória";
                    break;
                case "imagem":
                    if (!value) {
                        novoErrors[key] = "A imagem é obrigatória";
                    } else if (!validarURL(value)) {
                        novoErrors[key] = "A URL da imagem é inválida";
                    }
                    break;
                case "video":
                    if (!value) {
                        novoErrors[key] = "O vídeo é obrigatório";
                    } else if (!validarURL(value)) {
                        novoErrors[key] = "A URL do vídeo é inválida";
                    }
                    break;
                case "descricao":
                    if (!value) novoErrors[key] = "A descrição é obrigatória";
                    break;
            }
        });

        return novoErrors;
    };


    const limparErrosInputAoDigitar = (evento) => {
        const { name, value } = evento.target;

        setErrors((prevErrors) => {
            const { [name]: removedError, ...newErrors } = prevErrors;
            return newErrors;
        });

        const atualizarEstado = {
            titulo,
            categoria,
            imagem,
            video,
            descricao
        };

        if (atualizarEstado[name]) {
            atualizarEstado[name](value);
        }
    };

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

        const novoErrors = validar();

        const novoCard = {
            titulo,
            categoria,
            imagem,
            video,
            descricao
        };

        if (Object.keys(novoErrors).length === 0) {
            try {
                const response = await fetch("https://668c6b2b0b61b8d23b0d4f6f.mockapi.io/cards", {
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
                mostrarNotificacao("Novo card criado com sucesso!", "success");
            } catch (error) {
                console.error("Erro ao criar novo card:", error);
                mostrarNotificacao("Erro ao criar novo card. Por favor, tente novamente.", "error");
            }
        } else {
            setErrors(novoErrors);
        }
    };

    const limparInputs = () => {
        setTitulo("");
        setCategoria("");
        setImagem("");
        setVideo("");
        setDescricao("");
    };

    const mostrarNotificacao = (message, type) => {
        setNotification({ message, type, visible: true });
        setTimeout(() => {
            setNotification({ ...notification, visible: false });
        }, 3000);
    };

    const combinarOnChanges = (limparErrosInputAoDigitar, aoMudar) => (evento) => {
        if (limparErrosInputAoDigitar) limparErrosInputAoDigitar(evento);
        if (aoMudar) aoMudar(evento);
    };

    return (
        <>
            <Notificacao
                message={notification.message}
                type={notification.type}
                visible={notification.visible}
            />
            <ContainerVideoNovo>
                <BoxTitulos>
                    <h2>NOVO VÍDEO</h2>
                    <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
                </BoxTitulos>
                <div>
                    <Form onSubmit={aoEnviar}>
                        <TituloEditar>Criar Card:</TituloEditar>
                        <BoxInputsPrimarios>
                            <BoxInputs>
                                <Label>Título</Label>
                                <Input
                                    type="text"
                                    name="titulo"
                                    value={titulo}
                                    onChange={combinarOnChanges(aoMudar, limparErrosInputAoDigitar)}
                                    placeholder="O que é JavaScript?"
                                />
                                {errors.titulo && <Error>{errors.titulo}</Error>}
                            </BoxInputs>
                            <BoxInputs>
                                <Label>Categoria</Label>
                                <Select
                                    name="categoria"
                                    value={categoria}
                                    onChange={combinarOnChanges(aoMudar, limparErrosInputAoDigitar)}
                                >
                                    <option value="">Selecione uma categoria</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="mobile">Mobile</option>
                                </Select>
                                {errors.categoria && <Error>{errors.categoria}</Error>}
                            </BoxInputs>
                        </BoxInputsPrimarios>
                        <BoxInputsSecundarios>
                            <BoxInputs>
                                <Label>Imagem</Label>
                                <Input
                                    type="text"
                                    name="imagem"
                                    value={imagem}
                                    onChange={combinarOnChanges(aoMudar, limparErrosInputAoDigitar)}
                                    placeholder="URL da imagem"
                                />
                                {errors.imagem && <Error>{errors.imagem}</Error>}
                            </BoxInputs>
                            <BoxInputs>
                                <Label>Vídeo</Label>
                                <Input
                                    type="text"
                                    name="video"
                                    value={video}
                                    onChange={combinarOnChanges(aoMudar, limparErrosInputAoDigitar)}
                                    placeholder="URL do vídeo"
                                />
                                {errors.video && <Error>{errors.video}</Error>}
                            </BoxInputs>
                        </BoxInputsSecundarios>
                        <BoxDescricao>
                            <Label>Descrição</Label>
                            <TextArea
                                name="descricao"
                                value={descricao}
                                onChange={combinarOnChanges(aoMudar, limparErrosInputAoDigitar)}
                                placeholder="Descrição do conteúdo"
                            />
                            {errors.descricao && <Error>{errors.descricao}</Error>}
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