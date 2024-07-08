import styled from "styled-components";
import { TbTrashX } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import ModalEditar from "../ModalEditar";
import { useState } from "react";
import Notificacao from "../Notificacao/Index";
import ModalConfirmarExclusao from "../ModalConfirmarExclusao";

const ContainerSecao = styled.section`
    width: 1440px;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    gap: 40px;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 100%;
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        gap: 30px;
    }
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        gap: 20px;
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled.div`
    width: 432px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

const CategoriaTitulo = styled.div`
    width: 432px;
    height: 70px;
    border-radius: 15px;
    background-color: ${({ categoria }) => mudarCorDaCategoria(categoria)};
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    align-items: center;
    text-align: center;
    align-content: center;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 28px;
        height: 60px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        height: 50px;
    }
`

const BoxVideo = styled.div`
  width: 432px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 4px ${({ categoria }) => {
        switch (categoria) {
            case 'Frontend':
                return '#6BD1FF';
            case 'Backend':
                return '#00C86F';
            case 'Mobile':
                return '#FFBA05';
            default:
                return '#FFFFFF';
        }
    }};
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 0px 17px 8px ${({ categoria }) => {
        switch (categoria) {
            case 'Frontend':
                return '#6BD1FF';
            case 'Backend':
                return '#00C86F';
            case 'Mobile':
                return '#FFBA05';
            default:
                return '#FFFFFF';
        }
    }} inset;

    @media (max-width: 768px) {
        height: 220px;
    }

    @media (max-width: 480px) {
        height: 280px;
    }
`;

const BoxBotoes = styled.div`
    width: 432px;
    height: 59px;
    display: flex;
    flex-direction: row;
    border: solid 4px ${({ categoria }) => {
        switch (categoria) {
            case 'Frontend':
                return '#6BD1FF';
            case 'Backend':
                return '#00C86F';
            case 'Mobile':
                return '#FFBA05';
            default:
                return '#FFFFFF';
        }
    }};
    border-top: none;
    justify-content: space-around;
    align-items: center;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px -4px 18px 3px ${({ categoria }) => {
        switch (categoria) {
            case 'Frontend':
                return '#6BD1FF';
            case 'Backend':
                return '#00C86F';
            case 'Mobile':
                return '#FFBA05';
            default:
                return '#FFFFFF';
        }
    }};
    background-color: black;

    @media (max-width: 768px) {
        height: 50px;
    }

    @media (max-width: 480px) {
        height: 40px;
    }
`

const Botoes = styled.div`
    width: 113px;
    height: 28px;
    color: #FFF;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 5px;
    font-weight: 800;
    border: none;
    background-color: black;

    @media (max-width: 768px) {
        font-size: 14px;
        width: 90px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        width: 70px;
    }
`

const IconeLixeiraCustomizado = styled(TbTrashX)`
    color: #FFF;
    font-size: 55px;

    @media (max-width: 768px) {
        font-size: 45px;
    }

    @media (max-width: 480px) {
        font-size: 35px;
    }
`

const IconeEditarCustomizado = styled(TbEdit)`
    color: #FFF;
    font-size: 25px;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`

const BotaoEditar = styled.button`
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background-color: black;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`

const BotaoExcluir = styled.button`
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background-color: black;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`

const mudarCorDaCategoria = (categoria) => {
    switch (categoria) {
        case 'Frontend':
            return '#6BD1FF';
        case 'Backend':
            return '#00C86F';
        case 'Mobile':
            return '#FFBA05';
        default:
            return '#FFFFFF';
    }
}

function Secao({ categoria, cards, excluindo }) {
    const [modalAberto, setModalAberto] = useState(false);
    const [cardId, setCardId] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '', visible: false });
    const [modalEstaAberto, setModalEstaAberto] = useState(false);
    const [idExcluir, setIdExcluir] = useState(null);

    const abrirModal = (id) => {
        setIdExcluir(id);
        setModalEstaAberto(true);
    };

    const fecharModal = () => {
        setModalEstaAberto(false);
    };

    const estadoModalFechado = () => setModalAberto(false);

    const excluirCard = async () => {
        try {
            const resposta = await fetch(`https://668c6b2b0b61b8d23b0d4f6f.mockapi.io/cards/${idExcluir}`, {
                method: 'DELETE'
            });

            if (!resposta.ok) {
                throw new Error('Erro ao excluir o card');
            }

            excluindo(idExcluir);
            mostrarNotificacao("Card excluído com sucesso!", "success");
        } catch (error) {
            console.error("Erro ao deletar o card:", error);
            mostrarNotificacao("Erro ao excluir o card", "error");
        } finally {
            fecharModal();
        }
    };

    const abrirModalParaEdicao = (id) => {
        setCardId(id);
        setModalAberto(true);
    };

    const mostrarNotificacao = (message, type) => {
        setNotification({ message, type, visible: true });
        setTimeout(() => {
            setNotification({ ...notification, visible: false });
        }, 3000);
    };

    return (
        <ContainerSecao>
            <CategoriaTitulo categoria={categoria}>
                {categoria}
            </CategoriaTitulo>
            <CardContainer>
                <Notificacao
                    message={notification.message}
                    type={notification.type}
                    visible={notification.visible}
                />
                {cards && cards.map(card => (
                    <Card key={card.id}>
                        <BoxVideo categoria={categoria}>
                            <iframe
                                width="420"
                                height="250"
                                src={card.video}
                                title={card.titulo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            >
                            </iframe>
                        </BoxVideo>
                        <BoxBotoes categoria={categoria}>
                            <Botoes onClick={() => abrirModal(card.id)}>
                                <IconeLixeiraCustomizado />
                                <BotaoExcluir>DELETAR</BotaoExcluir>
                            </Botoes>
                            <Botoes>
                                <IconeEditarCustomizado />
                                <BotaoEditar onClick={() => abrirModalParaEdicao(card.id)}>EDITAR</BotaoEditar>
                            </Botoes>
                        </BoxBotoes>
                        <ModalEditar aberto={modalAberto} fechado={estadoModalFechado} cardId={cardId} />
                    </Card>
                ))}
            </CardContainer>
            <ModalConfirmarExclusao
                estaAberto={modalEstaAberto}
                estaFechado={fecharModal}
                confirmar={excluirCard}
            />
        </ContainerSecao>
    )
}

export default Secao;