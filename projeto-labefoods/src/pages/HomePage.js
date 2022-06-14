import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { goToAdressPage } from "../routes/cordinator"

function HomePage() {

    const context = useContext(GlobalStateContext)

    const { profile } = context.states

    const { getProfile } = context.getters

    useEffect(() => { getProfile() }, [])
    const navigate = useNavigate()

    useEffect(() => {
        if (profile.user.hasAddress === false) {
            goToAdressPage(navigate)
        }
    })

    return (
        <>
            HomePage
        </>
    )
}

export default HomePage