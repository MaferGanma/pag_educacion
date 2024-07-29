<template>
  <header-component titulo="Tramites" />

  <!-- Contact Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Tramites
        </h6>
        <h1 class="mb-5">Tramites en la carrera de Educacion</h1>
      </div>
    </div>
  </div>
  <!-- Contact End -->

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
              src="@/assets/img/BIBLIOTECA.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Modelo de cartas para Biblioteca
          </h6>
          <a
            :href="`${url_api}/Gaceta/${doc.gaceta_documento}`"
            class="nav-item nav-link"
            target="_blank"
            v-for="(doc, id_doc) of Biblioteca"
            :key="id_doc"
            >{{ doc.gaceta_titulo }}</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

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
              src="@/assets/img/KARDEX.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Modelo de cartas para Kardex
          </h6>
          <a
            :href="`${url_api}/Gaceta/${doc.gaceta_documento}`"
            class="nav-item nav-link"
            target="_blank"
            v-for="(doc, id_doc) of Kardex"
            :key="id_doc"
            >{{ doc.gaceta_titulo }}</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

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
              src="@/assets/img/TUS.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="section-title bg-white text-start text-primary pe-3">
            Modelos de cartas para el TUS
          </h6>
          <a
            :href="`${url_api}/Gaceta/${doc.gaceta_documento}`"
            class="nav-item nav-link"
            target="_blank"
            v-for="(doc, id_doc) of Tus"
            :key="id_doc"
            >{{ doc.gaceta_titulo }}</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import { mapState } from "vuex";
export default {
  name: "tramiteView",
  data() {
    return {
      Biblioteca: [],
      Kardex: [],
      Tus: [],
    };
  },
  computed: {
    ...mapState(["url_api"]),
  },
  components: {
    "header-component": headerComponent,
  },
  methods: {
    async getTramites() {
      try {
        const res = await this.axios.get(
          `/api/GacetaUnivAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (element.gaceta_tipo.includes("BIBLIOTECA")) {
            this.Biblioteca.push(element);
          }
          if (element.gaceta_tipo.includes("KARDEX")) {
            this.Kardex.push(element);
          }
          if (element.gaceta_tipo.includes("TUS")) {
            this.Tus.push(element);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTramites();
  },
  mounted() {
    this.$store.commit("setMenu", "tramite");
  },
};
</script>