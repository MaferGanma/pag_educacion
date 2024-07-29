<template>
  <carousel-component :portadas="Institucion.portada" />

  <div class="container">
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
                class="img-fluid w-100 h-100"
                src="@/assets/img/about.jpg"
                alt=""
                style="object-fit: cover"
              />
            </div>
          </div>
          <div
            class="col-lg-6 wow fadeInUp d-flex flex-column align-items-start justify-content-start"
            data-wow-delay="0.3s"
          >
            <h6 class="section-title bg-white text-start text-primary pe-3">
              Bienvenido
            </h6>
            <h1 class="mb-4 text-start">
              Bienvenido a la Carrera de {{ Institucion.institucion_nombre }}
            </h1>
            <div
              v-html="Institucion.institucion_objetivos"
              class="mt-3 text-start"
            ></div>
            <div class="row gy-2 gx-4 mb-4 text-start">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Investigador
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Planificador y evaluador
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Orientador
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Asesor
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Proyectista
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Administrador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Video1 Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="ratio ratio-16x9">
              <iframe
                :src="Noticia.video_enlace"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            class="col-lg-6 wow fadeInUp d-flex flex-column align-items-start"
            data-wow-delay="0.3s"
          >
            <h6 class="section-title bg-white text-start text-primary pe-3">
              Noticias
            </h6>
            <h1 class="mb-4 text-start">
              {{ Noticia.video_titulo }}
            </h1>
            <p
              class="mb-4 text-start"
              v-html="Noticia.video_breve_descripcion"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Video1 End -->

    <!-- Video2 Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div
            class="col-lg-6 wow fadeInUp d-flex flex-column align-items-start"
            data-wow-delay="0.3s"
          >
            <h6 class="section-title bg-white text-start text-primary pe-3">
              Actividades
            </h6>
            <h1 class="mb-4 text-start">Conoce nuestras actividades</h1>
            <p class="mb-4 text-start">
              Actividades realizadas en la Gestión 2023 por el MSc. Deivid
              Pacosillo Mamani, Director de la Carrera de Ciencias de la
              Educación.
            </p>
            <p class="mb-4 text-start">
              Entre los más resaltante se tiene la realización de Congresos
              Internacionales, Seminarios y Cursos de actualización, adquisición
              de equipos, actividades intercedes, ampliación de la Biblioteca.
            </p>
          </div>
          <div
            class="col-lg-6 wow fadeInUp carousel slide"
            data-wow-delay="0.1s"
            id="carrusel-actividades"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="ratio ratio-16x9 carousel-item"
                data-bs-interval="3000"
                v-for="(actividad, id_actividad) of Actividades"
                :key="id_actividad"
                :class="[id_actividad == 0 ? 'active' : '']"
              >
                <iframe
                  :src="actividad.video_enlace"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carrusel-actividades"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carrusel-actividades"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Video2 End -->

    <!-- Courses Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Sedes
          </h6>
          <h1 class="mb-5">Sedes Académicas</h1>
        </div>
        <!--FILA 1-->
        <div class="row g-4 justify-content-center">
          <div
            class="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
            v-for="(sede, id_sede) of Sedes"
            :key="id_sede"
          >
            <div class="course-item bg-light">
              <div class="position-relative overflow-hidden">
                <img
                  class="img-fluid"
                  :src="`${url_api}/Publicaciones/${sede.publicaciones_imagen}`"
                  alt=""
                />
                <div
                  class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
                ></div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-1">{{ sede.publicaciones_titulo }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Courses End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">
            Autoridades
          </h6>
          <h1 class="mb-5">Nuestras Autoridades</h1>
        </div>
        <div class="row g-4">
          <div
            class="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
            v-for="(autoridad, id_autoridad) of Autoridades"
            :key="id_autoridad"
          >
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  :src="`${url_api}/InstitucionUpea/Autoridad/${autoridad.foto_autoridad}`"
                  alt=""
                />
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">{{ autoridad.nombre_autoridad }}</h5>
                <small>{{ autoridad.cargo_autoridad }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->
  </div>
</template>
<script>
import CarouselComponent from "@/components/Home/CarouselComponent.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      Noticia: {},
      Actividades: [],
      Sedes: [],
      Autoridades: [],
    };
  },
  computed: {
    ...mapState(["url_api", "Institucion"]),
  },
  components: {
    "carousel-component": CarouselComponent,
  },
  methods: {
    async getVideos() {
      try {
        const res = await this.axios.get(
          `/api/VideosAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        this.Actividades = [];
        res.data.forEach((element) => {
          if (
            element.video_tipo.includes("ACTIVIDADES") &&
            element.video_estado == 1
          ) {
            this.Actividades.push(element);
          }
          if (element.video_tipo.includes("NOTICIA")) {
            this.Noticia = element;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getPublicaciones() {
      try {
        const res = await this.axios.get(
          `/api/PublicacionesAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        this.Sedes = [];
        res.data.forEach((element) => {
          if (element.publicaciones_tipo.includes("SEDE")) {
            this.Sedes.push(element);
          }
        });
        this.Autoridades = this.Institucion.autoridad;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getVideos();
    this.getPublicaciones();
  },
  mounted() {
    this.$store.commit("setMenu", "inicio");
    this.getVideos();
    this.getPublicaciones();
  },
};
</script>