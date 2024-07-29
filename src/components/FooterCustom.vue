<template>
  <!-- Footer Start -->
  <div
    class="container bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div class="container-fluid p-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <img
            :src="`${url_api}/InstitucionUpea/${Institucion.institucion_logo}`"
            style="width: auto; height: 195px"
          />
        </div>

        <div class="col-lg-3 col-md-6 text-start">
          <h4 class="text-white mb-3">Enlaces rápidos</h4>
          <router-link class="btn btn-link" to="/acerca">Acerca de</router-link>
          <router-link class="btn btn-link" to="/comunicados"
            >Comunicados</router-link
          >
          <router-link class="btn btn-link" to="/biblioteca"
            >Biblioteca</router-link
          >
          <router-link class="btn btn-link" to="/tramites"
            >Tramites</router-link
          >
        </div>
        <div class="col-lg-3 col-md-6 text-start">
          <h4 class="text-white mb-3">Contactos</h4>
          <p class="mb-2">
            <i class="fa fa-map-marker-alt me-3"></i>
            {{ Institucion.institucion_direccion }}
          </p>
          <p class="mb-2">
            <i class="fa fa-envelope me-3"></i>
            {{ Institucion.institucion_correo1 }}
          </p>
          <!-- <p class="mb-2">
            <i class="fa fa-phone me-3"></i>
            {{ Institucion.institucion_telefono1 }}
          </p> -->
        </div>
        <div class="col-lg-3 col-md-6 text-start">
          <h4 class="text-white mb-3">Redes Sociales</h4>
          <div class="d-flex pt-2">
            <a
              class="btn btn-outline-light btn-social"
              :href="Institucion.institucion_facebook"
              target="_blank"
              ><i class="fab fa-facebook-f"></i></a
            >Facebook
          </div>
          <div class="d-flex pt-2">
            <a
              class="btn btn-outline-light btn-social"
              :href="Institucion.institucion_youtube"
              target="_blank"
              ><i class="fab fa-youtube"></i
            ></a>
            Youtube
          </div>
          <div class="d-flex pt-2">
            <a
              class="btn btn-outline-light btn-social"
              href="http://www.tiktok.com/@upea_somos_educacion"
              target="_blank"
              id="icon-hover-container"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"
                  fill="#ffffff"
                  id="icon-hover"
                />
              </svg>
            </a>
            Tiktok
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#"></a> Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="bi bi-arrow-up"></i
  ></a>
</template>

<script>
import { mapState } from "vuex";
import $ from "jquery";

export default {
  name: "footerView",
  computed: {
    ...mapState(["url_api", "Institucion"]),
  },
  mounted() {
    $("#icon-hover-container").mouseenter(function () {
      $("#icon-hover").css("fill", "#ff8606");
    });

    $("#icon-hover-container").mouseleave(function () {
      $("#icon-hover").css("fill", "#ffffff");
    });
  },
};
</script>