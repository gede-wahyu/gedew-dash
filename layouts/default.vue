<script setup>
import Navbar from "~/layouts/components/Navbar.vue";
import VerticalNav from "~/layouts/components/VerticalNav.vue";
import Footer from "~/layouts/components/Footer.vue";

const route = useRoute();
const layoutConfigStore = useLayoutConfigStore();

const layoutVerticalNavRef = ref();
const verticalNavToggleBtnRef = ref();

const isVerticalNavOverlayActive = ref(false);

const layoutClasses = computed(() => {
  return [
    { "layout-vertical-nav-overlay-active": isVerticalNavOverlayActive.value },
    {
      "layout-vertical-nav-collapsed": layoutConfigStore.isVerticalNavCollapsed,
    },
  ];
});

onClickOutside(
  layoutVerticalNavRef,
  () => {
    if (isVerticalNavOverlayActive.value) {
      isVerticalNavOverlayActive.value = false;
    }
  },
  { ignore: [verticalNavToggleBtnRef] },
);

watch(
  () => layoutConfigStore.isXlScreen,
  () => {
    if (isVerticalNavOverlayActive.value && layoutConfigStore.isXlScreen) {
      isVerticalNavOverlayActive.value = false;
    }
  },
  { immediate: true },
);
watch(
  () => route.path,
  () => (isVerticalNavOverlayActive.value = false),
);

const onClickVerticalNavToggleBtn = () => {
  if (layoutConfigStore.isXlScreen) {
    layoutConfigStore.isVerticalNavCollapsed =
      !layoutConfigStore.isVerticalNavCollapsed;
  } else {
    isVerticalNavOverlayActive.value = !isVerticalNavOverlayActive.value;
  }
};
</script>

<template>
  <div class="layout-wrapper" :class="layoutClasses">
    <header class="layout-navbar">
      <Navbar>
        <template #toggle>
          <UButton
            ref="verticalNavToggleBtnRef"
            icon="i-heroicons-bars-3-20-solid"
            color="gray"
            variant="ghost"
            class="hover:bg-gray-300/50"
            square
            size="lg"
            @click="onClickVerticalNavToggleBtn"
          ></UButton>
        </template>
      </Navbar>
    </header>

    <aside
      class="layout-vertical-nav bg-gray-200 dark:bg-gray-900"
      ref="layoutVerticalNavRef"
    >
      <VerticalNav></VerticalNav>
    </aside>

    <div class="layout-content-wrapper">
      <main class="layout-page-content">
        <slot></slot>
      </main>

      <footer class="layout-footer">
        <Footer></Footer>
      </footer>
    </div>
  </div>
</template>
