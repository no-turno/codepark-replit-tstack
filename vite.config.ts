import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			devTarget: "esnext",
		}),
		TanStackRouterVite({
			routeFilePrefix: "+",
			...(await Bun.file("./tsr.config.json").json()),
		}),
	],
	root: "./src/tool",
	publicDir: `${process.cwd()}/public`,
	base: "/",
	build: {
		outDir: `${process.cwd()}/dist`,
	},
});
