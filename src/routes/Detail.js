import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          title={movieDetail.title}
          year={movieDetail.year}
          rating={movieDetail.rating}
          language={movieDetail.language}
          img={movieDetail.large_cover_image}
          description={movieDetail.description_full}
          genres={movieDetail.genres}
        />
      )}
    </div>
  );
}

export default Detail;
