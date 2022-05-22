import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Login, Signup } from "./pages/Auth";
import {
	History,
	Liked,
	Playlist,
	Profile,
	SingleVideo,
	VideoListing,
	WatchLater,
} from "./pages";
import PrivateRoute from "./utils/PrivateRoute";
import SinglePlaylist from "./pages/SinglePlaylist/SinglePlaylist";
import Page404 from "./pages/404page/Page404";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-container">
				<Sidebar />
				<Routes>
					<Route path="*" element={<Page404 />} />
					<Route path="/" element={<VideoListing />} />
					<Route path="/watch/:videoId" element={<SingleVideo />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route
						path="/history"
						element={
							<PrivateRoute>
								<History />
							</PrivateRoute>
						}
					/>
					<Route
						path="/likedVideos"
						element={
							<PrivateRoute>
								<Liked />
							</PrivateRoute>
						}
					/>
					<Route
						path="/watchLater"
						element={
							<PrivateRoute>
								<WatchLater />
							</PrivateRoute>
						}
					/>
					<Route
						path="/playlist"
						element={
							<PrivateRoute>
								<Playlist />
							</PrivateRoute>
						}
					/>
					<Route
						path="/profile"
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					/>
					<Route
						path="/playlist/:playlistId"
						element={
							<PrivateRoute>
								<SinglePlaylist />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
