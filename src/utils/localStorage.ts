import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (error) {
    console.log(error)
  }
};

export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);

    return true;
  } catch (error) {
    console.log(error)
  }

  return false
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);

    return true;
  } catch (error) {
    console.log(error)
  }

  return false
};
