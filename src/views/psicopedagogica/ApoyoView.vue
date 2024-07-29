<template>
  <header-component titulo="Apoyo Educativo" />

  <!-- Team Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Apoyo educativo
        </h6>
        <h1 class="mb-5">Programa de Apoyo educativo</h1>
      </div>
    </div>
  </div>

  <div v-for="(video, id_video) of Apoyo" :key="id_video">
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

  <section-component-apoyo />
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import sectionComponentApoyo from "@/components/psicopedagogico/SectionComponentApoyo.vue";
export default {
  name: "OrientacionVocacional",
  data() {
    return {
      Apoyo: [],
    };
  },
  components: {
    "header-component": headerComponent,
    "section-component-apoyo": sectionComponentApoyo,
  },
  methods: {
    async getVideos() {
      try {
        const res = await this.axios.get(
          `/api/VideosAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (element.video_tipo.includes("APOYO")) {
            this.Apoyo.push(element);
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