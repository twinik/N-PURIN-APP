import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

/* export const Estiercol = async (idUsuario) => {
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
}; */

export const Estiercol = async (idUsuario) => {
  try {
    const response = await axios.get(`${baseURL}/estiercol`, {
      params: {
        id_usuario: idUsuario,
      },
    });
    return response.data;
  } catch (error) {}
};

/* export const AguasSucias = async (idUsuario) => {
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
}; */

export const AguasSucias = async (idUsuario) => {
  try {
    const response = await axios.get(`${baseURL}/aguas_sucias`, {
      params: {
        id_usuario: idUsuario,
      },
    });
    return response.data;
  } catch (error) {}
};

/* export const AguasLimpias = async (idUsuario) => {
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
}; */

export const AguasLimpias = async (idUsuario) => {
  try {
    const response = await axios.get(`${baseURL}/aguas_limpias`, {
      params: {
        id_usuario: idUsuario,
      },
    });
    return response.data;
  } catch (error) {}
};

/* export const Ubi_Estacion = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/ubicacion_comuna_estacion`,
      data: {
        params: {
          id_usuario: idUsuario,
        },
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
}; */

export const Ubi_Estacion = async (idUsuario) => {
  try {
    const response = await axios.get(`${baseURL}/ubicacion_comuna_estacion`, {
      params: {
        id_usuario: idUsuario,
      },
    });
    return response.data;
  } catch (error) {}
};

/* export const AguasLluvia = async (idUsuario, idUbicacion) => {
  try {
    const configurationObject = {
      method: "get",
      url: `${baseURL}/aguas_lluvia`,
      data: {
        params: {
          id_usuario: idUsuario,
          id_ubicacion: idUbicacion,
        },
      },
    };
    const response = await axios(configurationObject);
    return response.data;
  } catch (error) {
    throw error;
  }
}; */

export const AguasLluvia = async (idUsuario, idUbicacion) => {
  try {
    const response = await axios.get(`${baseURL}/aguas_lluvia`, {
      params: {
        id_usuario: idUsuario,
        id_ubicacion: idUbicacion,
      },
    });
    return response.data;
  } catch (error) {}
};
