<template>
  <header-component titulo="Comunicados" />

  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Comunicados
        </h6>
        <h1 class="mb-5">Convenios institucionales</h1>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="(comunicado, id_comunicado) of Comunicados"
          :key="id_comunicado"
        >
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid"
                :src="`${url_api}/Convocatorias/${comunicado.con_foto_portada}`"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              ></div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ comunicado.con_titulo }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid py-5">
    <h1 class="mb-5">Convenios para Modalidades de Graduación</h1>
    <div class="wow fadeInUp">
      <div class="row">
        <div
          class="bg-light col-md-4"
          v-for="(convenio, id_convenio) of Convenios"
          :key="id_convenio"
        >
          <div class="mb-3">
            <a
              :href="`${url_api}/Publicaciones/${convenio.publicaciones_imagen}`"
              target="_blank"
            >
              <img
                class="w-100"
                :src="`${url_api}/Publicaciones/${convenio.publicaciones_imagen}`"
                alt=""
              />
            </a>
            <a
              :href="`${url_api}/Publicaciones/${convenio.publicaciones_imagen}`"
              class="text-center"
              target="_blank"
            >
              <h5 class="mb-4">
                {{ convenio.publicaciones_titulo }}
              </h5>
            </a>
          </div>
        </div>
      </div>
      <!-- <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-convenios"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel-convenios"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> -->
    </div>
  </div>
  <!-- Courses End -->
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import { mapState } from "vuex";
export default {
  name: "comunicadoView",
  data() {
    return {
      Convenios: [],
      Comunicados: [],
      getter: true,
    };
  },
  computed: {
    ...mapState(["url_api"]),
  },
  components: {
    "header-component": headerComponent,
  },
  methods: {
    async getConvenios() {
      try {
        const res = await this.axios.get(
          `/api/PublicacionesAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (element.publicaciones_tipo.includes("CONVENIO")) {
            this.Convenios.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getComunicados() {
      try {
        const res = await this.axios.get(
          `/api/ConvocatoriasAll/${process.env.VUE_APP_ID_CARRERA}`
        );
        res.data.forEach((element) => {
          if (
            element.tipo_conv_comun.tipo_conv_comun_titulo.includes(
              "COMUNICADOS"
            ) &&
            element.con_estado == 1
          ) {
            this.Comunicados.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getConvenios();
    this.getComunicados();
  },
  mounted() {
    this.$store.commit("setMenu", "comunicado");
  },
  updated() {
    if (this.getter) {
      let items = document.querySelectorAll(".carousel .carousel-item");

      items.forEach((el) => {
        const minPerSlide = 3;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
          if (!next) {
            next = items[0];
          }
          let cloneChild = next.cloneNode(true);
          el.appendChild(cloneChild.children[0]);
          next = next.nextElementSibling;
        }
      });
      this.getter = false;
    }
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
    display: block;
    width: 90%;
    margin: auto;
  }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

/* medium and up screens */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(25%);
  }

  .carousel-inner .carousel-item-start.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-25%);
  }
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
  transform: translateX(0);
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #00000077 !important;
}
.convenio-link:hover {
  color: #ff8606 !important;
}
</style>