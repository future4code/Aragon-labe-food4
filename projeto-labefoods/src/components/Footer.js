import styled from "styled-components";

const FooterRappi = styled.footer`
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px
}
`

function Footer () {
    return (
        <FooterRappi>
            <ul>
                <li><button>Home</button></li>
                <li><button>Carrinho</button></li>
                <li><button>Perfil</button></li>
            </ul>
        </FooterRappi>
    )
}

export default Footer;