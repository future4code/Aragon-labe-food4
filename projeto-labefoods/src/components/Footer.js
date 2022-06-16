import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToCartPage, goToHomePage, goToProfilePage } from "../routes/cordinator";

const FooterRappi = styled.footer`
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px
}
`

function Footer () {

    const navigate = useNavigate()

    return (
        <FooterRappi>
            <ul>
                <li><button onClick={() => goToHomePage(navigate)}>Home</button></li>
                <li><button onClick={() => goToCartPage(navigate)}>Carrinho</button></li>
                <li><button onClick={() => goToProfilePage(navigate)}>Perfil</button></li>
            </ul>
        </FooterRappi>
    )
}

export default Footer;