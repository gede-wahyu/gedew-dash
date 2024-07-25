<script setup>
import AppLogo from "~/layouts/components/AppLogo";
import NavbarProfile from "~/layouts/components/NavbarProfile.vue";
import NavbarThemeColor from "~/layouts/components/NavbarThemeColor.vue";
import NavbarThemeMode from "~/layouts/components/NavbarThemeMode.vue";

const layoutConfigStore = useLayoutConfigStore();
</script>

<template>
  <UCard
    class="rounded-none backdrop-blur-md backdrop-filter"
    :ui="{
      body: { base: 'px-6 py-4', padding: '' },
      background: 'bg-gray-100/40 dark:bg-gray-800/60',
    }"
  >
    <div class="navbar">
      <NuxtLink class="flex items-center gap-2" to="/">
        <AppLogo></AppLogo>

        <h1 class="text-xl font-bold leading-none">
          {{ layoutConfigStore.appTitle }}
        </h1>
      </NuxtLink>

      <div class="flex justify-between">
        <div>
          <div class="hidden xl:block">
            <slot name="toggle"></slot>
          </div>
        </div>

        <div class="flex gap-2">
          <NavbarThemeColor />

          <NavbarThemeMode />

          <NavbarProfile />

          <div class="xl:hidden">
            <slot name="toggle"></slot>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<style>
.navbar {
  display: grid;
  grid-template-columns: 260px 1fr;
}
</style>
