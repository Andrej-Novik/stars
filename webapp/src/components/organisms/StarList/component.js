import Card from "../../molecules/Star";
import Loader from "../../atoms/Loader";
import Search from "../Search";
import style from "./style.module.scss";
import row from "../../../assets/icons/rowToLeft.svg";
import Pagination from "../../molecules/Pagination";

const CardList = ({
  stars,
  isLoader,
  isSearch,
  searchStar,
  backToCatalog,
  likedData,
  setLiked,
  deleteSt,
  starsLength,
  currentPage,
  onChangePage,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.title}>Каталог</h2>
        <Search />
        <>
          {!isSearch ? (
            stars.length ? (
              <>
                <div className={style.list}>
                  {stars
                    .slice((currentPage - 1) * 10, 10 * currentPage)
                    .map((card) => {
                      return (
                        <Card
                          key={card.text}
                          img={card.img}
                          title={card.name}
                          galaxy={card.galaxy}
                          text={card.text}
                          id={card.id}
                          likedData={likedData}
                          setLiked={setLiked}
                          deleteSt={deleteSt}
                        />
                      );
                    })}
                </div>
              </>
            ) : null
          ) : searchStar.length ? (
            <>
              <button
                to={"/"}
                className={style.link}
                onClick={() => backToCatalog()}
              >
                <div>
                  <img src={row} />
                  <div>Назад на главную</div>
                </div>
              </button>
              <div className={style.list}>
                {searchStar.map((card) => {
                  return (
                    <Card
                      key={card.name}
                      img={card.img}
                      title={card.name}
                      text={card.text}
                      id={card.id}
                      setLiked={setLiked}
                      likedData={likedData}
                      deleteSt={deleteSt}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {!searchStar.length && isLoader ? (
                <Loader />
              ) : (
                <>
                  <button
                    to={"/"}
                    className={style.link}
                    onClick={() => backToCatalog()}
                  >
                    <div>
                      <img src={row} />
                      <div>Назад на главную</div>
                    </div>
                  </button>
                  <p data-failed-search-text>STAR NOT FAUND</p>
                </>
              )}
            </>
          )}
        </>
        <Pagination
          starsLength={starsLength}
          onChangePage={onChangePage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CardList;
