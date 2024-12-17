import HeroSec from "./HeroSec";
import MovieCards from "./MovieCards";

export default function Home() {
  return (
    <div className="netflix__home">
      <HeroSec />
      <MovieCards category="upcoming" categoryTitle="Upcoming" />
      <MovieCards category="top_rated" categoryTitle="Top Rated" />
    </div>
  );
}
