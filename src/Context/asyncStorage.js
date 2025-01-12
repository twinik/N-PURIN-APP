import AsyncStorage from "@react-native-async-storage/async-storage";

const FormCacheKey = "FormKey";

const formLocal = [];

export const setForm = async (form) => {
  try {
    formLocal.push(form);
    console.log("setform:", formLocal);
    const jsonForm = JSON.stringify(formLocal);
    await AsyncStorage.setItem(FormCacheKey, jsonForm);
  } catch (error) {
    throw error;
  }
};

export const getForm = async () => {
  try {
    const jsonForm = await AsyncStorage.getItem(FormCacheKey);
    //return jsonForm != null ? JSON.parse(jsonForm) : [];
    if (
      jsonForm === null ||
      jsonForm === undefined ||
      jsonForm === "" ||
      jsonForm === []
    ) {
      return [];
    } else {
      return JSON.parse(jsonForm);
    }
  } catch (error) {
    return [];
  }
};
