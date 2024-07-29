<template>
  <header-component titulo="Biblioteca" />

  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Biblioteca
        </h6>
        <h1 class="mb-5">Visita nuestra Biblioteca</h1>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          v-for="(libro, id_libro) of Biblioteca"
          :key="id_libro"
        >
          <div class="course-item bg-light">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid"
                :src="`${url_api}/Publicaciones/${libro.publicaciones_imagen}`"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              ></div>
            </div>
            <div class="text-center p-4 pb-0">
              <h5 class="mb-4">
                {{ libro.publicaciones_titulo }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses End -->

  <div class="container-xxl py-5">
    <div class="container">
      <h3>Servicio de Biblioteca</h3>
      <p>Para acceder haga click en el siguiente enlace</p>
      <a
        href="#"
        target="_blank"
        class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
        style="border-radius: 30px 0 0 30px"
        >Servicio de Bibiloteca</a
      >
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/Home/HeaderComponent.vue";
import { mapState } from "vuex";
export default {
  name: "bibliotecaView",
  data() {
    return {
      Biblioteca: [],
    };
  },
  computed: {
    ...mapState(["url_api"]),
  },
  components: {
    "header-component": headerComponent,
  },
  methods: {
    async getBiblioteca() {
      try {
        const res = await this.axios.get(
          `/api/PublicacionesAll/${process.env.VUE_APP_ID_INSTITUCION}`
        );
        res.data.forEach((element) => {
          if (element.publicaciones_tipo.includes("BIBLIOTECA")) {
            this.Biblioteca.push(element);
          }
        });
        console.log(this.Biblioteca);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBiblioteca();
  },
  mounted() {
    this.$store.commit("setMenu", "biblioteca");
  },
};
</script>