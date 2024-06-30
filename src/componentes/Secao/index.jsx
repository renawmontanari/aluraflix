import styled from "styled-components";
import { TbTrashX } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import ModalEditar from "../ModalEditar";
import { useState } from "react";

const ContainerSecao = styled.section`
    width: 1440px;
    height: 507px;
    margin: 0 auto;
    max-width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 40px;
    flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Card = styled.div`
  width: 432px;
  display: flex;
  flex-direction: column;
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
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px -4px 5px 3px ${({ categoria }) => {
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
`

const IconeLixeiraCustomizado = styled(TbTrashX)`
    color: #FFF;
    font-size: 25px;
`

const IconeEditarCustomizado = styled(TbEdit)`
    color: #FFF;
    font-size: 25px;
`

const BotaoEditar = styled.button`
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background-color: black;
`

const BotaoExcluir = styled.button`
    color: #FFF;
    font-size: 16px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background-color: black;
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

function Secao({ titulo, categoria, imagem, video, descricao, cards, excluindo }) {
    const [modalAberto, setModalAberto] = useState(false);
    const [cardEditando, setCardEditando] = useState(null);
    const [tituloEdit, setTituloEdit] = useState();
    const [imagemEdit, setImagemEdit] = useState();
    const [videoEdit, setVideoEdit] = useState();
    const [descricaoEdit, setDescricaoEdit] = useState();
    const [categoriaEdit, setCategoriaEdit] = useState("");

    const abrirModalEditar = (card) => {
        setCardEditando(card);
        setTituloEdit(card.titulo);
        setImagemEdit(card.imagem);
        setVideoEdit(card.video);
        setDescricaoEdit(card.descricao);
        setCategoriaEdit(card.categoria);
        setModalAberto(true);
    }

    const fecharModalEditar = () => {
        setModalAberto(false);
    }

    const salvarEdicao = () => {
        const novoCard = {
            ...cardEditando,
            tituloEdit: tituloEdit,
            imagemEdit: imagemEdit,
            videoEdit: videoEdit,
            descricaoEdit: descricaoEdit,
            categoria: categoriaEdit
        };

        const novosCards = cards.map(card => (
            card.id === cardEditando.id ? novoCard : card
        ));

        excluindo(novosCards);

        fecharModalEditar();
    }

   
    const estadoModalFechado = () => setModalAberto(false);

    const excluirCard = (id) => {
        excluindo(id);
    }

    return (
        <ContainerSecao>
            <CategoriaTitulo categoria={categoria}>
                {categoria}
            </CategoriaTitulo>
            <CardContainer>
                {cards && cards.map(card => (
                    <Card key={card.id}>
                        <BoxVideo categoria={categoria}>
                            <iframe
                                width="420"
                                height="250"
                                src={video}
                                title={titulo}  
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                >
                            </iframe>
                        </BoxVideo>
                        <BoxBotoes categoria={categoria}>
                            <Botoes onClick={() => excluirCard(card.id)}>
                                <IconeLixeiraCustomizado /> 
                                <BotaoExcluir>DELETAR</BotaoExcluir>
                            </Botoes>
                            <Botoes>
                                <IconeEditarCustomizado />
                                <BotaoEditar onClick={() => abrirModalEditar(card)}>EDITAR</BotaoEditar>
                            </Botoes>
                        </BoxBotoes>
                        <ModalEditar aberto={modalAberto} fechado={estadoModalFechado} />
                    </Card>
                ))}
            </CardContainer>
            <ModalEditar
                aberto={modalAberto}
                fechado={fecharModalEditar}
                tituloEdit={tituloEdit}
                setTitulo={setTituloEdit}
                imagemEdit={imagemEdit}
                setImagem={setImagemEdit}
                videoEdit={videoEdit}
                setVideo={setVideoEdit}
                descricaoEdit={descricaoEdit}
                setDescricaoEdit={setDescricaoEdit}
                categoriaEdit={categoriaEdit}
                setCategoriaEdit={setCategoriaEdit}
                salvarEdicao={salvarEdicao}
            />
        </ContainerSecao>
    )
}

export default Secao;