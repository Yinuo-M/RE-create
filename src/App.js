import "./App.scss";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Home from "./home/Home";
import Favourites from "./favourites/Favourites";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [hasBgImg, setHasBgImg] = useState(false);

  function addBgImg() {
    setHasBgImg(true);
  }

  function removeBgImg() {
    setHasBgImg(false);
  }

  return (
    <HashRouter>
      <div className={`body-wrapper ${hasBgImg ? "background-image" : ""}`}>
        <Nav />
        <Switch>
          <Route path="/my-favourites">
            <Favourites addBgImg={addBgImg} removeBgImg={removeBgImg} />
          </Route>
          <Route path="/">
            <Home removeBgImg={removeBgImg} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
