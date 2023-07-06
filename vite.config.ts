import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: "192.168.1.174",
		//TODO: поправить на свой host у wifi
		// host: "192.168.0.110",
		port: 3000
	},
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
});
