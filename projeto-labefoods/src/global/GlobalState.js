import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import { convertCPF } from "../utils/convertCPF";
import GlobalStateContext from "./GlobalStateContext";

function GlobalState(props) {
  const [login, setLogin] = useState({ email: "", password: "" });

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    cpf: convertCPF(""),
    password: "",
  });

  const states = {
    login: login,
    signUp: signUp,
  };

  const setters = {
    setLogin: setLogin,
    setSignUp: setSignUp,
  };

  const postLogin = () => {
    axios
      .post(`${BASE_URL}/login`, login)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
      })
      .catch((err) => {
        alert("Usuário ou senha inválidos");
        console.log(err.response.data.message);
      });
  };

  const postSignUp = () => {
    axios
      .post(`${BASE_URL}/signup`, signUp)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data)
      })
      .catch((err) => {
        alert("Dados inválidos");
        console.log(err.response.data.message);
      });
  };

  const posts = {
    postLogin: postLogin,
    postSignUp: postSignUp,
  };

  //   const getters = {}

  const context = { states, setters, posts };

  return (
    <GlobalStateContext.Provider value={context}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;
