"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Walktrhough1() {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);

  function clickHandler() {
    router.push("/feed");
  }

  return (
    <div className="w-screen h-screen relative">
      <section className="text-center absolute bottom-0 p-10">
        <h1 className="mb-4 font-bold text-2xl">Bing Chilling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          quia! Eum iusto doloribus culpa nisi unde consectetur harum nostrum
          aperiam obcaecati exercitationem. Asperiores aliquam neque fuga non
          minima vel perferendis.
        </p>
        <div className="flex justify-center gap-6 my-10">
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            sensors
          </span>
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            favorite
          </span>
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            music_note
          </span>
        </div>
        <button onClick={clickHandler}>SKIP</button>
      </section>
    </div>
  );
}
