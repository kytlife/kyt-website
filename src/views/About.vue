<template>
  <b-container id="about">
    <navbar></navbar>
    <b-row align-v="center"></b-row>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "team",
  components: { navbar: Navbar },
};
</script>
