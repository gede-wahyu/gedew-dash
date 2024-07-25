import { breakpointsTailwind } from "@vueuse/core";

export const useLayoutConfigStore = defineStore("layoutConfig", () => {
  const appConfig = useAppConfig();
  const colorMode = useColorMode();

  const appTitle = ref(appConfig.app.title);
  const themePrimary = localStorageRef(
    localStorageKeyPrimary,
    appConfig.ui.primary,
  );
  const themeGray = localStorageRef(localStorageKeyGray, appConfig.ui.gray);
  const themeMode = ref(colorMode.value);

  const isVerticalNavCollapsed = cookieRef("isVerticalNavCollapsed", false);

  const isXlScreen = computed(
    () => useMediaQuery(`(min-width: ${breakpointsTailwind.xl}px)`).value,
  );

  watch(
    themePrimary,
    () => {
      appConfig.ui.primary = themePrimary.value;
    },
    { immediate: true },
  );

  watch(
    themeGray,
    () => {
      appConfig.ui.gray = themeGray.value;
    },
    { immediate: true },
  );

  watch(
    themeMode,
    () => {
      colorMode.value = themeMode.value;
    },
    { immediate: true },
  );

  const changePrimary = (primary) => {
    const colorsStore = useColorsStore();
    themePrimary.value = colorsStore.getPrimary(primary);
  };

  const changeGray = (gray) => {
    const colorsStore = useColorsStore();
    themeGray.value = colorsStore.getGray(gray);
  };

  return {
    appTitle,
    themePrimary,
    themeGray,
    themeMode,
    isVerticalNavCollapsed,
    isXlScreen,
    changePrimary,
    changeGray,
  };
});
