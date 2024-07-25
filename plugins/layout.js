export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const appConfig = useAppConfig();

    appConfig.ui.primary = localStorageRef(
      localStorageKeyPrimary,
      appConfig.ui.primary,
    );
    appConfig.ui.gray = localStorageRef(localStorageKeyGray, appConfig.ui.gray);
  });
});
