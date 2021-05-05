<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        :img-src="img_path"
        img-alt="Image for member"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ experience }}
          <br />
          {{ position }}
        </b-card-text>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "id", "experience", "position", "img_path"],
  computed: {
    modalId() {
      return `modal-${this.id}`;
    },
  },
};
</script>

<style scoped>
.card {
  border: 0;
  background-color: #00000000;
}
</style>
