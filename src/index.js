import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "../node_modules/modern-normalize/modern-normalize.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { App } from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<ToastContainer position="top-center" autoClose={3000} />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
