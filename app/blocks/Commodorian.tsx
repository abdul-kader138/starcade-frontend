import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";

export default function Commodorian() {
  const { commodorian } = new Helper();

  return (
    <section className="text-white ml-14 mr-9 px-10 py-3">
      <h2 className="text-3xl font-bold mb-2">{Lang.commodoriani}</h2>
      <p className="text-sm text-gray-300 mb-6 max-w-md">
        {Lang.commodoriani_details}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-4">
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...commodorian]
          .sort((a, b) => b.id - a.id)
          .map((mag) => (
            <div
              key={mag.id}
              className="relative rounded-xl overflow-hidden group hover:scale-105 transition-transform"
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
      </div>
    </section>
  );
}
