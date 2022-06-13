import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/cordinator"

function SplashScreen () {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {goToLoginPage(navigate)}, 5000)
    },[])

    return (
        <>
        <h1>Rappi4</h1>
        </>
    )
}

export default SplashScreen