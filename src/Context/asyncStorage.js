import AsyncStorage from "@react-native-async-storage/async-storage";

const FormCacheKey = "FormKey";

export const setForm = async (form) => {
  try {
    const jsonForm = JSON.stringify(form);
    await AsyncStorage.setItem(FormCacheKey, jsonForm);
  } catch (error) {
    throw error;
  }
};

export const getForm = async () => {
  try {
    const jsonForm = await AsyncStorage.getItem(FormCacheKey);
    return jsonForm != null ? JSON.parse(jsonForm) : null;
  } catch (error) {
    return null;
  }
};
