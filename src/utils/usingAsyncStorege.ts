import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: unknown, storage_Key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`@${storage_Key}`, jsonValue);
  } catch (e) {
    console.log('Error', e);
  }
};

export const getData = async (storage_Key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${storage_Key}`);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log('Error', e);
  }
};
