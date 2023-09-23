import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
	manifest_version: 3,
	name: "test-react-vite-4",
	version: "1.0.0",
	action: { default_popup: "popup.html" },
	// options_page: "options.html",
	// devtools_page: "devtools.html",
	background: {
		service_worker: "src/background.ts",
		type: "module",
	},
	permissions: ["tabs", "webRequest", "downloads"],
	content_scripts: [{ js: ["src/utils/qrcode.ts"], matches: ["<all_urls>"], run_at: "document_start" }],
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
	build: {
		rollupOptions: {
			input: ["popup.html", "options.html"],
		},
	},
	plugins: [
		vue(),
		crx({
			manifest,
		}),
	],
});
