import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToAdressPage } from "../routes/cordinator";
import { convertCPF } from "../utils/convertCPF";

function SignupPage() {
  const navigate = useNavigate();

  const context = useContext(GlobalStateContext);

  const { signUp } = context.states;

  const { setSignUp } = context.setters;

  const { postSignUp } = context.posts;

  const onChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    postSignUp();
    goToAdressPage(navigate);
  };

  return (
    <>
      <h1>Rappi4</h1>
      <p>Cadastrar</p>

      <form onSubmit={register}>
        <label htmlFor="name">Nome*</label>
        <input
          id="name"
          placeholder="Nome completo"
          name="name"
          value={signUp.name}
          onChange={onChangeSignUp}
          required
        />

        <label htmlFor="email">Email*</label>
        <input id="email" placeholder="email@email.com" name="email" required />

        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="Confirmar e-mail"
          name="email"
          type="email"
          value={signUp.email}
          onChange={onChangeSignUp}
          required
        />

        <label htmlFor="cpf">CPF*</label>
        <input
          id="cpf"
          placeholder="Somente números"
          name="cpf"
          type="number"
          value={signUp.cpf}
          onChange={onChangeSignUp}
          required
        />

        <label htmlFor="password">Senha*</label>
        <input
          id="password"
          placeholder="Inserir senha"
          type="password"
          name="password"
          required
        />

        <label htmlFor="password">Senha*</label>
        <input
          id="password"
          placeholder="Confirmar senha"
          type="password"
          name="password"
          value={signUp.password}
          onChange={onChangeSignUp}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}

export default SignupPage;
