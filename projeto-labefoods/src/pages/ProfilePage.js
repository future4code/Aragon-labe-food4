import { useContext, useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { convertCPF } from "../utils/convertCPF"

function ProfilePage () {

    const context = useContext(GlobalStateContext)

    const { fullAddress, profile } = context.states

    const { getFullAddress, getProfile } = context.getters

    useEffect(() => {
        getFullAddress()
        getProfile()
    },[])

    return (
        <>
        <Header currentPage={"profile"}/>

        { profile ?
        <section key={profile.id}>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{convertCPF(profile.cpf)}</p>
        </section> : <p>Carregando...</p>}
        
        { fullAddress.address? 
        <section>
            <span>{fullAddress.address.street},</span>
            <span> {fullAddress.address.number}</span>
            {fullAddress.address.complement !== null && 
            <span>, {fullAddress.address.complement}</span>}
            <span> - {fullAddress.address.neighbourhood}</span>
        </section> : <p>Carregando...</p>}
        
        <section>

        </section>

        <Footer />
        </>
    )
}

export default ProfilePage 