<template>
  <b-container>
    <b-button id="show-btn" @click="$bvModal.show('modalOne')"
      >Open Modal</b-button
    >

    <b-modal id="modalOne" hide-footer hide-header-close>
      <div class="d-block text-center">
        <h3>I solemly swear that I am at least 21 years of age...</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('modalOne')">
        Enter
      </b-button>
      <b-button onclick="history.back();" class="mt-3" block>Leave</b-button>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    data() {
      return {
        modalShow: true,
      };
    },
  },
};
</script>

<style>
#modalOne {
  z-index: 10000;
  color: rebeccapurple;
  visibility: visible;
}
.bg-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 9999;
  display: flex;
  background: linear-gradient(-45deg, #00a984, #65c5b3, #a9dbd2, #00a900);
  background-size: 400% 400%;
  animation: gradient 20s ease-in infinite;
  justify-content: center;
  align-items: center;
}
.center-content {
  justify-content: center;
  align-items: center;
}
.modal-content {
  width: 80%;
  height: 80%;
  z-index: 10000;
  border-radius: 4px;
  text-align: center;
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
</style>
