import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/user/auth/LoginView.vue";
import RegisterView from "@/views/user/auth/RegisterView.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import EventsView from "@/views/user/events/EventsView.vue";
import UserProfile from "@/views/user/UserProfileView.vue";
import CreateEventView from "@/views/user/events/CreateEventView.vue";
import EventView from "@/views/user/events/EventView.vue";

const routes = [
    {
        path: "/user",
        component: DashboardLayout,
        children: [
            {
                path: "events",
                name: "UserEvents",
                component: EventsView,
                meta: {
                    titleKey: "events"
                }
            },
            {
                path: "events/:id",
                name: "UserEventDetail",
                component: EventView,
                props: () => ({ event: {
                        id: 101,
                        title: 'Vue 3 Masterclass Webinar',
                        description: 'Join us for an in-depth Vue 3 masterclass covering Composition API, best practices, and real-world examples.',
                        date: '2025-04-12T18:30:00Z',
                        image: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                        category: 'Web Development'
                    } }),
                meta: {
                    titleKey: "eventDetail"
                }
            },
            {
                path: "events/create",
                name: "UserEventCreate",
                component: CreateEventView,
                meta: {
                    titleKey: "createEvent"
                }
            },
            {
                path: "profile",
                name: "UserProfile",
                component: UserProfile,
                meta: {
                    titleKey: "profile"
                }
            }
        ]
    },
    {
        path: "/",
        name: "Home",
        component: HomeView,
        meta: { transition: "fade" },
    },
    {
        path: "/user/auth/login",
        name: "UserLogin",
        component: LoginView,
        meta: { transition: "fade" },
    },
    {
        path: "/user/auth/register",
        name: "UserRegister",
        component: RegisterView,
        meta: { transition: "fade" },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: "smooth" };
        }
    },
});

export default router;
