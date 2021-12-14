import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

const Card = ({
  img,
  title,
  galaxy,
  text,
  id,
  setLiked,
  likedData,
  deleteSt,
}) => {
  const isLikedPage = useLocation().pathname === "/liked";
  let [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    likedData.forEach((i) => {
      if (i.id === id) {
        setIsLiked(true);
      }
    });
  });

  let [textData, setText] = useState("");
  const modText = () => {
    if (text) {
      let mod = text.substr(0, 136).trim();
      if (text[text.length - 1].includes(",", ".")) {
        text = text.substr(0, text.length - 1);
      }
      mod += "...";
      setText(mod);
    }
  };

  const set = () => {
    if (isLiked) {
      setIsLiked(false);
      setLiked({ title, isLiked });
    } else {
      setLiked({ title, galaxy, img, text, id });
      setIsLiked(true);
    }
  };
  useEffect(() => {
    modText();
  }, [text]);

  const del = () => {
    deleteSt(id);
    setLiked({ title, isLiked });
  };

  return (
    <div className={style.card}>
      <Link to={`/star/${id}`}>
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
        <div className={style.name}>{title}</div>
        <div className={style.galaxy}>{galaxy}</div>
        <div className={style.text}>{textData}</div>
        <div className={style.more}>Посмотреть полностью</div>
      </Link>
      {!isLikedPage && (
        <div className={style.cross} onClick={del}>
          <span></span>
        </div>
      )}
      <div className={style.like} onClick={set}>
        {!isLiked ? (
          <img src="http://s1.iconbird.com/ico/2013/9/452/w512h4961380477090star.png" />
        ) : (
          <img src="https://pngicon.ru/file/uploads/izbrannoye.png" />
        )}
      </div>
    </div>
  );
};

export default Card;
