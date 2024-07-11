import styled from "styled-components";
import logo from './logo.png';

const FooterCustomizado = styled.footer`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
    height: 125px;
    display: flex;
    color: #FFF;
    gap: 25px;
    font-size: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #000000E5;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;

    @media (max-width: 1200px) {
        width: 100%;
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        height: 100px;
        gap: 20px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 400px;
        font-size: 16px;
        p {
            font-size: 14px;
        }
    }
`

function Footer() {
    return (
        <>
            <FooterCustomizado>
                <img src={logo} alt="Logo-Aluraflix" />
                <p>Desenvolvido por Renan W. Montanari - Challenge T6 - ONE</p>
            </FooterCustomizado>
        </>
    )
}

export default Footer;