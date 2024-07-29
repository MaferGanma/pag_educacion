<template>
  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Actividades
        </h6>
        <h1 class="mb-5">Todo sobre la orientación vocacional</h1>
      </div>
      <!--FILA 1-->
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid"
                :src="`${url_api}/InstitucionUpea/LinksExternos/${Test.ei_imagen}`"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  :href="Test.ei_link"
                  target="_blank"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Leer más</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ Test.ei_nombre }}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid"
                :src="`${url_api}/InstitucionUpea/LinksExternos/${Curso.ei_imagen}`"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  :href="Curso.ei_link"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  target="_blank"
                  style="border-radius: 30px 0 0 30px"
                  >Leer más</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ Curso.ei_nombre }}</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img class="img-fluid" src="@/assets/img/tallerpre.png" alt="" />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Leer más</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">Taller presencial</h5>
            </div>
          </div>
        </div>
      </div>
      <br>

      <!-- <div
        class="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        v-if="Actividades.length > 0"
      >
        <h6 class="section-title bg-white text-center text-primary px-3">
          Actividades
        </h6>
        <h1 class="mb-5">Conoce nuestras actividades</h1>
      </div> -->

      <!--FILA 2-->
      <!-- <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="(actividad, id_actividad) of Actividades"
          :key="id_actividad"
        >
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <iframe
                :src="actividad.video_enlace"
                class="img-fluid"
                frameborder="0"
              ></iframe>
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Leer más</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ actividad.video_titulo }}</h5>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Testimonios
        </h6>
        <h1 class="mb-5">Conoce los testimonios</h1>
      </div> -->

      <!--FILA 2-->
      <!-- <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="(testimonio, id_testimonio) of Testimonios"
          :key="id_testimonio"
        >
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <iframe
                :src="testimonio.video_enlace"
                class="img-fluid"
                frameborder="0"
              ></iframe>
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Leer más</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">{{ testimonio.video_titulo }}</h5>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <!-- Courses End -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sectionView",
  data() {
    return {
      Test: {},
      Curso: {},
      Actividades: [],
      Testimonios: [],
    };
  },
  computed: {
    ...mapState(["url_api"]),
  },
  methods: {
    async getLinks() {
      try {
        const res = await this.axios.get(
          `/api/linksIntExtAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (
            Object.keys(this.Test) == 0 &&
            element.ei_tipo.includes("TEST") &&
            element.ei_estado == 1
          ) {
            this.Test = element;
          }
          if (
            Object.keys(this.Curso) == 0 &&
            element.ei_tipo.includes("CURSO ONLINE") &&
            element.ei_estado == 1
          ) {
            this.Curso = element;
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getVideos() {
      try {
        const res = await this.axios.get(
          `/api/VideosAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (
            element.video_tipo.includes("ACTIVIDADES") &&
            element.video_estado == 1
          ) {
            this.Actividades.push(element);
          }
          if (
            element.video_tipo.includes("TESTIMONIO") &&
            element.video_estado == 1
          ) {
            this.Testimonios.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getLinks();
    this.getVideos();
  },
};
</script>