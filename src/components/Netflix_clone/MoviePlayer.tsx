import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import { LuArrowBigLeftDash } from "react-icons/lu";

type MovieData = {
  key: string;
};

export default function MoviePlayer() {
  const [movieData, setMovieData] = useState<MovieData>();
  const { id } = useParams();
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results[1]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <LuArrowBigLeftDash
        className="arrow__back"
        onClick={() => navigate("/")}
      />
      <iframe
        src={`https://www.youtube.com/embed/${movieData && movieData.key}`}
        title="trailer"
      ></iframe>
    </>
  );
}
