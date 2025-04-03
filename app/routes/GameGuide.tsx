import { motion } from "framer-motion";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { Helper } from "~/utils/helper";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.game_guide },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.game_guide },
  ];
}

export default function GameGuide() {
  const {
    getYouTubeID,
    getStepByStepGuide,
    gameProTips,
    getFAQ,
    howToPlayLink,
    ProTipsLink,
  } = new Helper();

  return (
    <div className="px-3 py-5 text-white">
      <motion.div
        className="w-full flex items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🎮 Title */}
        <span className="text-md w-full text-white tracking-widest bg-opacity-50 px-1 shadow-md">
          🎮 {Lang.how_to_play}
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto p-1">
        {/* 🎥 Video Tutorial */}
        <motion.div
          className="mt-4 p-8 bg-gray-900 bg-opacity-80 rounded-sm shadow-xl  backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-sm font-bold text-white mb-2">
            📺 {Lang.watch_tutorial}
          </h5>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden border-1 shadow-xl hover:scale-102 transition-transform">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${getYouTubeID(
                howToPlayLink
              )}`}
              title={Lang.game_tutorial}
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* 🚀 Step-by-Step Guide */}
        <motion.div
          className="mt-8 p-8 bg-gray-900 bg-opacity-80 rounded-lg shadow-md backdrop-blur-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h5 className="text-sm font-bold text-white mb-6">
            🛠️ {Lang.step_by_guide}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getStepByStepGuide.map((step, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all border border-gray-700 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <FaCheckCircle className="text-green-400 mr-4 text-xl" />
                <span className="text-xs font-medium">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ⚡ Pro Tips Section */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-md backdrop-blur-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-sm font-bold text-white mb-6 tracking-wide">
            💡 {Lang.pro_tips}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameProTips.map((tip, index) => (
              <motion.div
                key={index}
                className="relative p-6 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center border border-gray-700 hover:border-yellow-400"
              >
                <a
                  href={ProTipsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 text-sm flex items-center w-full"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-red-500 bg-opacity-20 rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                    <MdOutlinePlayCircle className="text-white-400 text-lg" />
                  </div>
                  <span className="ml-4 text-xs font-semibold tracking-wide leading-tight text-gray-300 hover:text-yellow-400 transition-all">
                    {tip}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ❓ FAQ Section */}
        <motion.div
          className="mt-12 p-8 bg-gray-900 bg-opacity-80 rounded-lg shadow-md backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-sm font-bold text-white mb-6">❓{Lang.faq}</h5>
          {getFAQ.map((faq, index) => (
            <details
              key={index}
              className="mt-4 bg-gray-800 p-4 rounded-lg cursor-pointer"
            >
              <summary className="cursor-pointer text-white flex text-xs font-bold items-center hover:text-red-300 transition">
                <FaQuestionCircle className="mr-3 text-lg" /> {faq.q}
              </summary>
              <p className="text-gray-300 text-xs mt-3 pl-8">{faq.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
