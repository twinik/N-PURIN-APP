import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

export const Estiercol = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/estiercol`,
      data: {
        id_usuario: idUsuario,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AguasSucias = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/aguas_sucias`,
      data: {
        id_usuario: idUsuario,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AguasLimpias = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/aguas_limpias`,
      data: {
        id_usuario: idUsuario,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Ubi_Estacion = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/ubicacion_comuna_estacion`,
      data: {
        id_usuario: idUsuario,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AguasLluvia = async (idUsuario, idUbicacion) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/aguas_lluvia`,
      data: {
        id_usuario: idUsuario,
        id_ubicacion: idUbicacion,
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
};
