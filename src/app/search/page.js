"use client";

export default function search() {
  return (
    <div className="w-[560px] h-dvh mx-auto pt-5 bg-slate-300">
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
