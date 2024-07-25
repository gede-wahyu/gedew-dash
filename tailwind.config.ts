import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  // content: [
  //   "./components/**/*.{js,vue,ts}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./app.vue",
  //   "./error.vue",
  // ],
  theme: {
    extend: {
      // colors: {
      //   clay: {
      //     50: "#f4f7fa",
      //     100: "#e5eaf4",
      //     200: "#d1dbec",
      //     300: "#b2c5de",
      //     400: "#8da6cd",
      //     500: "#728bbf",
      //     600: "#5f74b1",
      //     700: "#5464a1",
      //     800: "#485385",
      //     900: "#3e476a",
      //     950: "#25293c",
      //   },
      // },
    },
  },
  plugins: [],
};
