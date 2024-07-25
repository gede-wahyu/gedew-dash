# GedewDash

## Overview

This project is a ready-to-use dashboard template built with Nuxt 3, Nuxt UI, TailwindCSS, and Pinia. The layout is organized in the `/layouts/default.vue` component, and each component used within the layout is stored in the `/layouts/components` directory.

- **Nuxt 3 Documentation:** [https://nuxt.com/](https://nuxt.com/)
- **Nuxt UI Documentation:** [https://ui.nuxt.com/](https://ui.nuxt.com/)

## Features

- Includes components such as forms, buttons, chips, etc., referenced from Nuxt UI.
- Easy customization of the application logo and name.
- Supports light and dark theme preferences.
- Primary and surface theme colors configurable via TailwindCSS values.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 14.x or higher)
- npm, yarn, or pnpm package manager

## Installation

### Using npm

1. Clone the repository:
   ```bash
   git clone https://github.com/gede-wahyu/gedew-dash.git
   cd gedew-dash
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Using yarn

1. Clone the repository:
   ```bash
   git clone https://github.com/gede-wahyu/gedew-dash.git
   cd gedew-dash
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the development server:
   ```bash
   yarn dev
   ```

### Using pnpm

1. Clone the repository:
   ```bash
   git clone https://github.com/gede-wahyu/gedew-dash.git
   cd gedew-dash
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

## Customization

### Changing the Logo

To change the application logo, replace the `logo.svg` file located at `/assets/logo/logo.svg` with your desired logo file having the same extension.

### Changing the Application Name

To change the application name, update the `app.title` value in the `app.config.ts` file:

```typescript
export default defineAppConfig({
  app: {
    title: "<your-apps-name>",
  },
  /** other config **/
});
```

### Theme Preferences

This project uses the [Nuxt Color Mode Module](https://nuxt.com/modules/color-mode) to handle theme preferences. You can configure the color mode in the `app.config.ts` file:

- **Light/Dark Mode:** Set the theme preference using the `colorMode.preference` field:

```typescript
export default defineAppConfig({
  /** other config **/
  colorMode: {
    preference: "light", // Can be "light", "dark", or "system"
  },
  /** other config **/
});
```

### Primary and Surface Colors

Customize primary and surface colors using ui.primary and ui.gray values from the app.config.ts file. Refer to TailwindCSS documentation for valid options:

```typescript
export default defineAppConfig({
  /** other config **/
  ui: {
    primary: "emerald",
    gray: "cool",
  },
  /** other config **/
});
```

## Components Usage

To learn how to use various components from Nuxt UI within the project, refer to the [Nuxt UI Components Documentation](https://ui.nuxt.com/components/accordion).

## Configuration

Detailed information about the configuration options available in `app.config.ts` and how they affect the application can be found in the [Nuxt 3 Configuration Documentation](https://nuxt.com/docs/guide/directory-structure/app-config).

## Contributing

Guidelines for contributing to the project are not yet available. Contributions are welcome, and a contributing guide will be added soon.

## Deployment

There are no specific deployment instructions provided. You are free to deploy the application on any platform of your choice.

## Changelog

A changelog will be added soon to document changes, improvements, and fixes across different versions of the project. Once available, the changelog can be accessed [here](#).
