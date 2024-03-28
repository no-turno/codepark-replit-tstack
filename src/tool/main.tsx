import "../vite-env.d.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, type ThemeConfig } from "@chakra-ui/react";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const root = document.getElementById("app");

if (root)
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<ChakraProvider
				theme={{
					config: {
						initialColorMode: "dark",
						useSystemColorMode: false,
					} as ThemeConfig,
				}}
			>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>,
	);
