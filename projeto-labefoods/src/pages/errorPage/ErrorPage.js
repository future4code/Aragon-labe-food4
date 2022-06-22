import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/cordinator"
import { Container } from "@mui/system"
import logo from "../../assets/logo-rappi4-white.png"
import { SplashError } from "./styled"

function ErrorPage () {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {goToHomePage(navigate)}, 5000)
    },[])

    return (
        <SplashError>
            <Container
            style={
                {
                height: '100vh',
                padding: 0,
                backgroundColor: '#e86e5a',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                }
            }
                maxWidth='sm' 
            >
                <img src={logo} alt="Logo Rappi4" />

                <p> <b>Página não encontrada </b> </ p>
       <p>Você será redirecionado para HomePage em 5s!</p>
            </Container>
        </SplashError>
    )
}

export default ErrorPage