import { useState, useRef } from "react";
import Header from "./Header";
import { cheakValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validation
    console.log(email.current.value);
    console.log(password.current.value);

    const message = cheakValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign In sign Up Logic

    if (!isSignInForm) {
      //SignIn From
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signUp From
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

        });
    }
  };

  const ToggleSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4 ml-4">
          {isSignInForm ? "Sign In" : "SignUp"}
        </h1>
        <div className="flex flex-col">
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full rounded-lg  bg-gray-500"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full rounded-lg  bg-gray-500"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-lg bg-gray-500"
          />
          <p className="text-red-500 font-bold ">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "SignUp"}
          </button>
          <label className="block text-gray-500 font-bold">
            {isSignInForm && (
              <div>
                <input className="ml-2 mt-0 leading-tight" type="checkbox" />
                <span className="text-sm text-gray-500 px-1">Remember me</span>
              </div>
            )}
          </label>

          <p
            className="text-gray-500 py-4 cursor-pointer"
            onClick={ToggleSignInFrom}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Alreadt Registered? Sign In Now..."}
          </p>
          <p className=" text-sm text-gray-500 ">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
