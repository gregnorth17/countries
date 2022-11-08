// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div className="nav-bar">
				<div>
					<h1 className="nav-title">Where in the world?</h1>
				</div>
				{/* <div className="dark-mode-btn">	
					<FontAwesomeIcon className="nav-icon" icon={faMoon} />
					<span>Dark Mode</span>
				</div> */}
			</div>
		</nav>
	)
}

export default Navbar;