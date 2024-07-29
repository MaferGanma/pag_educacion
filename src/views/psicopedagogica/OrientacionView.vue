<template>
  <header-component titulo="Orientacion Vocacional" />

  <!-- Team Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Orientacion vocacional
        </h6>
        <h1 class="mb-5">
          Programa de Orientacion Pedagogica para la vocacion productiva
          tecnologica
        </h1>
      </div>
    </div>
  </div>
  <!-- Team End -->

  <div v-for="(video, id_video) of OrientacionVocacional" :key="id_video">
    <!-- Video1 Start -->
    <div class="container-xxl py-5" v-if="id_video % 2 == 0">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="ratio ratio-16x9">
              <iframe
                :src="video.video_enlace"
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
              {{ video.video_tipo }}
            </h6>
            <h1 class="mb-4 text-start">{{ video.video_titulo }}</h1>
            <p
              class="mb-4 text-start"
              v-html="video.video_breve_descripcion"
            ></p>
          </div>
        </div>
      </div>
    </div>
    <!-- Video1 End -->

    <!-- Video2 Start -->
    <div class="container-xxl py-5" v-else>
      <div class="container">
        <div class="row g-5">
          <div
            class="col-lg-6 wow fadeInUp d-flex flex-column align-items-start"
            data-wow-delay="0.3s"
          >
            <h6 class="section-title bg-white text-start text-primary pe-3">
              {{ video.video_tipo }}
            </h6>
            <h1 class="mb-4 text-start">
              {{ video.video_titulo }}
            </h1>
            <p
              class="mb-4 text-start"
              v-html="video.video_breve_descripcion"
            ></p>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="ratio ratio-16x9">
              <iframe
                :src="video.video_enlace"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Video2 End -->
  </div>

  <section-component />
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import sectionComponent from "@/components/psicopedagogico/SectionComponent.vue";
export default {
  name: "OrientacionVocacional",
  data() {
    return {
      OrientacionVocacional: [],
    };
  },
  components: {
    "header-component": headerComponent,
    "section-component": sectionComponent,
  },
  methods: {
    async getVideos() {
      try {
        const res = await this.axios.get(
          `/api/VideosAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (
            element.video_tipo.includes("ORIENTACION VOCACIONAL") ||
            element.video_tipo.includes("ORIENTACION_VOCACIONAL") ||
            element.video_tipo.includes("ORIENTACION-VOCACIONAL") ||
            element.video_tipo.includes("ORIENTACION") ||
            element.video_tipo.includes("VOCACIONAL")
          ) {
            this.OrientacionVocacional.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getVideos();
  },
};
</script>