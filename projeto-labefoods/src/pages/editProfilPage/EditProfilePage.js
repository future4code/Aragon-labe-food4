import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { EditProfileStyle } from "./styled";
import { Box, Button, Container, TextField } from "@mui/material";
import logo from "../../assets/logo-rappi4-invert3x.png";

function EditProfilePage() {
  const context = useContext(GlobalStateContext);

  const { signUp } = context.states;

  const { setSignUp } = context.setters;

  const { updateProfile } = context.puts;

  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const updateUserData = (e) => {
    e.preventDefault();
    updateProfile(navigate);
  };

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

          <Box component="form" onSubmit={updateUserData} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="name"
              label="nome"
              name="name"
              autoComplete="name"
              placeholder="Nome e sobrenome"
              fullWidth
              value={signUp.name}
              onChange={onChangeSignUp}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="email"
              label="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@email.com"
              fullWidth
              value={signUp.email}
              onChange={onChangeSignUp}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="email"
              label="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Confirme o email anterior"
              fullWidth
              value={signUp.email}
              onChange={onChangeSignUp}
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#E86E5A", color: "#000000" }}
            >
              <b>Cadastrar</b>
            </Button>
          </Box>
          <Footer />
        </Box>
      </Container>
    </EditProfileStyle>
  );
}

export default EditProfilePage;
