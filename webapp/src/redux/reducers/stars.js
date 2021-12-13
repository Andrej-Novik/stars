import {
  SET_STATE_STARS,
  CHANGE_STAR_LOADER,
  ERROR_STAR_USERS,
  SET_CURRENT_STAR,
  SET_SORT_STARS,
  SET_LIKED_STARS,
  DELETE_STAR,
  IS_SEARCH,
  SEARCH_STARS,
  GET_STARS_LENGTH,
  SET_CURRENT_PAGE,
  SET_PAGINATION_PAGE,
} from "../actionTypes/stars";

export const initialState = {
  stars: [],
  likedStars: JSON.parse(localStorage.getItem("liked")) || [],
  currentStar: {
    name: "",
    galaxy: "",
    img: "",
    text: "",
    id: "",
  },
  starsLength: 5,
  currentPage: 1,
  paginationPage: 1,
  isSearch: false,
  searchStar: [],
  isError: false,
  isLoader: false,
  sortBy: "up",
};

const stars = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_STARS: {
      return {
        ...state,
        stars: action.payload,
      };
    }
    case SET_LIKED_STARS: {
      return {
        ...state,
        likedStars: JSON.parse(localStorage.getItem("liked")) || [],
      };
    }
    case SET_SORT_STARS: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    case CHANGE_STAR_LOADER: {
      return {
        ...state,
        isLoader: action.value,
      };
    }
    case ERROR_STAR_USERS: {
      return {
        ...state,
        isError: action.value,
      };
    }
    case SET_CURRENT_STAR: {
      return {
        ...state,
        currentStar: action.payload,
      };
    }
    case DELETE_STAR: {
      return {
        ...state,
        stars: state.stars.filter((i) => i.id !== action.id),
      };
    }
    case IS_SEARCH: {
      return {
        ...state,
        isSearch: action.payload,
      };
    }
    case SEARCH_STARS: {
      return {
        ...state,
        searchStar: action.payload,
      };
    }
    case GET_STARS_LENGTH: {
      return {
        ...state,
        starsLength: action.payload,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case SET_PAGINATION_PAGE: {
      return {
        ...state,
        paginationPage: action.payload,
      };
    }

    default:
      return state;
  }
};

export default stars;
