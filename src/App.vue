<template>
  <div id="app">
    <modal @close="closeModal"> </modal>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "App",
  components: {
    modal: Modal,
  },
  data() {
    return {
      modalVisibility: "visible",
    };
  },
  Modalwatch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Kyt Inc.";
      },
    },
  },
};
</script>

<style></style>
