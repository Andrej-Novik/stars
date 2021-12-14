import Card from "../../molecules/Star";
import style from "./style.module.scss";

const Liked = ({ liked, likedData, setLiked }) => {
  console.log(liked);
  return (
    <div className={style.wrapper}>
      {liked.length ? (
        <div className={style.container}>
          {liked.map((card) => {
            return (
              <Card
                key={card.img}
                img={card.img}
                title={card.title}
                galaxy={card.galaxy}
                text={card.text}
                id={card.id}
                likedData={likedData}
                setLiked={setLiked}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.container}>
          <h3>Нет добавленных звезд</h3>
        </div>
      )}
    </div>
  );
};

export default Liked;
