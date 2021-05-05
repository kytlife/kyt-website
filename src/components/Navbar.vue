<template>
  <b-navbar toggleable="lg" type="dark" fixed="top" id="mainNav">
    <!-- Left aligned -->
    <b-navbar-brand class="navbar-nav mr-auto" to="/"> Kyt </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- Right aligned  -->
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

<style scoped>
#mainNav {
  min-height: 3.5rem;
  background-color: transparent;
}
#mainNav .navbar-toggler {
  font-size: 80%;
  padding: 0.75rem;
  color: #65c583;
  border: 0px;
}
#mainNav .navbar-toggler:focus {
  outline: none;
}
#mainNav .navbar-brand {
  color: #000000;
  font-weight: 700;
  padding: 0.9rem 0;
}
#mainNav .navbar-nav .nav-item:hover {
  color: fade(#fff, 80%);
  outline: none;
  background-color: transparent;
}
#mainNav .navbar-nav .nav-item:active,
#mainNav .navbar-nav .nav-item:focus {
  outline: none;
  background-color: transparent;
}
@media (min-width: 992px) {
  #mainNav {
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
  }
  #mainNav .navbar-brand {
    padding: 0.5rem 0;
    color: rgba(255, 255, 255, 0.5);
  }
  #mainNav .nav-link {
    transition: none;
    padding: 2rem 1.5rem;
    color: rgba(255, 255, 255, 0.5);
  }
  #mainNav .nav-link:hover {
    color: rgba(255, 255, 255, 0.75);
  }
  #mainNav .nav-link:active {
    color: #fff;
  }
  #mainNav.navbar-shrink {
    background-color: #fff;
  }
  #mainNav.navbar-shrink .navbar-brand {
    color: #000000;
  }
  #mainNav.navbar-shrink .nav-link {
    color: #000000;
    padding: 1.5rem 1.5rem 1.25rem;
    border-bottom: 0.25rem solid transparent;
  }
  #mainNav.navbar-shrink .nav-link:hover {
    color: #65c583;
  }
  #mainNav.navbar-shrink .nav-link:active {
    color: #3da15c;
  }
  #mainNav.navbar-shrink .nav-link.active {
    color: #65c583;
    outline: none;
    border-bottom: 0.25rem solid #65c583;
  }
}
</style>
