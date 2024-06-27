import styled from "styled-components";

const ContainerBanner = styled.section`
    width: 1440px;
    height: 707px;
    margin: 0 auto;
    max-width: 100%;
    position: relative; 
    overflow: hidden;
`;

const BackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    object-fit: cover;
`;

const CaixaConteudo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
` 

const Content = styled.div`
    width: 55%;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
`;

const ContentVideo = styled.div`
    width: 646px;
    height: 333px;
`

const PlayerImagem = styled.img`
    width: 646px;
    height: 333px;
    position: relative;
    z-index: 5;
`

const BotaoCustomizado = styled.button`
    width: 296px;
    height: 92px;
    font-weight: 700;
    font-size: 42px;
    border-radius: 15px;
    line-height: 56px;
    align-items: center;
    color: #FFF;
    background-color: #6BD1FF;
`

const TituloCustomizado = styled.h2`
    font-size: 46px;
    font-weight: 400;
`

function Banner() {
    return (
        <ContainerBanner>
            <BackgroundImg src="./imagens/bgbanner.png" alt="Background Banner" />
            <CaixaConteudo>
                <Content>
                    <BotaoCustomizado>
                        FRONT END
                    </BotaoCustomizado>
                    <TituloCustomizado>
                        SEO com React
                    </TituloCustomizado>
                    <p>
                        Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app 
                        inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance
                        e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. 
                        Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex! 
                    </p>
                </Content>
                <ContentVideo>
                    <PlayerImagem src="./imagens/player.png" alt="Player Video" />
                </ContentVideo>
            </CaixaConteudo>
        </ContainerBanner>
    );
}

export default Banner;
