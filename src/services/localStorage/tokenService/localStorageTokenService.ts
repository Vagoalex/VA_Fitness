import { LocalStorageService } from "@/services/localStorage/storageService/localStorage";
import TokenTypes from "@/services/localStorage/types/tokenTypes";

export default class LocalStorageTokenService extends LocalStorageService<TokenTypes> {
	private static instance?: LocalStorageTokenService;

	private constructor() {
		super();
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new LocalStorageTokenService();
		}

		return this.instance;
	}

	public getAccessToken() {
		return this.get(TokenTypes.ACCESS_TOKEN);
	}

	public setAccessToken(accessToken: string) {
		this.set(TokenTypes.ACCESS_TOKEN, accessToken);
	}

	public getRefreshToken() {
		return this.get(TokenTypes.REFRESH_TOKEN);
	}

	public setRefreshToken(refreshToken: string) {
		this.set(TokenTypes.REFRESH_TOKEN, refreshToken);
	}

	public clear() {
		this.clearItems([TokenTypes.ACCESS_TOKEN, TokenTypes.REFRESH_TOKEN]);
	}
}
