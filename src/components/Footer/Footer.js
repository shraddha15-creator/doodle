import { NavLink } from "react-router-dom";
import { Toast } from "../Toast";
import "./footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "footer-items active-footer-item" : "footer-items"
					}
				>
					<div className="footer-items">
						<i className="fas fa-home"></i>
						<span>Home</span>
					</div>
				</NavLink>
				<NavLink
					to="/likedVideos"
					className={({ isActive }) =>
						isActive ? "footer-items active-footer-item" : "footer-items"
					}
				>
					<div className="footer-items">
						<i className="fas fa-heart"></i>
						<span>Liked</span>
					</div>
				</NavLink>
				<NavLink
					to="/playlist"
					className={({ isActive }) =>
						isActive ? "footer-items active-footer-item" : "footer-items"
					}
				>
					<div className="footer-items">
						<i className="fas fa-photo-video"></i>
						<span>Playlist</span>
					</div>
				</NavLink>
				<NavLink
					to="/watchLater"
					className={({ isActive }) =>
						isActive ? "footer-items active-footer-item" : "footer-items"
					}
				>
					<div className="footer-items">
						<i className="fas fa-clock"></i>
						<span>Watch Later</span>
					</div>
				</NavLink>
				<NavLink
					to="/history"
					className={({ isActive }) =>
						isActive ? "footer-items active-footer-item" : "footer-items"
					}
				>
					<div className="footer-items">
						<i className="fas fa-history"></i>
						<span>History</span>
					</div>
				</NavLink>
				<Toast />
			</footer>
		</>
	);
};

export default Footer;
