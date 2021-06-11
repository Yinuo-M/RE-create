import "./App.scss";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Home from "./home/Home";
import Favourites from "./favourites/Favourites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route path="/my-favourites">
						<Favourites />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
