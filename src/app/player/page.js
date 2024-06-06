"use client";

export default function Player() {
  return (
    <div className="mx-auto p-3 w-[560px]">
      <header className="flex mb-5">
        <a href="">back</a>
        <h2 className="uppercase mx-auto">playing</h2>
      </header>

      <img
        className="w-[500px] h-[500px] mx-auto"
        src="https://fakeimg.pl/500x500"
        alt="song image"
      />
      <div className="text-center items-center">
        <h3 className="font-bold">Song title</h3>
        <h4 className="font-light">Artist Name</h4>
        <span className="flex justify-evenly">
          <p>0:30</p>
          <p>----------------@-------------------</p>
          <p>1:00</p>
        </span>
      </div>

      <div className="flex justify-evenly mt-5 uppercase">
        <p>skip backward</p>
        <p>rewind</p>
        <p className="bg-orange-500 rounded-full px-2 py-1">play</p>
        <p>fast forward</p>
        <p>skip forward</p>
      </div>
    </div>
  );
}
