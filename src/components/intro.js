"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Intro() {

  const router = useRouter()

  useEffect(() => {
      setInterval(() => {
        router.push("/login")

      }, 3000)
  },[])

    return (
      <div className="w-screen h-screen flex items-center flex-col justify-center gap-6 opacity-0 animate-fade">
      <img className="block h-[12em]" src="./intro-logo.png" alt="iPlayMovie" />
      <h1 className="text-3xl font-bold">iPlayMusic</h1>
      </div>
    );
  }