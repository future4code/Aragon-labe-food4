import { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToProfilePage } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { EditAddressStyle } from "../editAddressPage/Styled";
import { Box, Button, Container, TextField } from "@mui/material";

function EditAddressPage() {
  const context = useContext(GlobalStateContext);

  const { address } = context.states;

  const { setAddress } = context.setters;

  const { addAddress } = context.puts;

  const { getFullAddress } = context.getters;

  const onChangeAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const saveAddress = (e) => {
    e.preventDefault();
    addAddress();
    goToProfilePage(navigate);
  };

  useEffect(() => {
    getFullAddress();
  }, []);

  return (
    <EditAddressStyle>
      <Container component="main" maxWidth="xs">

        <Box
          sx={{
            m: 2,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Header currentPage={"edit-address"} />

          <Box component="form" onSubmit={saveAddress} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              id="Rua"
              label="Rua"
              name="street"
              autoComplete="street"
              placeholder="Rua / Av."
              fullWidth
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
              autoComplete="number"
              placeholder="Número"
              fullWidth
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
    </EditAddressStyle>
  );
}

export default EditAddressPage;
