import axios from "axios";
const baseURL = "https://conectamilk-npurin.herokuapp.com";

export const setSalaOrdena = async (data) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_sala_ordena`,
      data: {
        ...data,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error form sala ordenia", error);
  }
};

export const setConstruccion = async (data) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_construccion`,
      data: {
        ...data,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error form construccion", error);
  }
};

export const setVacaOrdena = async (data) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_vaca_ordena`,
      data: {
        ...data,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error form vaca ordenia", error);
  }
};

export const setPozoPurinero = async (data) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_pozo_purinero`,
      data: {
        ...data,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error form pozo purinero", error);
  }
};

export const setParametrosPurin = async (data) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_parametros_purin`,
      data: {
        ...data,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error form parametros purin", error);
  }
};

export const setCompletedForms = async (idUsuario) => {
  try {
    const configurationObject = {
      method: "post",
      url: `${baseURL}/form_completado`,
      data: {
        form_completado: 1,
        id_usuario: idUsuario,
      },
    };
    const response = await axios(configurationObject);
  } catch (error) {
    console.log("Error set formCompletado", error);
  }
};
