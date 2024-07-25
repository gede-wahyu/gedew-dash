import { useStorage } from "@vueuse/core";

export const namespaceConfig = (str) => {
  const appConfig = useAppConfig();
  const appName = appConfig.app.title.toLowerCase().replaceAll(" ", "-");

  return `${appName}-${str}`;
};

export const cookieRef = (key, defaultValue) => {
  return useCookie(namespaceConfig(key), { default: () => defaultValue });
};

export const localStorageRef = (key, defaultValue) => {
  return useStorage(namespaceConfig(key), defaultValue);
};
