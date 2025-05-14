import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";
import Section from "./Section";

export default function Commodorian() {
  const { newsSection } = new Helper();

  return (
    <section className="text-white ml-14 mr-9 px-10 py-3 mt-4 mb-2">
      <h2 className="text-4xl font-bold mb-2">{Lang.news}</h2>

      <div className="flex flex-wrap items-center gap-4 mb-4 py-3">
        <div className="flex border border-white rounded-full overflow-hidden">
          <button className="px-4 py-2 hover:bg-white hover:text-black transition">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button className="px-4 py-2 hover:bg-white hover:text-black transition border-l border-white">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        <button className="border mx-3 border-white rounded-full px-4 py-1 text-xs hover:bg-white hover:text-black transition">
          {Lang.see_all}
        </button>
      </div>

      <hr className="border-gray-600 mb-6" />

      <Section sections={newsSection} />
    </section>
  );
}
