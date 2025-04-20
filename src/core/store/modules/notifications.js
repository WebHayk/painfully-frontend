const BASE_TIMEOUT = 3000;
const COLOR = "success";

export default {
    namespaced: true,
    state: () => ({
        visible: false,
        message: "",
        /**
         * Notification color type.
         * Available values:
         * - "success" ✅
         * - "error" ❌
         * - "warning" ⚠️
         * - "info" ℹ️
         */
        color: "success",
        timeout: 3000,
    }),
    mutations: {
        showNotification(state, payload) {
            state.message = payload.message;
            state.color = payload.color || COLOR;
            state.timeout = payload.timeout || BASE_TIMEOUT;
            state.visible = true;
        },
        hide(state) {
            state.visible = false;
        },
    },
    actions: {
        trigger({ commit }, payload) {
            commit("showNotification", payload);
        },
        close({ commit }) {
            commit("hide");
        },
    },
};
