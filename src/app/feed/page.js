"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function feed() {
  const router = useRouter();
  function clickHandler() {
    router.push("/search");
  }

  return (
    <div className="w-[560px] h-dvh mx-auto">
      <header className="flex justify-between mb-5">
        <Link href="./">
          <img src="./arrow.svg" alt="back-arrow" />
        </Link>
        <Link href="./search">
          <img src="./search.svg" alt="search" />
        </Link>
      </header>

      <main className="flex flex-col items-center">
        <section className="mb-5">
          <p className="font-black text-gradient">Events Feed</p>
          <div className="flex gap-3">
            <p className="text-center uppercase pt-2 px-4 h-[41px] bg-[#FF1168] rounded-full text-white font-black">
              #palestina
            </p>
            <p className="text-center uppercase pt-2 px-4 h-[41px] bg-[#FF1168] rounded-full text-white font-black">
              #krig
            </p>
            <p className="text-center uppercase pt-2 px-4 h-[41px] bg-[#FF1168] rounded-full text-white font-black">
              #hammas
            </p>
          </div>
        </section>

        <section className="mb-5">
          <div className="rounded-xl mb-3">
            <img src="https://fakeimg.pl/500x400" alt="" />
            <div className="flex flex-col">
              <span>Hash-tag</span>
              <span>@@@ xx.xxx are talking about this</span>
              <span>TITLE</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex justify-between bg-slate-200 p-1">
        <Link href="">
          <img src="./pulse.svg" alt="Pulse" />
        </Link>
        <Link href="">
          <img src="./microphone.svg" alt="microphone" />
        </Link>

        <Link href="">
          <img src="./path.svg" alt="path" />
          <img
            className="flex relative bottom-9 left-[9px]"
            src="./path-wifi.svg"
            alt="path"
          />
        </Link>

        <Link href="">
          <img src="./contrast.svg" alt="contrast" />
        </Link>
        <Link href="">
          <img src="./settings.svg" alt="settings" />
        </Link>
      </footer>
    </div>
  );
}
