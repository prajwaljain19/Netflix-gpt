import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/Browse");
      } else {
        dispatch(removeUser());
        Navigate("/");
      }
    });

    // Unsubscribe when component is unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    console.log("click");
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />

      <select className="mx-2 my-2 rounded-lg">
      <option lang="en">English</option>
      <option lang="hindi">Hindi</option>
      <option lang="spanish">Spanish</option>
      </select>

      <div className="flex p-2">
        <button
          className="px-3 py-2 mx-4 my-2 text-white bg-blue-900 rounded-lg"
          onClick={handleGptSearchClick}
        >
          GPT Search
        </button>
        <img className="w-30 h-12" alt="usericon" src={user?.photoURL} />
        <button
          onClick={handleSignOut}
          className="font-bold text-white ml-3"
          name="SignOut"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
