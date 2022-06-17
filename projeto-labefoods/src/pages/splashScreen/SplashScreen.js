import { Container } from "@mui/system"
import { Splash } from "./styled"
import logo from "../../assets/logo-future-eats@3x.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToLoginPage } from "../../routes/cordinator"


function SplashScreen () {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {goToLoginPage(navigate)}, 5000)
    },[])

    return (
        <Splash>
            <Container
            style={
                {
                height: '100vh',
                padding: 0,
                backgroundColor: '#e86e5a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }
            }
                maxWidth='sm' // testar com sm
            >
                <img src={logo} alt="Logo Rappi4" />
            </Container>
        </Splash>
    )
}

export default SplashScreen