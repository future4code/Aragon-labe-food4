import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { EditProfileStyle } from "./styled"
import { Box, Container } from "@mui/material"
import logo from "../../assets/logo-rappi4-invert3x.png"


function EditProfilePage() {

    const context = useContext(GlobalStateContext)

    const { signUp } = context.states

    const { setSignUp } = context.setters;


    const { updateProfile } = context.puts

    const onChangeSignUp = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
      };
      const navigate = useNavigate()
    const updateUserData = (e) => {
        e.preventDefault()
        updateProfile(navigate)
    }

    return (
        <EditProfileStyle>
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
                        <Header currentPage={"edit-profile"} />
            <section>
                <form onSubmit={updateUserData}>
                    <label htmlFor="name">Nome*</label>
                    <input
                        id="name"
                        placeholder="Nome completo"
                        name="name"
                        value={signUp.name}
                        onChange={onChangeSignUp}
                        required
                    />

                    <br />
                    <label htmlFor="email">Email*</label>
                    <input
                        id="email"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={signUp.email}
                        onChange={onChangeSignUp}
                        required
                    />
                    <br />

                    <label htmlFor="cpf">CPF*</label>
                    <input
                        pattern=""
                        id="cpf"
                        placeholder="Somente números"
                        name="cpf"
                        type="number"
                        value={signUp.cpf}
                        onChange={onChangeSignUp}
                        required
                    />
                    <button>Atualizar</button>
                </form>
            </section>
            <Footer />
            </Box>
        </Container>
      </EditProfileStyle>
    );
}

export default EditProfilePage