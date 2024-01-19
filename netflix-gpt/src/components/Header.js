import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from  "../utils/firebase";
import { useSelector } from "react-redux";


const Header = () => {
  const Navigate = useNavigate(); 
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
       Navigate("/")
    }).catch((error) => {
         Navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
      className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="w-10 flex">
        <img className="w-30  h-12" alt="usericon" src= {user?.photoURL} />
        <button onClick={handleSignOut} name="SignOut">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
