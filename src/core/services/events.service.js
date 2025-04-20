import $api from "@/core/api/index.js";

class EventsService {
    getEventsSearch = async (body) => {
        try {
            let response = await $api.post("/member/create", body);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}

export default new EventsService();
