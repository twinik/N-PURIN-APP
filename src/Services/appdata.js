import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

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

export const Nitrogeno = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/unidades_nitrogeno`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};

export const Urea = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/valorizacion_urea`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};

export const Fosforo = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/unidades_fosforo`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};

export const SPT = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/valorizacion_spt`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};

export const Potasio = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/unidades_potasio`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};

export const KCL = async (cantidadPurin) => {
  try {
    const response = await axios.get(`${baseURL}/valorizacion_kcl`, {
      params: {
        cantidad_purin: cantidadPurin,
      },
    });
    return response.data;
  } catch (error) {}
};
