"use client";

import Link from "next/link";

export default function Search1() {
  return (
    <div className="w-[560px] h-dvh mx-auto pt-5 bg-slate-300">
      <Link href="/feed">
        <img src="./arrow.svg" alt="back" />
      </Link>
      <label className="flex flex-col items-center">
        <textarea
          className="w-[500px]"
          name="search"
          placeholder="song, album, artist"
          id="placeholder"></textarea>
      </label>
    </div>
  );
}
