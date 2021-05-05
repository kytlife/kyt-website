<template>
  <b-container>
    <navbar></navbar> <b-container id="team" class="mx-auto"></b-container>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "team",
  components: { navbar: Navbar },
};
</script>
