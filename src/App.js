import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import History from "./pages/History/History";
import Liked from "./pages/Liked/Liked";
import Playlist from "./pages/Playlist/Playlist";
import VideoListing from "./pages/VideoListing/VideoListing";
import WatchLater from "./pages/WatchLater/WatchLater";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-container">
				<Sidebar />
				<Routes>
					<Route path="/" element={<VideoListing />} />
					<Route path="/history" element={<History />} />
					<Route path="/liked-videos" element={<Liked />} />
					<Route path="/watch-later" element={<WatchLater />} />
					<Route path="/playlist" element={<Playlist />} />
				</Routes>
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
