import { useState, useMemo } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";
import { motion, AnimatePresence } from "framer-motion";

export default function Commodorian() {
  const itemsPerPage = 6;

  const fullList = useMemo(() => getSafeSortedList(), []);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const totalPages = Math.ceil(fullList.length / itemsPerPage);
  const visibleItems = isSeeAll
    ? fullList
    : fullList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );

  function getSafeSortedList() {
    return [...new Helper().commodorian]
      .map((item) => ({ ...item }))
      .sort((a, b) => b.id - a.id);
  }

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section className="text-white ml-14 mr-9 px-10 py-3 mt-12 mb-2">
      <h2 className="text-4xl font-bold mb-2">{Lang.commodoriani}</h2>
      <p className="text-md font-bold text-gray-300 py-3 mb-6 max-w-md">
        {Lang.commodoriani_details}
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-4 py-3">
        {!isSeeAll && (
          <div className="flex border border-white rounded-full overflow-hidden">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition disabled:opacity-30"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className="px-4 py-2 hover:bg-white cursor-pointer hover:text-black transition border-l border-white disabled:opacity-30"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        <button
          onClick={() => setIsSeeAll((prev) => !prev)}
          className="border mx-3 border-white rounded-full px-4 py-1 text-xs hover:bg-white hover:text-black transition"
        >
          {isSeeAll ? Lang.see_less ?? "See Less" : Lang.see_all ?? "See All"}
        </button>
      </div>

      <hr className="border-gray-600 mb-6" />

      {/* Grid of Items */}
      <div className="relative w-full min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={isSeeAll ? "all" : currentPage}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            {visibleItems.map((mag) => (
              <div
                key={mag.id}
                className="w-[calc(100%/2-1rem)] sm:w-[calc(100%/3-1rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/6-1rem)] 
                  relative rounded-xl overflow-hidden group hover:scale-105 transition-transform"
              >
                <img
                  src={mag.image}
                  alt={mag.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
