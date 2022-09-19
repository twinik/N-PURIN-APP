import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

export const Login = async (email, password) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/login`,
      data: {
        email,
        password,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {}
};

export const Register = async (user) => {
  try {
    const response = await axios.post(`${baseURL}/crear_usuario`, {
      email: user.email,
      nombre: user.name,
      password: user.password,
      tipo_usuario: user.usertype,
      form_completado: 0,
    });
    return response.data;
  } catch (error) {}
};
