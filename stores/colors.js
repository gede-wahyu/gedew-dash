export const useColorsStore = defineStore("colors", () => {
  const primaryOptions = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  const grayOptions = ["slate", "zinc", "neutral", "cool", "stone"];

  const defaultPrimay = "green";

  const defaultGray = "cool";

  const isString = (val) => typeof val === "string";

  const isPrimary = (val) =>
    primaryOptions.some((opt) => opt === val.toLowerCase());

  const isGray = (val) => grayOptions.some((opt) => opt === val.toLowerCase());

  const getPrimary = (primary) => {
    if (isString(primary) && isPrimary(primary)) return primary;
    return defaultPrimay;
  };

  const getGray = (gray) => {
    if (isString(gray) && isGray(gray)) return gray;
    return defaultGray;
  };

  return {
    primaryOptions,
    grayOptions,
    getPrimary,
    getGray,
  };
});
