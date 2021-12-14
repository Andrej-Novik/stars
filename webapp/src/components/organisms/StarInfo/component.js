import { Link } from "react-router-dom";
import Loader from "../../atoms/Loader";
import row from "../../../assets/icons/rowToLeft.svg";
import style from "./style.module.scss";

const ObjectInfo = ({ img, title, galaxy, text, isError, isLoader }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link to={"/"} className={style.link}>
          <img src={row} />
          <div>Назад на главную</div>
        </Link>
        {isError ? (
          <div className={style.error}>STAR NOT FAUND</div>
        ) : isLoader ? (
          <Loader />
        ) : (
          <>
            <div className={style.star}>
              <div className={style.image}>
                <img src={img} />
              </div>
              <div className={style.info}>
                <div className={style.title}>{title}</div>
                <div className={style.galaxy}>{galaxy}</div>
              </div>
            </div>
            <p className={style.text}>{text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ObjectInfo;
