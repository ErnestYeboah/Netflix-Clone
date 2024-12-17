import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Netflix_clone/NavBar";
import Home from "./components/Netflix_clone/Home";
import MoviePlayer from "./components/Netflix_clone/MoviePlayer";
import LoginModal from "./components/Netflix_clone/LoginModal";
import { useNetflixContext } from "./context/NetflixContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./components/Netflix_clone/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { showLoginModal, setShowLoginModal } = useNetflixContext();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) setShowLoginModal(false);
      else setShowLoginModal(true);
    });
  }, []);

  return (
    <>
      {!showLoginModal && <NavBar />}
      <ToastContainer theme="dark" />

      {showLoginModal ? (
        <LoginModal />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-player/:id" element={<MoviePlayer />} />
        </Routes>
      )}
    </>
  );
}

export default App;
