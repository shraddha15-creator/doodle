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
	PlaylistProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<VideosProvider>
					<PlaylistProvider>
						<LikesProvider>
							<HistoryProvider>
								<WatchLaterProvider>
									<App />
								</WatchLaterProvider>
							</HistoryProvider>
						</LikesProvider>
					</PlaylistProvider>
				</VideosProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
