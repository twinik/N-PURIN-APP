import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

export const Login = async (email, password) => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/login`,
    params: {
      email,
      password,
    },
  };
  const response = await axios(configurationObject);
  console.log("Login success", response.data);
};

export const Register = async (user) => {
  const configurationObject = {
    method: "post",
    url: `${baseURL}/crear_usuario`,
    data: {
      email: user.email,
      nombre: user.name,
      password: user.password,
    },
  };
  const response = await axios(configurationObject);
  console.log("Usuario creado", response.data);
};
