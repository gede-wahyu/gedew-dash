<template>
  <NuxtLoadingIndicator />

  <ClientOnly>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>

    <template #fallback>
      <div class="flex h-dvh w-full items-center justify-center"></div>
    </template>
  </ClientOnly>
</template>
<style>
body {
  @apply bg-gray-200 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50/80;
}
</style>
