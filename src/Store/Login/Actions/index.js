import * as Types from "../Types";
import { toast } from "react-toastify";

const setDataFormLogin = (data) => ({
  type: Types.SET_DATA_FORM_LOGIN,
  payload: data,
});

const setDataSignIn = (data) => ({
  type: Types.SET_DATA_LOGIN,
  payload: data,
});

export const setDataFormAction = (value, field) => (dispatch, getState) => {
  let { loginReducer } = getState();
  let data = loginReducer.data;
  data[field] = value;
  dispatch(setDataFormLogin(data));
};

export const signInAction = (history) => (dispatch, getState) => {
  let { loginReducer } = getState();
  let data = loginReducer.data;
  let auth = loginReducer.auth;

  if (!data.username) {
    toast.error("Matrícula é um campo obrigatório.");
    return;
  }

  if (!data.password) {
    toast.error("Senha é um campo obrigatório.");
    return;
  }

  if (data.username.charAt(0) === "p") {
    auth.username = data.username;
    auth.name = "Professor Anderson";
    auth.authenticated = true;
    auth.profile = 1;
  } else if (data.username.charAt(0) === "a") {
    auth.username = data.username;
    auth.name = "Felippe Souza";
    auth.authenticated = true;
    auth.profile = 2;
  } else {
    toast.info("Usuário ou senha inválidos");
    return;
  }
  
  dispatch(setDataSignIn(auth));

  history.push("/Home");
};
