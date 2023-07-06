import { NavigationGuardNext, RouteLocationNormalized, Router } from "vue-router";
import { useRootStore } from "@/store/modules/root";
import Middleware from "@/router/middleware/items/middleware";
import RedirectMiddleware from "@/router/middleware/items/redirectMiddleware";


export const configureMiddleware = (router: Router) => {
	router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
		const rootStore = useRootStore();
		const middleware = new Middleware(to, from, next);
		const publicRoute = to.matched.some(record => record.meta.public);

		if(!publicRoute) {
			middleware.useMiddleware(RedirectMiddleware);
		}

		await middleware.run();

		//TODO: убрать timeout, как придет время

		setTimeout(() => {
			rootStore.SET_IS_MY_APP_LOADING(false);
		}, 700);
	});
};
