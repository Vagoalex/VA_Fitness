import ILocalStorage from "@/services/localStorage/types/localStorageTypes";

export class LocalStorageService<T extends string> {
	private readonly storage: ILocalStorage;

	constructor(storage: ILocalStorage = window.localStorage) {
		this.storage = storage;
	}

	public get(key: T): string | null {
		return this.storage.getItem(key);
	}

	public set(key: T, value: string): void {
		this.storage.setItem(key, value);
	}

	public clearItem(key: T): void {
		this.storage.removeItem(key);
	}

	public clearItems(keys: T[]): void {
		keys.forEach((key) => this.clearItem(key));
	}
}

const ls = new LocalStorageService();
export default ls;
