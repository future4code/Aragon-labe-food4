import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToSignUpPage } from "../routes/cordinator";

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
    postLogin();
  };

  return (
    <>
      <h1>Rappi4</h1>
      <p>Entrar</p>

      <form onSubmit={signIn}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={login.email}
          onChange={onChangeLogin}
          required
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          value={login.password}
          onChange={onChangeLogin}
          required
        />
        <button type="submit">Entrar</button>
      </form>

      <span>Não possui cadastro?</span>
      <button onClick={() => goToSignUpPage(navigate)}> Clique aqui.</button>
    </>
  );
}

export default LoginPage;
