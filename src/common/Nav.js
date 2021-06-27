import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

function Nav(props) {
	return (
		<header className="header">
			<nav className={`nav ${props.light && "nav--light"}`}>
				<p className="nav__logo">
					<Link className="nav__logo-link" to="/">
						RE:<span className="nav__logo--colored">create</span>
					</Link>
				</p>
				<ul className="nav__menu">
					<li className="nav__list-item">
						<NavLink exact className="nav__link" activeClassName="nav__link--active" to="/">
							art of the day
						</NavLink>
					</li>
					<li className="nav__list-item">
						<NavLink exact className="nav__link" activeClassName="nav__link--active" to="/my-favourites">
							my favourites
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
