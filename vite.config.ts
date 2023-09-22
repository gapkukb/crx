import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
	manifest_version: 3,
	name: "test-react-vite-4",
	version: "1.0.0",
	action: { default_popup: "index.html" },
	// content_scripts: [{ js: ["src/main.ts"], matches: ["https://*/*"] }],
});

const port = 10010;

export default defineConfig({
	server: {
		port: port,
		strictPort: true,
		hmr: {
			port: port,
		},
	},
	plugins: [
		vue(),
		crx({
			manifest,
		}),
	],
});
