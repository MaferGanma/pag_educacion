import { createStore } from 'vuex'
import $ from 'jquery'
// import dotenv from 'dotenv'
// dotenv.config({ path: './../../.env' })

export default createStore({
  state: {
    menu: {
      inicio: false,
      acerca: false,
      comunicado: false,
      biblioteca: false,
      tramite: false
    },
    url_api: process.env.VUE_APP_URL_API,
    Institucion: {}
  },
  getters: {
  },
  mutations: {
    setMenu(state, option) {
      for (let element in state.menu) {
        if (element == option) {
          state.menu[element] = true;
        } else {
          state.menu[element] = false;
        }
      }
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        100
      );
    }
  },
  actions: {
  },
  modules: {
  }
})
