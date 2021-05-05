<template>
  <b-navbar toggleable="md" type="dark" fixed="top" id="mainNav">
    <b-navbar-nav class="navbar-nav mr-auto">
      <b-nav-item to="/">Kyt</b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-toggle class="collapse navbar-collapse" id="navbarResponsive">
        <b-navbar-nav class="navbar-nav ml-auto">
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/team">Team</b-nav-item>
        </b-navbar-nav>
      </b-navbar-toggle>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped></style>
