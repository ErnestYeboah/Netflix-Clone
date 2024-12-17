import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "./styles.css";
import ProfileModal from "./ProfileModal";
import { useNetflixContext } from "../../context/NetflixContext";

export default function NavBar() {
  const { setShowProfileModal } = useNetflixContext();
  return (
    <nav>
      <Link to={"/"}>
        <img src="/images/netflix.png" alt="" />
      </Link>

      <div className="nav__links">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Movies</Link>
        <Link to={"/"}>About</Link>
      </div>
      <div className="nav__icons">
        <IoSearchOutline className="search__icon" />
        <button
          onClick={() => setShowProfileModal((t) => !t)}
          className="profile__btn"
        >
          EY
        </button>
      </div>

      <ProfileModal />
    </nav>
  );
}
