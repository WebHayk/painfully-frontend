import authService from "@/core/services/auth.service.js";

export default {
    namespaced: true,
    state: {
        user: null,
        loading: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setLoading(state, status) {
            state.loading = status
        },
        logout(state) {
            state.token = null
            state.user = null
        }
    },
    actions: {
        async registerMember({ commit }, credentials) {
            try {
                commit("setLoading", true);
                const data = await authService.registerMember(credentials);
                if (!data) return;
                return data;
            } catch (e) {
                return null;
            } finally {
                commit("setLoading", false);
            }
        },
        async registerOrganizer({ commit }, {credentials}) {
            try {
                commit("setLoading", true);
                const data = await authService.registerOrganizer(credentials);
                if (!data) return;
                return data;
            } catch (e) {
                return null;
            } finally {
                commit("setLoading", false);
            }
        },
        async login({ commit }, credentials) {
            try {
                commit("setLoading", true);
                const data = await authService.login(credentials);
                if (!data) return;
                return data;
            } catch (e) {
                return null;
            } finally {
                commit("setLoading", false)
            }
        },
        logout({ commit }) {
            commit("logout");
        }
    },
    getters: {
        currentUser: state => state.user
    }
}
