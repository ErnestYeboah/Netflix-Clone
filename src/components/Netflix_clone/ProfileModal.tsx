import { IoCloseOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import "./styles.css";
import { useNetflixContext } from "../../context/NetflixContext";
import { logOut } from "./firebase";

export default function ProfileModal() {
  const { showProfileModal, setShowProfileModal, setShowLoginModal } =
    useNetflixContext();

  return (
    <div
      className={showProfileModal ? "profile__modal active" : "profile__modal"}
    >
      <div className="title__sec">
        <p>yeboahernest246@gmail.com</p>
        <IoCloseOutline
          className="close__btn"
          onClick={() => setShowProfileModal(false)}
        />
      </div>

      <div className="profile__pic">
        <h1>E</h1>
      </div>
      <h1>Hi , Ernest</h1>

      <div className="logout">
        <IoExitOutline />
        <p onClick={() => logOut()} style={{ cursor: "pointer" }}>
          Sign Out
        </p>
      </div>
    </div>
  );
}
