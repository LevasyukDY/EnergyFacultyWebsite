import { createStore } from "vuex";

export default createStore({
  state: {
    darkTheme: false,
  },
  mutations: {
    changeTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});
