import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import FitMainLayout from "@/views/layouts/FitMainLayout.vue";
import { RouteNames } from "@/router/routeNames";
import FitAuthLayout from "@/views/layouts/FitAuthLayout.vue";
import FitLoginPage from "@/views/auth/loginPage/FitLoginPage.vue";
import FitHome from "@/views/home/FitHome.vue";
import FitInternalServerError from "@/views/errors/FitInternalServerError.vue";
import FitAccessDeniedError from "@/views/errors/FitAccessDeniedError.vue";
import FitPageNotFoundError from "@/views/errors/FitPageNotFoundError.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: FitMainLayout,
		name: RouteNames.ROOT,
		children: [
			{
				path: "/auth",
				component: FitAuthLayout,
				name: RouteNames.AUTH,
				redirect: { name: RouteNames.AUTH_LOGIN_PAGE },
				children: [
					{
						path: "/login-page",
						component: FitLoginPage,
						name: RouteNames.AUTH_LOGIN_PAGE
					}
				]
			},
			{
				path: "/home",
				component: FitHome,
				name: RouteNames.HOME
			},
			{
				path: "/internal-server-error",
				meta: { public: true },
				component: FitInternalServerError,
				name: RouteNames.ERROR_INTERNAL_SERVER_ERROR
			},
			{
				path: "/access-denied",
				meta: { public: true },
				component: FitAccessDeniedError,
				name: RouteNames.ERROR_ACCESS_DENIED
			},
			{
				path: "/:pathMatch(.*)",
				meta: { public: true },
				component: FitPageNotFoundError,
				name: RouteNames.ERROR_PAGE_NOT_FOUND
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
