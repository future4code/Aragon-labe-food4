import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToHomePage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { AddressStyle } from "./Styled";
import { Box, Button, Container, TextField } from "@mui/material";
import logo from "../../assets/logo-rappi4-invert3x.png";

function AddressPage() {
  const context = useContext(GlobalStateContext);

  const { address } = context.states;

  const { setAddress } = context.setters;

  const { addAddress } = context.puts;

  const onChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const saveAddress = (e) => {
    e.preventDefault();
    addAddress();
    goToHomePage(navigate);
  };

  return (
    <AddressStyle>
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
          <Header currentPage={"address"} />

          <Box component="form" onSubmit={saveAddress} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="Logradouro"
              label="Logradouro"
              name="street"
              autoComplete
              fullWidth
              placeholder="Rua / Av."
              value={address.street}
              onChange={onChangeAddress}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="Número"
              label="Número"
              name="number"
              autoComplete
              fullWidth
              placeholder="Número"
              value={address.number}
              onChange={onChangeAddress}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="Complemento"
              label="Complemento"
              name="complement"
              autoComplete
              fullWidth
              placeholder="Apto. / Bloco"
              value={address.complement}
              onChange={onChangeAddress}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="Bairro"
              label="Bairro"
              name="neighbourhood"
              autoComplete
              fullWidth
              placeholder="Bairro"
              value={address.neighbourhood}
              onChange={onChangeAddress}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="Cidade"
              label="Cidade"
              name="city"
              autoComplete
              fullWidth
              placeholder="Cidade"
              value={address.city}
              onChange={onChangeAddress}
              autoFocus
            />

            <TextField
              margin="normal"
              required
              id="Estado"
              label="Estado"
              name="state"
              autoComplete
              fullWidth
              placeholder="Estado"
              value={address.state}
              onChange={onChangeAddress}
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#E86E5A", color: "#000000" }}
            >
              <b>Salvar</b>
            </Button>
          </Box>
        </Box>
      </Container>
    </AddressStyle>
  );
}

export default AddressPage;
