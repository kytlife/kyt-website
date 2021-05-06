<template>
  <b-container id="home">
    <navbar></navbar>

    <b-container class="mx-auto">
      <b-img class="logo" src="kyt.svg" />
      <div class="container" id="preform" name="preform">
        <div class="text-center" id="intouch" style="display: none">
          We'll be in touch!
        </div>
        <b-container id="gform" name="gform">
          <h2 class="mx-auto mt-2 mb-5">
            We're working hard to finish developing this site; in the meantime,
            sign up for Kyt's mailing list!
          </h2>
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <b-form
              class="form-inline d-flex"
              action="https://docs.google.com/forms/d/e/1FAIpQLSfO2n82VaB0oD8Bfw-29ruAgmZ_qwZgeYHCt30Mx56oVkAyrA/formResponse?"
              target="hidden_iframe"
              onsubmit="submitted=true;"
            >
              <b-form-input
                class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                type="email"
                placeholder="Enter email address..."
                name="entry.1527430613"
                id="entry.1527430613"
              />
              <b-button type="submit"> Subscribe </b-button>
            </b-form>
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style="display: none"
              onload="if(submitted) {}"
            ></iframe>
          </div>
        </b-container>
      </div>
      <footer class="footer mt-auto small text-center">
        Copyright &copy; Kyt 2021
      </footer>
    </b-container>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { navbar: Navbar },
};
</script>

<style>
#home {
  display: block;
  min-width: 100vw;
  padding: 0;
  min-height: 100vh;
  background: radial-gradient(#00000070, #ffffff88),
    url("../../public/kyt-beach.jpg");
  background-position: 70% 0%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.logo {
  width: 100%;
  height: 20vh;
}
#intouch {
  font-size: 2rem;
  line-height: 2rem;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  color: #a9dbd2;
}
@media (min-width: 768px) {
  #home {
    background-position: 60% 0%;
  }
  h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
  .logo {
    width: 100%;
    height: 30vh;
  }
  #intouch {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
}
@media (min-width: 992px) {
  #home {
    background-position: center;
  }
  h1 {
    font-size: 6.5rem;
    line-height: 6.5rem;
    letter-spacing: 0.8rem;
  }
  h2 {
    max-width: 31rem;
    margin-left: 0;
    margin-right: 0;
    font-size: 1.25rem;
  }
  .logo {
    width: 100%;
    height: 40vh;
  }
  #intouch {
    font-size: 3rem;
    line-height: 3rem;
  }
}

.footer {
  padding: 5rem 0;
  color: #a9dbd2;
}
</style>
