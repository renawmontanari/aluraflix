import styled from "styled-components";
import logo from './logo.png';

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
            <img src={logo} alt="Logo-Aluraflix" />
        </FooterCustomizado>
    )
}

export default Footer;