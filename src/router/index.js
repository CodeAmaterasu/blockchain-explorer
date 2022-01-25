import { createWebHistory, createRouter } from "vue-router"
import HomeView from "@/components/views/HomeView";
import WalletsView from "@/components/views/WalletsView";


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/wallets",
        name: "Wallets",
        component: WalletsView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router