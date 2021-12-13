import React from "react";
import style from "./style.module.scss";
import search from "../../../assets/icons/search.svg";

const Search = ({ onSubmit }) => {
  let request = React.createRef();
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(request.current.value);
        request.current.value = "";
      }}
    >
      <div
        className={style.search}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(request.current.value);
          request.current.value = "";
        }}
      >
        <img src={search} />
      </div>
      <input
        ref={request}
        type="text"
        placeholder={"Введите название звезды"}
      />
    </form>
  );
};

export default Search;
