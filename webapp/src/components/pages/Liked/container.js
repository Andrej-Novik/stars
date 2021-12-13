import Liked from "./component";
import { useSelector, useDispatch } from "react-redux";
import { setLikedStars } from "../../../redux/actions/stars";

const LikedContainer = () => {
  const dispatch = useDispatch();

  let cards = JSON.parse(localStorage.getItem("liked")) || [];
  let likedData = useSelector((state) => state.stars.likedStars);

  const setLiked = (st) => {
    console.log(st);
    let cards = JSON.parse(localStorage.getItem("liked")) || [];
    if (st.isLiked) {
      cards = cards.filter((i) => i.title !== st.title);
      localStorage.setItem("liked", JSON.stringify(cards));
      dispatch(setLikedStars());
    } else {
      if (cards.length) {
        let is = false;
        cards.forEach((i) => {
          if (st.id === i.id) {
            is = true;
          }
        });
        if (!is) {
          cards.push(st);
          localStorage.setItem("liked", JSON.stringify(cards));
        }
      } else {
        cards.push(st);
        localStorage.setItem("liked", JSON.stringify(cards));
      }
    }
  };

  return (
    <div>
      <Liked liked={cards} likedData={likedData} setLiked={setLiked} />
    </div>
  );
};

export const container = LikedContainer;
