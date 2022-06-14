import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import { goToAdressPage } from "../routes/cordinator";
import { convertCPF } from "../utils/convertCPF";
import { GlobalStateContext } from "./GlobalStateContext";

function GlobalState(props) {

  const [login, setLogin] = useState({ email: "", password: "" });

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    cpf: convertCPF(""),
    password: "",
  });

  const [checker, setChecker] = useState({ email: "", password: "" })

  const [address, setAddress] = useState({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
  })

  const states = {
    login: login,
    signUp: signUp,
    checker: checker,
    address: address
  };

  const setters = {
    setLogin: setLogin,
    setSignUp: setSignUp,
    setChecker: setChecker,
    setAddress: setAddress
  };

  const postLogin = () => {
    axios
      .post(`${BASE_URL}/login`, login)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
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
        alert("Cadastro realizado com sucesso!")
        localStorage.setItem("token", res.data.token)
      })
      .catch((err) => {
        alert("Dados inválidos");
        console.log(err.response.data.message);
      });
  };

  const token = localStorage.getItem("token")

  const addAddress = () => {
    axios.put(`${BASE_URL}/address`, address, {
      headers: {
        auth: token
      }
    })
      .then((res) => {
        localStorage.setItem("newToken", res.data.token)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const posts = {
    postLogin: postLogin,
    postSignUp: postSignUp,
  };
  const puts = {
    addAddress: addAddress
  }

  //   const getters = {}

  const context = { states, setters, posts, puts };

  return (
    <GlobalStateContext.Provider value={context}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalState;
