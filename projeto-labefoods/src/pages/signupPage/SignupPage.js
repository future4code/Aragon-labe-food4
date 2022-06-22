import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToAddressPage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import { SignupStyle } from "./styled";
import { Box, Button, Container, TextField } from "@mui/material";
import logo from "../../assets/logo-rappi4-invert3x.png";

function SignupPage() {
  const navigate = useNavigate();

  const context = useContext(GlobalStateContext);

  const { signUp, checker } = context.states;

  const { setSignUp, setChecker } = context.setters;

  const { postSignUp } = context.posts;

  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const onChangeChecker = (e) => {
    setChecker({ ...checker, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    postSignUp();
    goToAddressPage(navigate);
  };

  return (
    <SignupStyle>
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
          <p>
            <b>Cadastrar</b>
          </p>

          <Box component="form" onSubmit={register} sx={{ mt: 1 }}>
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
              value={checker.email}
              onChange={onChangeChecker}
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
            {checker.email !== signUp.email && (
              <p>
                <b>Repita o mesmo email</b>
              </p>
            )}
            <br />

            <TextField
              margin="normal"
              required
              id="CPF"
              label="CPF"
              name="cpf"
              type="number"
              placeholder="Somente números"
              fullWidth
              value={signUp.cpf}
              onChange={onChangeSignUp}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="password"
              label="password"
              name="password"
              type="password"
              placeholder="Mínimo seis caracteres"
              fullWidth
              value={checker.password}
              onChange={onChangeChecker}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="password"
              label="password"
              name="password"
              type="password"
              placeholder="Confirme a senha anterior"
              fullWidth
              value={signUp.password}
              onChange={onChangeSignUp}
              autoFocus
            />
            {checker.password !== signUp.password && (
              <p>repita a mesma senha</p>
            )}

            <br />
            {checker.password === signUp.password &&
            checker.email === signUp.email ? (
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#E86E5A", color: "#000000" }}
            >
              <b>Cadastrar</b>
            </Button>
            ) : (
              <Button
              disabled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#E86E5A", color: "#000000" }}
            >
              Cadastrar
            </Button>
            )}
          </Box>
        </Box>
      </Container>
    </SignupStyle>
  );
}

export default SignupPage;
