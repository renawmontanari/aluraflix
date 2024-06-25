import styled from "styled-components";

const FooterCustomizado = styled.footer`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #262626;
`

function Footer() {
    return (
        <FooterCustomizado>
            <img src="./imagens/logo.png" alt="Logo-Aluraflix" />
        </FooterCustomizado>
    )
}

export default Footer;