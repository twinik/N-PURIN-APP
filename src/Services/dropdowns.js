import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com/";

export const Ubicaciones = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/dropdown_ubicacion`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

export const SistemaLimpieza = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/dropdown_sistema_limpieza`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

export const SeparacionSolidos = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/dropdown_separacion_solidos`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

export const Alimentacion = async () => {
  const configurationObject = {
    method: "get",
    url: `${baseURL}/dropdown_alimentacion`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};
