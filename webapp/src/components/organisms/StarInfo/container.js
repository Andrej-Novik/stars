import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStarFromBD } from "../../../redux/actions/stars";
import StarInfo from "./component";
import { useLocation } from "react-router-dom";

const StarInfoContainer = () => {
  const dispatch = useDispatch();
  const id = useLocation().pathname.slice(5);

  useEffect(() => {
    dispatch(getStarFromBD(id));
  }, []);

  const currentStar = useSelector((state) => state.stars.currentStar);
  const isError = useSelector((state) => state.stars.isError);
  const isLoader = useSelector((state) => state.stars.isLoader);

  return (
    <StarInfo
      title={currentStar.name}
      galaxy={currentStar.galaxy}
      img={currentStar.img}
      text={currentStar.text}
      isError={isError}
      isLoader={isLoader}
    />
  );
};

export const container = StarInfoContainer;
