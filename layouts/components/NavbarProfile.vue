<script setup>
const links1 = [
  {
    label: "Profile",
    icon: "i-heroicons-user",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-8-tooth",
  },
  {
    label: "Schedule",
    icon: "i-heroicons-calendar",
  },
];
const links2 = [
  {
    label: "Reports",
    icon: "i-heroicons-chart-bar",
  },
  {
    label: "FAQ",
    icon: "i-heroicons-question-mark-circle",
  },
];
</script>

<template>
  <UPopover>
    <UTooltip text="User Profile">
      <UAvatar
        size="md"
        alt="John Doe"
        class="hover:text-primary cursor-pointer"
        chip-color="primary"
        chip-position="bottom-right"
        @click="() => {}"
      ></UAvatar>
    </UTooltip>

    <template #panel>
      <UCard class="w-60" :ui="{ body: { base: 'px-0 py-1', padding: '' } }">
        <template #header>
          <div class="flex items-center gap-4">
            <UAvatar size="lg" alt="John Doe"></UAvatar>
            <div class="flex flex-col">
              <span>John Doe</span>
              <span class="text-xs text-gray-400">Admin</span>
            </div>
          </div>
        </template>

        <UVerticalNavigation
          class="px-2"
          :links="links1"
          :ui="{ padding: 'px-3 py-3' }"
        />

        <UDivider class="my-1" />

        <UVerticalNavigation
          class="px-2"
          :links="links2"
          :ui="{ padding: 'px-3 py-3' }"
        />

        <template #footer>
          <div>
            <UButton
              color="red"
              label="Logout"
              icon="i-heroicons-arrow-right-start-on-rectangle-16-solid"
              trailing
              block
            />
          </div>
        </template>
      </UCard>
    </template>
  </UPopover>
</template>
