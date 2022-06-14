import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { goToAdressPage } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";

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
    goToAdressPage(navigate)
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
        <br />
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          placeholder="email@email.com"
          name="email"
          value={checker.email}
          onChange={onChangeChecker}
          required
        />

        <br />
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
        {checker.email !== signUp.email && <p>repita o mesmo email</p>}
        <br />

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
        <br />
        <label htmlFor="password">Senha*</label>
        <input
          id="password"
          placeholder="Inserir senha"
          type="password"
          name="password"
          value={checker.password}
          onChange={onChangeChecker}
          required
        />
        <br />
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
        {checker.password !== signUp.password && <p>repita a mesma senha</p>}

        <br />
        {checker.password === signUp.password && checker.email === signUp.email ? <button type="submit">Cadastrar</button> : <button disabled>Cadastrar</button>}
      </form>
    </>
  );
}

export default SignupPage;
