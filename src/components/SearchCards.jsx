import Movie from "./Movie";

const SearchCards = ({ title, likedMovie }) => {
  return (
    <>
      <h1 className="text-white font-bold p-4 md:pl-8 md:text-xl">{title}</h1>
      <div className="relative flex items-center justify-center p-4 md:pl-8 group">
        <div className="w-full h-full flex flex-wrap justify-center gap-6 md:justify-start md:gap-6">
          {likedMovie.length !== 0 &&
            likedMovie.map((item, id) => {
              return <Movie key={id} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default SearchCards;
