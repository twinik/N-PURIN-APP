import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

export const Ubicaciones = async () => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/dropdown_ubicacion`,
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SistemaLimpieza = async () => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/dropdown_sistema_limpieza`,
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SeparacionSolidos = async () => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/dropdown_separacion_solidos`,
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Alimentacion = async () => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/dropdown_alimentacion`,
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};
