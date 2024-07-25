<script setup>
const colorsStore = useColorsStore();
const layoutConfigStore = useLayoutConfigStore();

const primaryOptions = colorsStore.primaryOptions;
const grayOptions = colorsStore.grayOptions;
</script>

<template>
  <UPopover>
    <UTooltip text="Theme Color">
      <UButton
        icon="i-heroicons-paint-brush-20-solid"
        color="gray"
        variant="ghost"
        class="hover:bg-gray-300/50"
        square
        size="lg"
        aria-label="Primary"
      />
    </UTooltip>

    <template #panel>
      <div class="p-3">
        <div class="grid grid-cols-5 gap-1">
          <UButton
            v-for="item in primaryOptions"
            :color="
              layoutConfigStore.themePrimary === item ? 'primary' : 'gray'
            "
            :variant="
              layoutConfigStore.themePrimary === item ? 'soft' : 'ghost'
            "
            square
            @click="layoutConfigStore.changePrimary(item)"
          >
            <div
              class="item-primary-opt"
              :class="`bg-${item}-500 dark:bg-${item}-400`"
            ></div>
          </UButton>
        </div>

        <UDivider class="py-2"> </UDivider>

        <div class="grid grid-cols-5 gap-1">
          <UButton
            v-for="item in grayOptions"
            :color="layoutConfigStore.themeGray === item ? 'primary' : 'gray'"
            :variant="layoutConfigStore.themeGray === item ? 'soft' : 'ghost'"
            square
            @click="layoutConfigStore.changeGray(item)"
          >
            <div
              class="item-gray-opt"
              :class="`bg-slate-500 dark:bg-slate-400`"
            ></div>
          </UButton>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<style scoped>
.item-primary-opt,
.item-gray-opt {
  @apply h-4 w-4 rounded-full;
}
</style>
