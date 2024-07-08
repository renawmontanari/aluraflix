import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Notificacao from "../Notificacao/Index";

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.281);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1500px;
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

    @media (max-width: 1200px) {
        width: 80%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }

    @media (max-width: 480px) {
        width: 95%;
        height: auto;
    }
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

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`

const Input = styled.input`
    width: 573px;
    height: 62px;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #00aa00;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;

    @media (max-width: 768px) {
        width: 550px;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

const Select = styled.select`
    width: 599px;
    height: 82px;
    padding: 8px;
    margin-top: 5px;
    color: #00aa00; 
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;

    @media (max-width: 768px) {
        width: 550px;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

const TextArea = styled.textarea`
    width: 573px;
    height: 112px;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #00aa00;
    background-color: #03122F;
    border-radius: 10px;
    border: 3px solid #2271D1;

    @media (max-width: 768px) {
        width: 550px;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
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
    width: 974px;
    height: 955px;
    background-color: #03122F;
    display: flex;
    gap: 40PX;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 80%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }

    @media (max-width: 480px) {
        width: 95%;
        height: auto;
    }
`

const BoxBotoes = styled.div`
    display: flex;
    gap: 230px;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        gap: 150px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 20px;
    }
`

const IconeFechar = styled(RiCloseCircleLine)`
    font-size: 58px;
    color: #FFF;

    @media (max-width: 768px) {
        font-size: 48px;
    }

    @media (max-width: 480px) {
        font-size: 38px;
    }
`

// eslint-disable-next-line react/prop-types
function ModalEditar({ 
    aberto, 
    fechado,
    cardId
 }) {
    const [titulo, setLocalTitulo] = useState("");
    const [categoria, setLocalCategoria] = useState("");
    const [imagem, setLocalImagem] = useState("");
    const [video, setLocalVideo] = useState("");
    const [descricao, setLocalDescricao] = useState(""); 
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });

    useEffect(() => {
        if (aberto) {
            const requisicaoDadosCard = async () => {
                try {
                    const resposta = await fetch(`https://668c6b2b0b61b8d23b0d4f6f.mockapi.io/cards/${cardId}`);
                    const data = await resposta.json();
                    const { titulo, categoria, imagem, video, descricao } = data;
                    setLocalTitulo(titulo);
                    setLocalCategoria(categoria);
                    setLocalImagem(imagem);
                    setLocalVideo(video);
                    setLocalDescricao(descricao);
                } catch (error) {
                    console.error("Erro ao buscar dados do card:", error);
                }
            };
            
            requisicaoDadosCard();
        }
    }, [aberto, cardId]);

    const aoSalvar = async () => {
        const cardAtualizado = {
            titulo: titulo,
            categoria: categoria,
            imagem: imagem,
            video: video,
            descricao: descricao
        };

        try {
            const resposta = await fetch(`https://668c6b2b0b61b8d23b0d4f6f.mockapi.io/cards/${cardId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cardAtualizado)
            });

            if (!resposta.ok) {
                throw new Error('Erro ao atualizar card');
            }

            mostrarNotificacao("Card atualizado com sucesso!", "success");
            fechado();
        } catch (error) {
            console.error("Erro ao atualizar o card:", error);
            mostrarNotificacao("Erro ao atualizar o card.", "error");
        }
    };

    const limparInputs = () => {
        setLocalTitulo('');
        setLocalCategoria('');
        setLocalImagem('');
        setLocalVideo('');
        setLocalDescricao('');
    };

    const mostrarNotificacao = (message, type) => {
        setNotification({ message, type, visible: true });
        setTimeout(() => {
            setNotification({ ...notification, visible: false });
        }, 3000);
    };

    return (
        <>
            <Notificacao
                message={notification.message}
                type={notification.type}
                visible={notification.visible}
            />
            <Overlay aberto={aberto} onClick={fechado} />
            <DialogEstilizado aberto={aberto}>
                <BotaoFecharModal onClick={fechado}>
                    <IconeFechar />
                </BotaoFecharModal>
                <Form>
                    <TituloEditar>EDITAR CARD:</TituloEditar>
                    <div>
                        <Label>Título</Label>
                        <Input 
                            type="text" 
                            value={titulo} 
                            onChange={(evento) => setLocalTitulo(evento.target.value)} 
                            placeholder="O que é JavaScript?" 
                        />
                    </div>

                    <div>
                        <Label>Categoria</Label>
                        <Select
                            value={categoria}
                            onChange={(evento) => setLocalCategoria(evento.target.value)}
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="mobile">Mobile</option>
                        </Select>
                    </div>

                    <div>
                        <Label>Imagem</Label>
                        <Input 
                            type="text" 
                            value={imagem} 
                            onChange={(evento) => setLocalImagem(evento.target.value)} 
                            placeholder="URL da imagem" 
                        />
                    </div>

                    <div>
                        <Label>Vídeo</Label>
                        <Input 
                            type="text" 
                            value={video} 
                            onChange={(evento) => setLocalVideo(evento.target.value)} 
                            placeholder="URL do vídeo" 
                        />
                    </div>

                    <div>
                        <Label>Descrição</Label>
                        <TextArea 
                            value={descricao} 
                            onChange={(evento) => setLocalDescricao(evento.target.value)} 
                            placeholder="Descrição do conteúdo"></TextArea>
                    </div>

                    <BoxBotoes>
                        <Botao type="button" onClick={aoSalvar}>SALVAR</Botao>
                        <Botao type="button" onClick={limparInputs}>LIMPAR</Botao>
                    </BoxBotoes>
                </Form>
            </DialogEstilizado>
        </>
    )
}

export default ModalEditar;