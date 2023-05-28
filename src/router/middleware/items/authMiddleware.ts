import { RouteLocationNormalized } from "vue-router";
import { RouteNames } from "@/router/routeNames";
import ls from "@/services/localStorage/storageService/localStorage";
import LocalStorageTokenService from "@/services/localStorage/tokenService/localStorageTokenService";
import SecurityService from "@/services/auth/securityService";
import { useUserStore } from "@/store/modules/user";

const securityService = new SecurityService();

// TODO: обновить мидлвар для токенов, после появления express jwt и прочего
const users = [];

class AuthMiddleware {
	constructor() {
	}

	async invoke(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		try {
			// ls.set("access_token", "1234");
			const tokenService = LocalStorageTokenService.getInstance();

			const accessToken = await tokenService.getAccessToken();

			if(!accessToken)
				return { name: RouteNames.AUTH };

			if(accessToken) {
				const userStore = useUserStore();
				const user = await securityService.getUser(accessToken);

				userStore.SET_USER(user);

				return { name: RouteNames.HOME };
			}
		} catch (e) {
			console.error(e);
		}
	}
}

export default new AuthMiddleware();
