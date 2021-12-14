import { Link, useLocation } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  const likedStyle =
    useLocation().pathname === "/liked"
      ? style.liked + " " + style.forLiked
      : style.liked;

  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to={"/"}>
          <div className={style.logo}>
            <img src="https://bipbap.ru/wp-content/uploads/2017/04/maxresdefault-2-6.jpg" />
          </div>
        </Link>
        <div className={style.links}>
          <Link to={"/liked"} className={likedStyle}>
            <div>Избранное</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
