import LocalStorageTokenService from "@/services/localStorage/tokenService/localStorageTokenService";
import { RouteNames } from "@/router/routeNames";

export default class SecurityService {
	tokenService: LocalStorageTokenService;

	constructor() {
		this.tokenService = LocalStorageTokenService.getInstance();
	}

	// TODO: создать интерфейс/класс для юзера в будущем
	async getUser(accessToken: string | null): Promise<any> {
		try {

			//TODO получаем юзера из токена
			// если его нет, то выкидываем пользователя и редиректим на логин или же на access-denied
			// если есть, то возвращаем данные юзера, а далее уже стора записывает их к себе в инфу

			const user = { id: "131313", fullName: "Ваго Александр", surname: "Ваго", role: "admin" };

			if(!user)
				return { name: RouteNames.AUTH };

			return user;
		} catch (e) {
			console.error(e);
			return { name: RouteNames.ERROR_INTERNAL_SERVER_ERROR };
		}
	}

	// async signIn(params = {}, state = {})
	// {
	// 	try {
	// 		await userManager.signinRedirect({
	// 			extraQueryParams: {
	// 				...signInConfig
	// 			},
	// 			state
	// 		});
	// 	} catch (e) {
	// 		console.error(e);
	// 		throw e;
	// 	}
	// }
	//
	// async signOut() {
	// 	try {
	// 		let resp = await userManager.signoutRedirect();
	// 		console.log("signed out", resp);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// }
}
