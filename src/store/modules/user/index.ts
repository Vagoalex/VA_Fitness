import { defineStore } from "pinia";
import storeManager from "@/store/manager";
import IUserState from "@/store/modules/user/types/userState";

const namespace = storeManager.myApp.user.namespace;

export const useUserStore = defineStore(namespace, {
	state: (): IUserState => (
		{
			user: {}
		}
	),
	getters: {},
	actions: {
		SET_USER(value: object) {
			this.user = value;
		}
	}
});
