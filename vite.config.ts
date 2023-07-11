import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// base: import.meta.env.MODE === DEVELOPMENT_APP_MODE ? "/" : "/VA_Fitness/",
	const env = loadEnv(mode, process.cwd(), "");

	return {
		base: env.NODE_ENV === "development" ? "/" : "/VA_Fitness/",
		// server: {
		// 	host: "192.168.1.174",
		// 	port: 3000
		// },
		plugins: [
			vue(),
			legacy()
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@styles": path.resolve(__dirname, "./src/shared/styles"),
				"@assets": path.resolve(__dirname, "./src/shared/assets")
			}
		}
	};

});
