"use client";
import { useState, useRef, useEffect } from "react";

export default function Player1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const percentage = (currentTime / duration) * 100;
    setProgress(percentage);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    const duration = audioRef.current.duration;
    const newTime = (newProgress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newProgress);
  };

  return (
    <div className="mx-auto p-3 w-full max-w-md">
      <header className="flex justify-between items-center mb-5">
        <a href="#" className="text-gray-500">
          &#8592;
        </a>
        <h2 className="uppercase text-center flex-grow">Playing</h2>
      </header>

      <div className="flex justify-center mb-5">
        <img
          className="w-[300px] h-[300px] rounded-full"
          src="/disc.svg"
          alt="song image"
        />
      </div>

      <div className="text-center mb-2">
        <h3 className="text-xl font-bold">Don't Call Me Up</h3>
        <p className="text-gray-500">Mabel</p>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        className="hidden">
        <source src="/wtcn-Ah_Lann.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex items-center">
        <span className="text-sm text-gray-500">0:00</span>
        <input
          ref={progressBarRef}
          type="range"
          value={progress}
          max="100"
          onChange={handleProgressChange}
          className="flex-grow mx-3 appearance-none bg-pink-300 rounded-full h-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <span className="text-sm text-gray-500">10:00</span>
      </div>

      <div className="flex justify-around items-center mt-4">
        <button>
          <img src="/skip-backward.svg" alt="Skip backward" />
        </button>
        <button>
          <img src="/rewind.svg" alt="Rewind" />
        </button>
        <button
          onClick={togglePlayPause}
          className="w-16 h-16 flex items-center justify-center bg-pink-500 text-white rounded-full">
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button>
          <img src="/fastforward.svg" alt="fast forward" />
        </button>
        <button>
          <img src="/skip-forward.svg" alt="Skip forward" />
        </button>
      </div>
    </div>
  );
}
