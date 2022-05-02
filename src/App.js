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

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<VideoListing />} />
					<Route path="/history" element={<History />} />
					<Route path="/likedVideos" element={<Liked />} />
					<Route path="/watch/:videoId" element={<SingleVideo />} />
					<Route path="/watchLater" element={<WatchLater />} />
					<Route path="/playlist" element={<Playlist />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
