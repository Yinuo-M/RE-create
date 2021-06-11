import "./Nav.scss";
import { Link } from "react-router-dom";

function Nav(props) {
	return (
		<header className="header">
			<nav className={`nav ${props.light && "nav--light"}`}>
				<p className="nav__logo">
					RE:<span className="nav__logo--colored">create</span>
				</p>
				<ul className="nav__menu">
					<li className="nav__link">
						<Link to="/">art of the day</Link>
					</li>
					<li className="nav__link">
						<Link to="/my-favourites">my favourites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
