import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<header id="header">
			<nav>
				<a href="/">
					<span>&lt;/&gt;</span> | SuryakanT
				</a>
				<div
					className={`menu-bar ${toggleMenu ? "active" : ""}`}
					onClick={() => setToggleMenu((prevState) => !prevState)}
				>
					<div className="top-bar"></div>
					<div className="middle-bar"></div>
					<div className="bottom-bar"></div>
				</div>
				<ul className={`menu ${toggleMenu ? "active" : ""}`}>
					<li>
						<a href="#hero" className="active">
							<span className="material-icons"> home </span> | Home
						</a>
					</li>
					<li>
						<a href="#projects">
							<span className="material-icons"> code_off </span> | Projects
						</a>
					</li>
					<li>
						<a href="#blogs">
							<span className="material-icons"> rss_feed </span> | Blogs
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
