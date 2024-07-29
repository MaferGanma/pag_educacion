<template>
  <header-component titulo="Acerca de la Carrera" />
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div
          class="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style="min-height: 400px"
        >
          <div class="position-relative h-100">
            <img
              class="img-fluid position-relative w-100 h-100"
              src="@/assets/img/about.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div
          class="col-lg-6 wow fadeInUp d-flex flex-column align-items-start"
          data-wow-delay="0.3s"
        >
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Acerca de la Carrera
          </h6>
          <h1 class="mb-4">Mision</h1>
          <p
            class="mb-4 text-start"
            v-html="Institucion.institucion_mision"
          ></p>
          <h1 class="mb-4">Vision</h1>
          <p
            class="mb-4 text-start"
            v-html="Institucion.institucion_vision"
          ></p>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Nuestras
        </h6>
        <h1 class="mb-5">Pre-especialidades</h1>
      </div>
      <!--FILA 1-->
      <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="(especialidad, id_especialidad) of Especialidades"
          :key="id_especialidad"
        >
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid"
                :src="`${url_api}/Publicaciones/${especialidad.publicaciones_imagen}`"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              ></div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ especialidad.publicaciones_titulo }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses End -->
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import { mapState } from "vuex";
export default {
  name: "aboutView",
  data() {
    return {
      Especialidades: [],
    };
  },
  computed: {
    ...mapState(["url_api", "Institucion"]),
  },
  components: {
    "header-component": headerComponent,
  },
  methods: {
    async getPublicaciones() {
      try {
        const res = await this.axios.get(
          `/api/PublicacionesAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        this.Especialidades = [];
        res.data.forEach((element) => {
          if (
            element.publicaciones_tipo.includes("PRE-ESPECIALIDAD") ||
            element.publicaciones_tipo.includes("PRE_ESPECIALIDAD") ||
            element.publicaciones_tipo.includes("PRE ESPECIALIDAD")
          ) {
            this.Especialidades.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPublicaciones();
  },
  mounted() {
    this.$store.commit("setMenu", "acerca");
  },
};
</script>