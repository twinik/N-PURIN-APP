import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com/";

export const Login = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/login`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

export const Register = async (email, name, password) => {
  const configurationObject = {
    method: "post",
    url: `${baseURL}/crear_usuario`,
    data: {
      email,
      name,
      password,
    },
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};
