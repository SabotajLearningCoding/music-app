import Link from "next/link";

// Sample event data
const eventData = [
  {
    tags: ["#spotify", "#musicworld", "#jazz", "#billboard"],
    mentions: "3,123",
    title: "Coachella 2019 Day Three Highlights",
  },
  {
    tags: ["#spotify", "#musicworld", "#grammy2020"],
    mentions: "3,123",
    title: "Coachella 2019 Day Three Highlights",
  },
];

export default function Feed() {
  return (
    <div className="w-[560px] h-dvh mx-auto">
      <header className="flex justify-between mb-5">
        <Link href="feed">
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
            {eventData.map((event, index) => (
              <div key={index} className="flex gap-1">
                {event.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="text-center uppercase pt-2 px-4 h-[41px] bg-[#FF1168] rounded-full text-white font-black">
                    {tag}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          {eventData.map((event, index) => (
            <div key={index} className="rounded-xl mb-3">
              <img src="https://fakeimg.pl/500x400" alt="" />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Hash-tags</span>
                <span className="text-xs text-gray-400">
                  @@@ {event.mentions} are talking about this
                </span>
                <span className="text-lg font-semibold">{event.title}</span>
              </div>
            </div>
          ))}
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
