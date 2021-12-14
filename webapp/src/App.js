import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/styles/common.scss";
import Main from "./components/pages/Main";
import Star from "./components/pages/Star";
import Header from "./components/organisms/Header";
import LikedStars from "./components/pages/LikedStars";
import style from "./app.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Switch>
          <div className={style.content}>
            <Route exact path="/" component={Main} />
            <Route path="/liked" component={LikedStars} />
            <Route path="/star/:id" component={Star} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
