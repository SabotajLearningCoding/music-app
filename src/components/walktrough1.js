"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Walkthrough1() {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState("sensors"); // sensors is active initially

  const toggleIcon = (icon) => {
    setActiveIcon(icon);
  };

  const getTitleAndText = (icon) => {
    switch (icon) {
      case "sensors":
        return {
          title: "Where Words Fail, Music Speaks",
          text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.",
        };
      case "favorite":
        return {
          title: "No Music No Life",
          text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.",
        };
      case "music_note":
        return {
          title: "Peace. Love. Music",
          text: "Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.",
        };
      default:
        return {
          title: "title",
          text: "text",
        };
    }
  };

  const { title, text } = getTitleAndText(activeIcon);

  const clickHandler = () => {
    router.push("/player");
  };

  return (
    <div className="w-[560px] h-screen relative mx-auto">
      <section className="text-center absolute bottom-0 p-10">
        <h1 className="mb-4 font-bold text-2xl">{title}</h1>
        <p>{text}</p>
        <div className="flex justify-center gap-6 my-10">
          <span
            className={`material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center ${
              activeIcon === "sensors"
                ? "bg-pink-600 text-white border-none"
                : ""
            }`}
            onClick={() => toggleIcon("sensors")}>
            sensors
          </span>
          <span
            className={`material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center ${
              activeIcon === "favorite"
                ? "bg-pink-600 text-white border-none"
                : ""
            }`}
            onClick={() => toggleIcon("favorite")}>
            favorite
          </span>
          <span
            className={`material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center ${
              activeIcon === "music_note"
                ? "bg-pink-600 text-white border-none"
                : ""
            }`}
            onClick={() => toggleIcon("music_note")}>
            music_note
          </span>
        </div>
        <button onClick={clickHandler}>SKIP</button>
      </section>
    </div>
  );
}
