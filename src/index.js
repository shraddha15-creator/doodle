import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./context/videos-context";
import { AuthProvider } from "./context/auth-context";
import { WatchLaterProvider } from "./context/watchlater-context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<VideosProvider>
					<WatchLaterProvider>
						<App />
					</WatchLaterProvider>
				</VideosProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
