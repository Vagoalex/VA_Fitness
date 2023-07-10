import { RouteLocationNormalized } from "vue-router";
import { RouteNames } from "@/router/routeNames";
import { useUserStore } from "@/store/modules/user";
import { IMiddleware } from "@/types/core/middleware";

export default class RedirectMiddleware implements IMiddleware {
	constructor() {
	}

	async invoke(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		try {
			if(to.name === RouteNames.AUTH) {
				return { name: RouteNames.AUTH_LOGIN_PAGE };
			}
			if(to.name === RouteNames.ROOT) {
				const userStore = useUserStore();

				const user = userStore.$state.user;

				if(user)
					return { name: RouteNames.TABS };
				else
					return { name: RouteNames.AUTH };

			}
			if(to.name === RouteNames.TABS) {
				return { name: RouteNames.HOME };
			}

		} catch (e) {
			console.error(e);
		}
	}
}
