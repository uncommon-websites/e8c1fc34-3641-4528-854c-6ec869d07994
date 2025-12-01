/// <reference types="vite/client" />
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";
import Icons from "unplugin-icons/vite";
import ComponentTagger from "vite-plugin-component-tagger";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, ".", "");

	return {
		plugins: [
			tailwindcss(),
			sveltekit(),
			ComponentTagger(),
			Icons({
				compiler: "svelte"
			})
		],
		server: {
			allowedHosts: [".unc.mn", "localhost"],
			hmr: {
				overlay: env.UNC_ENV !== "preview"
			}
		}
	};
});
