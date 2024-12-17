import MovieCards from "./MovieCards";
import "./styles.css";

export default function HeroSec() {
  return (
    <div className="hero__sec">
      <div className="hero__text">
        <h1>Peaky Blinders</h1>
        <p>
          It features an ensemble cast led by Cillian Murphy, starring as Tommy
          Shelby, Helen McCrory as Elizabeth "Polly" Gray, Paul Anderson as
          Arthur Shelby, Sophie Rundle as Ada Shelby, and Joe Cole as John
          Shelby, the gang's senior members.
        </p>

        <div className="hero__btns">
          <button>Play</button>
          <button>Load</button>
        </div>
      </div>

      <MovieCards category={""} categoryTitle={"Now Playing "} />
    </div>
  );
}
