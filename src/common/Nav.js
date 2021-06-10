import "./Nav.scss";

function Nav(props) {
	return (
		<header className="header">
			<nav className={`nav ${props.light && "nav--light"}`}>
				<p className="nav__logo">
					RE:<span className="nav__logo--colored">create</span>
				</p>
				<ul className="nav__menu">
					<li className="nav__link nav__link--art">art of the day</li>
					<li className="nav__link nav__link--fav">my favourites</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
