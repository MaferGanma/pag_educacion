<template>
  <!-- Carousel Start -->
  <div
    class="p-0 mb-5 carousel slide"
    id="carousel-portada"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner position-relative">
      <div
        class="carousel-item position-relative"
        :class="[key == 0 ? 'active' : '']"
        data-bs-interval="3000"
        v-for="(portada, key) of portadas"
        :key="key"
      >
        <img
          class="img-fluid d-block w-100"
          :src="`${url_api}/InstitucionUpea/Portada/${portada.portada_imagen}`"
          alt=""
        />
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style="background: rgba(24, 29, 56, 0.1)"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-sm-10 col-lg-8 d-flex flex-column align-items-start"
              >
                <h5
                  class="text-primary text-uppercase mb-3 animated slideInDown"
                  style="color: #ffffff !important"
                >
                  {{ portada.portada_subtitulo }}
                </h5>
                <h1
                  class="display-3 text-white animated slideInDown"
                  style="font-size: 42px"
                >
                  <!-- {{ portada.portada_titulo }} -->
                  Carrera Ciencias<br>
                  de la Educación
                </h1>
                <p class="fs-5 text-white mb-4 pb-2">Carrera acreditada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel-portada"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel-portada"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Carousel End -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "carouselPortada",
  props: {
    portadas: Array,
  },
  computed: {
    ...mapState(["url_api"]),
  },
};
</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
  width: 47px;
  height: 47px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 1px;
  color: #fff;
  opacity: 1;
  line-height: 30px;
  font-size: 16px !important;
  transition: background-color 0.75s ease, transform 0.5s ease;
  position: absolute;
}
.carousel-control-prev {
  top: calc(100% - 60%);
  left: 89%;
}
.carousel-control-next {
  top: 50%;
  left: 89%;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  border-color: transparent;
  background-color: #ff8606;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: transparent;
  border: none;
}

.carousel-control-prev,
.carousel-control-next {
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  .carousel-control-prev,
  .carousel-control-next {
    width: 30px;
    height: 30px;
  }
}
@media screen and (max-width: 425px) {
  .carousel-control-prev,
  .carousel-control-next {
    width: 20px;
    height: 20px;
  }
}
</style>