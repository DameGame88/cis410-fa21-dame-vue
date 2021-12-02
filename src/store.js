import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getEJuice({ commit }) {
      axios.get("/EJuice").then((aResponse) => {
        console.log("response in /Ejuice", aResponse);
        commit("storeEJuice", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/customer/logout", null, {
          headers: { Authorization: `Bearer ${state.token}` },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
