import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/styles/common.scss";
import Main from "./components/pages/Main";
import Star from "./components/pages/Star";
import Header from "./components/organisms/Header";
import style from "./app.module.scss";
import Liked from "./components/pages/Liked";
//https://wikiway.com/dostoprimechatelnosti/top100/

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Switch>
          <div className={style.content}>
            <Route exact path="/" component={Main} />
            <Route path="/liked" component={Liked} />
            <Route path="/star/:id" component={Star} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
