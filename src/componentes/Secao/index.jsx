import styled from "styled-components";

const ContainerSecao = styled.section`
    width: 1440px;
    height: 507px;
    margin: 0 auto;
    max-width: 100%;
    margin-top: 20px;
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

function Secao() {
    return (
        <ContainerSecao>
            <SecaoFrontend>
                FRONT END
            </SecaoFrontend>
            <div>
                <div>
                    <video />
                    <div>
                        icone deletar
                    </div>
                    <div>
                        icone editar
                    </div>
                </div>
            </div>
        </ContainerSecao>
    )
}

export default Secao;