import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "@cldcvr/flow-aws-icon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["es"],
		  },
		  // outDir: "dist",
		  rollupOptions: {
			external: ["@cldcvr/flow-core",/^lit/],
			output: {
			  globals: {
				"@cldcvr/flow-core": "@cldcvr/flow-core",
			  },
			},
		  },
		},
	  });