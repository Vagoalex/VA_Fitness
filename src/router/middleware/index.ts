import { NavigationGuardNext, RouteLocationNormalized, Router } from "vue-router";
import RedirectMiddleware from "@/router/middleware/items/redirectMiddleware";
import { useRootStore } from "@/store/modules/root";
import AuthMiddleware from "@/router/middleware/items/authMiddleware";
import { last } from "lodash";


export const configureMiddleware = (router: Router) => {
	router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
		const rootStore = useRootStore();
		const publicRoute = to.matched.some(record => record.meta.public);

		let items: any = [];

		if(!publicRoute) {
			items = await Promise.all([
				AuthMiddleware.invoke(to, from),
				RedirectMiddleware.invoke(to, from)
			]);
		}

		const settedItemsArray = [...new Set(items)];
		console.warn(settedItemsArray);

		if(settedItemsArray.length)
			// @ts-ignore
			next(last(settedItemsArray));
		else
			next();

		//TODO: убрать timeout, как придет время

		setTimeout(() => {
			rootStore.SET_IS_MY_APP_LOADING(false);
		}, 800);
	});
};
