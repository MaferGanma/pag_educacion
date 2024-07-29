<template>
  <!-- Navbar Start -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <router-link
      to="/"
      class="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <img src="@/assets/img/logo2.png" style="width: auto; height: 75px" />
    </router-link>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link
          to="/"
          class="nav-item nav-link"
          :class="[menu.inicio ? 'active' : '']"
          @click="$store.commit('setMenu', 'inicio')"
          >Inicio</router-link
        >
        <router-link
          to="/acerca"
          class="nav-item nav-link"
          :class="[menu.acerca ? 'active' : '']"
          @click="$store.commit('setMenu', 'acerca')"
          >Acerca de</router-link
        >
        <router-link
          to="/comunicados"
          class="nav-item nav-link"
          :class="[menu.comunicado ? 'active' : '']"
          @click="$store.commit('setMenu', 'comunicado')"
          >Comunicados</router-link
        >
        <router-link
          to="/biblioteca"
          class="nav-item nav-link"
          :class="[menu.biblioteca ? 'active' : '']"
          @click="$store.commit('setMenu', 'biblioteca')"
          >Biblioteca</router-link
        >
        <router-link
          to="/tramites"
          class="nav-item nav-link"
          :class="[menu.tramite ? 'active' : '']"
          @click="$store.commit('setMenu', 'tramite')"
          >Tramites</router-link
        >
        <div class="nav-item dropdown">
          <a href="javacript:void(0)" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Unidad Psicopedagogica</a
          >
          <div class="dropdown-menu fade-down m-0">
            <router-link
              to="/orientacion"
              class="dropdown-item"
              @click="$store.commit('setMenu', 'orientacion')"
              >Orientacion vocacional</router-link
            >
            <router-link
              to="/apoyo"
              class="dropdown-item"
              @click="$store.commit('setMenu', 'apoyo')"
              >Apoyo Educativo</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "headerCustom",
  computed: {
    ...mapState(["menu"]),
  },
};
</script>