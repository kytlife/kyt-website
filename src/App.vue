<template>
  <div id="app">
    <b-modal
      ref="my-modal"
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-header
      centered
      size="lg"
    >
      <div class="d-block text-center">
        <h3>I solemly swear that I am at least 21 years of age...</h3>
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="hideModal"
        >Enter</b-button
      >
      <b-button class="mt-2" variant="outline-danger" block @click="exitModal"
        >Go Back</b-button
      >
    </b-modal>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  Modalwatch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Kyt Inc.";
      },
    },
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      localStorage.isAboveTwentyOne = true;
      this.$refs["my-modal"].$destroy();
    },
    exitModal() {
      history.back();
    },
  },
  mounted() {
    if (!localStorage.isAboveTwentyOne) {
      this.showModal();
    }
  },
};
</script>

<style>
.modal {
  background: linear-gradient(-45deg, #00a984, #65c5b3, #a9dbd2, #00a900);
  background-size: 400% 400%;
  animation: gradient 20s ease-in infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 25% 75%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 75% 25%;
  }
  100% {
    background-position: 0% 0%;
  }
}
.modal-dialog .modal-md .modal-dialog-centered {
  width: 100%;
  margin: 0;
}
</style>
