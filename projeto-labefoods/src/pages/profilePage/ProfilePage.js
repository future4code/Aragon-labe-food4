import { useContext, useEffect } from "react"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Header from "../../components/header/Header";
import { goToEditAddressPage, goToEditProfilePage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom"
// import Footer from "../../components/footer/Footer";
import { ProfileStyle } from "./styled";
import { Box, Container } from "@mui/material";
import logo from "../../assets/logo-rappi4-invert3x.png";


function ProfilePage () {

    const navigate = useNavigate()

    const context = useContext(GlobalStateContext)

    const { address, profile } = context.states

    const { getFullAddress, getProfile } = context.getters

    useEffect(() => {
        getFullAddress()
        getProfile()
    },[])

    return (
        <ProfileStyle>
        <Container component="main" maxWidth="xs">
          <img src={logo} alt="Logo do Rappi4" />
  
          <Box
            sx={{
              m: 2,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
          <Header currentPage={"profile"}/>
        { profile ?
        <section key={profile.id}>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
            <button onClick={() => {goToEditProfilePage(navigate)}}>Editar</button>
        </section> : <p>Carregando...</p>}
        
        { address? 
        <section>
            <span>{address.street},</span>
            <span> {address.number}</span>
            {address.complement !== null && 
            <span>, {address.complement}</span>}
            <span> - {address.neighbourhood}</span>
            <button onClick={() => {goToEditAddressPage(navigate)}}>Editar</button>
        </section> : <p>Carregando...</p>}
        <footer>
        </footer>
            </Box>
        </Container>
      </ProfileStyle>
    );
  }


export default ProfilePage 