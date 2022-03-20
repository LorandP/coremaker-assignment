import * as AsyncStorage from "../utils/async-storage";

const ACCESS_TOKEN = "access_token";

async function getSavedAccessToken() {
  return AsyncStorage.getValue(ACCESS_TOKEN);
}

async function saveAccessToken(token) {
  return AsyncStorage.saveValue({ key: ACCESS_TOKEN, value: token });
}

async function removeAccessToken() {
  return AsyncStorage.removeValue(ACCESS_TOKEN);
}

export { getSavedAccessToken, saveAccessToken, removeAccessToken };
