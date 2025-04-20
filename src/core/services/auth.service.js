import $api from "@/core/api/index.js";

class AuthService {
    registerMember = async (body) => {
        try {
            let response = await $api.post("/member/create", body);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    registerOrganizer = async (body) => {
        try {
            let response = await $api.post("/organizer/create", body);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    login = async (body) => {
        try {
            let response = await $api.post("/auth/token", body);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new AuthService();
