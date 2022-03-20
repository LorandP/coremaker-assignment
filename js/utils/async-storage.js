import AsyncStorage from "@react-native-async-storage/async-storage";

async function getValue(key) {
  try {
    const token = await AsyncStorage.getItem(key);
    return token;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

async function saveValue({ key, value }) {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function removeValue(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export { getValue, saveValue, removeValue };
