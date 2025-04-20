import eventsService from "@/core/services/events.service.js";

export default {
    namespaced: true,
    state: {
        events: null
    },
    mutations: {
        setEvents(state, payload) {
            state.events = payload;
        }
    },
    actions: {
        async searchEvents({ commit }, searchBody) {
            try {
                const data = await eventsService.getEventsSearch(searchBody);
                if (!data) return;
                return data;
            } catch (e) {
                return null;
            }
        }
    },
    getters: {
        currentUser: state => state.user
    }
}
