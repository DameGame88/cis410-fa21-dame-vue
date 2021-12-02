import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    token: null,
    user: null,
    EJuice: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeEJuice(state, EJuice) {
      state.EJuice = EJuice;
    },
  },
  actions: {
    getEJuice({ commit }) {
      axios.get("/EJuice").then((aResponse) => {
        console.log("response in /Ejuice", aResponse);
        commit("storeEJuice", aResponse.data);
      });
    },
  },
});
