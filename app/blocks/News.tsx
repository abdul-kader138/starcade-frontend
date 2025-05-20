import { useState, useMemo } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

export default function News() {
  const itemsPerPage = 3;
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
    return [...new Helper().newsSection]
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
    <section className="text-white lg:px-20 md:px-20 xs:px-0.5 sm:px-0.5 py-3 mt-12 mb-2">
      <h2 className="text-4xl font-bold mb-2">{Lang.news}</h2>

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
            <Section sections={visibleItems} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
