import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CardList from "./component";
import {
  getStarsFromBD,
  setStarsIntoBD,
  setStateStars,
  setSortStars,
  setLikedStars,
  deleteStarFromBD,
  setSearchStars,
  setStarsLength,
  setPaginationPage,
  setCurrentPage,
  isSearch as IsSearch,
} from "../../../redux/actions/stars";
import json from "../../../stars.json";

const CardListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStarsFromBD());
  }, []);

  const sortBy = useSelector((state) => state.stars.sortBy);

  useEffect(() => {
    dispatch(setSortStars());
  }, [sortBy]);

  const stars = useSelector((state) => state.stars.stars);
  const starsLength = useSelector((state) => state.stars.starsLength);
  const currentPage = useSelector((state) => state.stars.currentPage);
  const isLoader = useSelector((state) => state.stars.isLoader);
  let likedData = useSelector((state) => state.stars.likedStars);
  const searchStar = useSelector((state) => state.stars.searchStar);
  const isSearch = useSelector((state) => state.stars.isSearch);

  useEffect(() => {
    dispatch(setStarsLength(stars.length));
  }, [stars, starsLength]);

  const sortUp = (star) => {
    const st = star.sort((a, b) => (a.rate > b.rate ? 1 : -1));
    dispatch(setStateStars(st));
    dispatch(setSortStars("up"));
  };

  const sortDown = (star) => {
    const st = star.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    dispatch(setStateStars(st));
    dispatch(setSortStars("down"));
  };

  const deleteSt = (id) => {
    dispatch(deleteStarFromBD(id));
  };

  const setLiked = (st) => {
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
          dispatch(setLikedStars());
        }
      } else {
        cards.push(st);
        localStorage.setItem("liked", JSON.stringify(cards));
        dispatch(setLikedStars());
      }
    }
  };
  const backToCatalog = () => {
    dispatch(IsSearch(false));
    dispatch(setSearchStars([]));
  };

  const onChangePage = (number, side = null) => {
    if (number && !side) {
      dispatch(setCurrentPage(number));
    }
    if (!number && side === "prev") {
      if (currentPage >= 2) {
        dispatch(setCurrentPage(currentPage - 1));
      }
    }
    if (!number && side === "next") {
      if (currentPage < Math.ceil(starsLength / 10)) {
        dispatch(setCurrentPage(currentPage + 1));
      }
    }
    if (!number && side === "end") {
      if (currentPage + 2 > Math.ceil(starsLength / 10)) {
        dispatch(setCurrentPage(Math.ceil(starsLength / 10)));
      } else {
        dispatch(setCurrentPage(currentPage + 2));
      }
    }
  };

  const setStars = () => {
    for (let i = 0; i <= json.length - 1; i++) {
      dispatch(
        setStarsIntoBD(json[i].name, json[i].galaxy, json[i].img, json[i].text)
      );
    }
  };
  return (
    <div>
      <CardList
        stars={stars}
        isLoader={isLoader}
        likedData={likedData}
        setLiked={setLiked}
        deleteSt={deleteSt}
        searchStar={searchStar}
        isSearch={isSearch}
        backToCatalog={backToCatalog}
        starsLength={starsLength}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      <button onClick={setStars}>SET</button>
    </div>
  );
};
export const container = CardListContainer;
