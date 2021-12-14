import {
  SET_STATE_STARS,
  CHANGE_STAR_LOADER,
  ERROR_STAR_USERS,
  SET_CURRENT_STAR,
  SET_LIKED_STARS,
  DELETE_STAR,
  IS_SEARCH,
  SEARCH_STARS,
  GET_STARS_LENGTH,
  SET_CURRENT_PAGE,
  SET_PAGINATION_PAGE,
} from "../actionTypes/stars";
import Repository from "../../repository";

export const setStateStars = (stars) => {
  return { type: SET_STATE_STARS, payload: stars };
};
export const setLikedStars = () => {
  return { type: SET_LIKED_STARS };
};
export function starsLoading(value) {
  return { type: CHANGE_STAR_LOADER, value };
}
export function loadingError(value) {
  return { type: ERROR_STAR_USERS, value };
}
export const setCurrentStar = (star) => {
  return { type: SET_CURRENT_STAR, payload: star };
};
export const removeStar = (id) => {
  return { type: DELETE_STAR, id };
};

export const deleteStarFromBD = (id) => async (dispatch) => {
  dispatch(starsLoading(true));
  const { value, error } = await Repository.APIStars.deleteStar(id);
  if (error || !value) {
    dispatch(loadingError(true));
  } else {
    dispatch(removeStar(id));
  }
  dispatch(starsLoading(false));
};

export const getStarsFromBD = () => async (dispatch) => {
  dispatch(starsLoading(true));
  const { value, error } = await Repository.APIStars.getStars();
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setStateStars(value));
  dispatch(starsLoading(false));
};

export const getStarFromBD = (id) => async (dispatch) => {
  dispatch(starsLoading(true));
  const { value, error } = await Repository.APIStars.getStar(id);
  if (!value || error) {
    dispatch(loadingError(true));
	}
  dispatch(setCurrentStar(value));
  dispatch(starsLoading(false));
};

export const setStarsIntoBD = (name, galaxy, img, text) => async (dispatch) => {
  dispatch(starsLoading(true));
  const { value, error } = await Repository.APIStars.createStar(
    name,
    galaxy,
    img,
    text
  );
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setStateStars(value));
  dispatch(starsLoading(false));
};

export const setSearchStars = (data) => ({
  type: SEARCH_STARS,
  payload: data,
});
export const isSearch = (bool) => ({ type: IS_SEARCH, payload: bool });
export const setSearchStarsFromBD =
  (name = "") =>
  async (dispatch) => {
    dispatch(isSearch(true));
    dispatch(starsLoading(true));
    const { value, error } = await Repository.APIStars.searchStar(name);
    error || !value
      ? dispatch(setSearchStars([]))
      : dispatch(setSearchStars([value]));
    dispatch(starsLoading(false));
  };

export const setStarsLength = (length) => ({
  type: GET_STARS_LENGTH,
  payload: length,
});
export const setCurrentPage = (number) => ({
  type: SET_CURRENT_PAGE,
  payload: number,
});
export const setPaginationPage = (number) => ({
  type: SET_PAGINATION_PAGE,
  payload: number,
});
