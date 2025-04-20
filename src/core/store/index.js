import Vuex from "vuex"
import auth from "./modules/auth";
import notifications from "./modules/notifications";
import events from "./modules/events";

export default new Vuex.Store({
    modules: {
        auth,
        notifications,
        events
    }
});
