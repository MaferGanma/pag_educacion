<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- Spinner Start -->
  <div
    id="spinner"
    class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      class="spinner-border text-primary"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  <!-- Spinner End -->

  <header-custom />
  <router-view />
  <footer-custom />
</template>

<script>
import HeaderCustom from "@/components/HeaderCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import $ from "jquery";
export default {
  name: "AppWrapper",
  components: {
    "header-custom": HeaderCustom,
    "footer-custom": FooterCustom,
  },
  methods: {
    async getInstitucion() {
      try {
        const res = await this.axios.get(
          `/api/InstitucionUpea/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        this.Institucion = res.data.Descripcion;
        this.$store.state.Institucion = this.Institucion;
        this.Autoridades = res.data.Descripcion.autoridad;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getInstitucion();
  },
  mounted() {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 100);
  },
};
</script>