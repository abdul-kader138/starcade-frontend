import Lang from "../lang/lang";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.home },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.home },
  ];
}

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/fxrumble.mp4" type="video/mp4" />
          {Lang.video_message}
        </video>

        {/* Overlay Container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 lg:px-24">
          {/* Content Box (Semi-Transparent) */}
          <div
            className="p-8 rounded-lg max-w-lg text-white"
            style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }}
          >
            <p className="text-xs uppercase text-red-400"> {Lang.welcome}</p>
            <h1 className="text-lg leading-tight mt-2 text-white">
              {Lang.tfr}
            </h1>
            <h2 className="text-xl font-bold text-red-500 mt-2">{Lang.utg}</h2>
            <p className="text-md font-light mt-3 uppercase">{Lang.npng}</p>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              {Lang.home_big_text}
            </p>

            {/* Buttons */}
            <div className="flex space-x-6 mt-6">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-sm hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-bold text-md">
                {Lang.play_now}
              </button>
              <a
                href="#"
                className="text-red-500 hover:underline text-sm font-semibold"
              >
                {Lang.how_work}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom Section */}
      <div className="relative w-full bg-gray-900 text-center py-10 mt-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-red-500 mb-4 uppercase">
            {Lang.introduce_fxrumble}
          </h2>
          <p className="text-gray-300 text-md leading-relaxed">{Lang.nlg}</p>
          <div className="mt-6">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:bg-red-600 text-white px-3 py-2 rounded-md font-bold text-sm">
              {Lang.learn_more}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
