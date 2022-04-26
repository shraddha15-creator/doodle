import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import History from "./pages/History/History";
import Liked from "./pages/Liked/Liked";
import Playlist from "./pages/Playlist/Playlist";
import Profile from "./pages/Profile/Profile";
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
					<Route path="/likedVideos" element={<Liked />} />
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
