<script setup>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import navItems from "~/navigation/vertical";

const links = navItems;
</script>

<template>
  <UCard
    class="h-full rounded-none"
    :ui="{ body: { base: 'pl-4 pr-1.5 pb-6 pt-24', padding: '' } }"
  >
    <PerfectScrollbar
      tag="ul"
      :options="{ wheelPropagation: false }"
      class="nav-items"
    >
      <UVerticalNavigation
        class="pe-4"
        :links="links"
        :ui="{
          base: 'before:hidden',
          label: 'text-base',
          padding: 'py-3',
          active: 'text-primary-500 dark:text-primary-400',
        }"
      >
        <template #icon="slotProps">
          <div
            class="group-hover:bg-primary group-hover:ring-primary inline-flex rounded-md p-1 ring-1 ring-inset group-hover:text-gray-50 group-hover:dark:text-gray-900"
            :class="[
              {
                'bg-primary ring-primary text-gray-50 dark:text-gray-900':
                  slotProps.isActive,
                'bg-gray-100/50 ring-gray-400 dark:bg-gray-800/50 dark:ring-gray-700':
                  !slotProps.isActive,
              },
            ]"
          >
            <UIcon
              :name="slotProps.link.icon"
              class="text-base font-semibold"
              dynamic
            ></UIcon>
          </div>
        </template>
        <template #default="{ link }">
          <span>{{ link.label }}</span>
        </template>
      </UVerticalNavigation>
    </PerfectScrollbar>
  </UCard>
</template>

<style scoped>
.nav-items {
  height: calc(100dvh - 7rem);
}
</style>
