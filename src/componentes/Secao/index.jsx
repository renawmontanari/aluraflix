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

const SecaoFrontend = styled.div`
    width: 432px;
    height: 70px;
    border-radius: 15px;
    background-color: #6BD1FF;
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    align-items: center;
    text-align: center;
    align-content: center;
`

const BoxVideo = styled.div`
    width: 432px;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 4px #6BD1FF;
    border-radius: 4px 4px 0px 0px;
    box-shadow: 0px 0px 17px 8px #6BD1FF inset;
`

const BoxBotoes = styled.div`
    width: 432px;
    height: 59px;
    display: flex;
    flex-direction: row;
    border: solid 4px #6BD1FF;
    border-top: none;
    justify-content: space-around;
    align-items: center;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px -4px 5px 3px #6BD1FF inset;
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

function Secao() {
    const [modalAberto, setModalAberto] = useState(false);

    const estadoModalAberto = () => {
        setModalAberto(true);
    };

    const estadoModalFechado = () => {
        setModalAberto(false);
    };

    return (
        <ContainerSecao>
            <SecaoFrontend>
                FRONTEND
            </SecaoFrontend>
            <div>
                <BoxVideo>
                    <iframe 
                        width="420" 
                        height="250" 
                        src="https://www.youtube.com/embed/dEbe0rS4Z2A?si=K8qZgneoIvbkwRDx" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </BoxVideo>
                <BoxBotoes>
                    <Botoes>
                        <IconeLixeiraCustomizado /> DELETAR
                    </Botoes>
                    <Botoes>
                        <IconeEditarCustomizado /> 
                        <BotaoEditar onClick={estadoModalAberto}>EDITAR</BotaoEditar>
                    </Botoes>
                </BoxBotoes>
            </div>
            <ModalEditar aberto={modalAberto} fechado={estadoModalFechado} />
        </ContainerSecao>
    )
}

export default Secao;