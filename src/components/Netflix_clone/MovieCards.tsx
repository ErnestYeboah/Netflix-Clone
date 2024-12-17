import { useEffect, useState } from "react";
import "./styles.css";
import { LuArrowBigLeftDash } from "react-icons/lu";
import { LuArrowBigRightDash } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

type MovieData = {
  title: string;
  backdrop_path: string;
  id: number;
};

type MovieTypes = {
  category: string;
  categoryTitle: string;
};

export default function MovieCards({ category, categoryTitle }: MovieTypes) {
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTU0ODQ2NmFjYWQwOTJhNDk0ZGEyMDliYjI3MzYyMCIsIm5iZiI6MTczMzU5NTA1Mi43MzYsInN1YiI6IjY3NTQ4ZmFjODAyYmFkMTYwOTFhZTNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rvxiqkcMccFpG-DPJzlUaePabQhSyHPvs3NgD-cvFUg",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (currentSlide > movieData.length - 1)
      setCurrentSlide(movieData.length - 1);
    else if (currentSlide <= 0) setCurrentSlide(0);
  }, [currentSlide]);

  return (
    <div className="movie__cards">
      <h2>{categoryTitle}</h2>
      <div
        style={{ translate: `-${currentSlide}0% 0` }}
        className="movie__slider"
      >
        {movieData &&
          movieData.map((movie, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(`/movie-player/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt=""
              />
              <p>{movie.title}</p>
            </div>
          ))}
      </div>

      <div className="arrows">
        <LuArrowBigLeftDash onClick={() => setCurrentSlide((t) => t - 1)} />
        <LuArrowBigRightDash onClick={() => setCurrentSlide((t) => t + 1)} />
      </div>
    </div>
  );
}
