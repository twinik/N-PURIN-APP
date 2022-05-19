import AsyncStorage from "@react-native-async-storage/async-storage";
import { difference, omit } from "lodash";
const RecolectorCacheKey = "recolector";
export const getRecolector = async () => {
  try {
    const value = await AsyncStorage.getItem(RecolectorCacheKey);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  } catch (e) {
    return null;
  }
};
export const setColector = async (recolector) => {
  try {
    await AsyncStorage.setItem(RecolectorCacheKey, JSON.stringify(recolector));
  } catch (e) {
    throw e;
  }
};

const FunctionalDataCacheKey = "FunctionalData";
export const getFunctionalData = async () => {
  try {
    const value = await AsyncStorage.getItem(FunctionalDataCacheKey);
    if (value === null) {
      throw new Error("No hay recolector");
    }
    return JSON.parse(value);
  } catch (e) {
    return {
      suppliers: [],
      halls: [],
      plants: [],
    };
  }
};
export const setFunctionalData = async (FunctionalData) => {
  try {
    await AsyncStorage.setItem(
      FunctionalDataCacheKey,
      JSON.stringify(FunctionalData)
    );
  } catch (e) {
    throw e;
  }
};

const CollectionsCacheKey = "Collections";
export const getCollections = async () => {
  try {
    const cachedQueue = await getCollectionsQueue();
    const value = await AsyncStorage.getItem(CollectionsCacheKey);
    if (value === null) {
      throw new Error("No hay recolector");
    }
    let valueParsed = JSON.parse(value);
    return [...valueParsed, ...cachedQueue];
  } catch (e) {
    return [];
  }
};
export const setCollections = async (Collections) => {
  try {
    await AsyncStorage.setItem(
      CollectionsCacheKey,
      JSON.stringify(Collections)
    );
  } catch (e) {
    throw e;
  }
};

const CollectionsQueueCacheKey = "CollectionsQueue";
export const getCollectionsQueue = async () => {
  try {
    const value = await AsyncStorage.getItem(CollectionsQueueCacheKey);
    if (value === null) {
      throw new Error("No hay recolector");
    }
    return JSON.parse(value);
  } catch (e) {
    return [];
  }
};

export const getParsedCollectionsQueue = async () => {
  try {
    const value = await AsyncStorage.getItem(CollectionsQueueCacheKey);
    if (value === null) {
      throw new Error("No hay recolector");
    }

    const newArray = JSON.parse(value);

    return newArray.map(
      ({
        fecha,
        volumen_retirados,
        id_proveedor,
        id_sala,
        id_recolector,
        patente_camion,
        num_guia_recoleccion,
        marca_temporal,
        lectura_regla_inicial,
        lectura_regla_final,
        saldo_estanque,
        temperatura_leche,
        id_planta,
      }) => {
        return {
          fecha,
          volumen_retirados,
          id_proveedor,
          id_sala,
          id_recolector,
          patente_camion,
          num_guia_recoleccion,
          marca_temporal,
          lectura_regla_inicial,
          lectura_regla_final,
          saldo_estanque,
          temperatura_leche,
          id_planta,
        };
      }
    );
  } catch (e) {
    return [];
  }
};

export const addCollectionQueue = async (Collection) => {
  try {
    const cachedData = await getCollectionsQueue();
    await AsyncStorage.setItem(
      CollectionsQueueCacheKey,
      JSON.stringify([...cachedData, Collection])
    );
  } catch (e) {
    throw e;
  }
};

export const resetCollectionQueue = async () => {
  try {
    await AsyncStorage.setItem(CollectionsQueueCacheKey, JSON.stringify([]));
  } catch (e) {
    throw e;
  }
};
