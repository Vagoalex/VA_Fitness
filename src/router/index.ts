import { createRouter, createWebHashHistory, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { RouteNames } from "@/router/routeNames";
import FitAuthLayout from "@/views/layouts/FitAuthLayout.vue";
import FitLoginPage from "@/views/pages/auth/login/FitLoginPage.vue";
import FitInternalServerError from "@/views/errors/FitInternalServerError.vue";
import FitAccessDeniedError from "@/views/errors/FitAccessDeniedError.vue";
import FitPageNotFoundError from "@/views/errors/FitPageNotFoundError.vue";
import { configureMiddleware } from "@/router/middleware";
import FitHomePage from "@/views/pages/home/FitHomePage.vue";
import FitTabs from "@/views/shared/tabs/FitTabs.vue";
import FitTestPage from "@/views/pages/home/FitTestPage.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: FitTabs,
		name: RouteNames.ROOT,
		redirect: { name: RouteNames.HOME },
		children: [
			{
				path: "/home",
				name: RouteNames.HOME,
				component: FitHomePage
			},
			{
				path: "/test",
				name: RouteNames.TEST,
				component: FitTestPage
			},
			{
				path: "/auth",
				component: FitAuthLayout,
				name: RouteNames.AUTH,
				redirect: { name: RouteNames.AUTH_LOGIN_PAGE },
				children: [
					{
						path: "/auth/login-page",
						component: FitLoginPage,
						name: RouteNames.AUTH_LOGIN_PAGE
					}
				]
			},
		],
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
];

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	// history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

configureMiddleware(router);

export default router;
