import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
	VideosProvider,
	AuthProvider,
	WatchLaterProvider,
	HistoryProvider,
	LikesProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<LikesProvider>
					<VideosProvider>
						<HistoryProvider>
							<WatchLaterProvider>
								<App />
							</WatchLaterProvider>
						</HistoryProvider>
					</VideosProvider>
				</LikesProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
