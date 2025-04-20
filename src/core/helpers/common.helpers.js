import router from "@/core/router/index.js";
import store from "@/core/store/index.js";

class CommonHelpers {
    logoutUser = async () => {
        await store.dispatch("auth/logout");
        await router.push({name: "UserLogin"});
    }
}

export default new CommonHelpers();
