"use client";
import { useEffect, useState } from "react";

export default function Login() {
  const CLIENT_ID = "802ef89235cc46afb715e50b953be3a2";
  const REDIRECT_URI = "http://localhost:3000/walkthrough";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  // To store the access token there are a number of operations to be done.
  // 1. We need to remove the # from the url params
  // 2. split the string from left and right so we only have the access token
  // Meaning: #access_token=[123i1321 sometihng....]
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      // using substring to remove the first part of the string meaning -> #access_token = (hashtag is gone)access_token
      // After spliting the acces_token form the rest it returns an array
      // now using find and looks for the string after the word specified meaning -> after: access_token[=numbers... ] also!! a key/value pair
      // And for the last split: =[inserty token string numbers...] in half by the = AND using everything after the =

      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        ?.split("=")[1];

      console.log(token);

      // ???
      window.localStorage.hash = "";
      // save key/value pair in local storage
      window.localStorage.setItem("token", token);
      // update state to current token
      setToken(token);
    }
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <a
        className="rounded-full flex justify-center items-center w-14 h-14 bg-pink-600"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        <span className="material-symbols-outlined text-white">
          fingerprint
        </span>
      </a>
      <span>One-Touch Login</span>
    </div>
  );
}
