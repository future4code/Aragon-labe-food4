import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/cordinator"

function ErrorPage () {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {goToHomePage(navigate)}, 3000)
    },[])

    return (
        <>
       Página não encontrada. Você será redirecionado para HomePage em 3s!
        
        </>
    )
}

export default ErrorPage