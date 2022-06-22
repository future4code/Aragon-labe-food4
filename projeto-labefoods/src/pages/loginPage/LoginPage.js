import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToSignUpPage } from "../../routes/cordinator";
import { Button, Container, CssBaseline, TextField, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LoginContainer } from "./styled";
import logo from "../../assets/logo-rappi4-invert3x.png";

function LoginPage() {
  const navigate = useNavigate();

  const context = useContext(GlobalStateContext);

  const { login } = context.states;

  const { setLogin } = context.setters;

  const { postLogin } = context.posts;

  const onChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    postLogin(navigate);
  };

  return (
    <LoginContainer>
      <Container component="main" maxWidth="xs">
        
        <img src={logo} alt="Logo do Rappi4" />

        <Box
            sx={{
              m:2,
              display:"flex",
              flexDirection: "column",
              textAlign:"center",
            }}>
          <p>
            <b>Entrar</b>
          </p>

          <Box component="form" onSubmit={signIn} sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              placeholder="email@email.com"
              fullWidth
              value={login.email}
              onChange={onChangeLogin}
              autoFocus
            />

            <TextField
              margin="normal"
              fullWidth
              name="password"
              type="password"
              label="password"
              id="senha"
              placeholder="mínimo 6 caracteres"
              autoComplete="digite seu email"
              value={login.password}
              onChange={onChangeLogin}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#E86E5A", color: "#000000" }}
            >
              <b>Entrar</b>
            </Button>

            <Typography
              component="h3"
              sx={{ fontWeight: "bold" }}
              onClick={() => goToSignUpPage(navigate)}
            >
              Não possui cadastro? Clique aqui.
            </Typography>
          </Box>
          </Box>
      </Container>
    </LoginContainer>
  );
}

export default LoginPage;
