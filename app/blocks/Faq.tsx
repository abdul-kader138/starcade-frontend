import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
// @ts-ignore
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Lang from "~/lang/lang";
import { Helper } from "~/utils/helper";

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const { faqItems } = new Helper();

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="text-white ml-8 mr-2 my-16 px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left Side */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold leading-tight">{Lang.faq}</h2>
        <p className="italic text-lg text-gray-300">{Lang.have_question}</p>
        <p className="text-gray-300 text-md md:text-base">{Lang.faq_content}</p>
      </div>

      {/* Right Side with custom scrollbar */}
      <SimpleBar style={{ maxHeight: 450 }} className="space-y-4 pr-2">
        <div className="space-y-4 pr-2">
          {faqItems.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.color }}
              className={`relative px-4 py-6 sm:px-6 rounded-3xl transition-all duration-200 hover:shadow-lg`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <div>
                  <span className="inline-block bg-black/50 text-xs font-semibold text-white px-2 py-1.5 rounded-full mb-1">
                    {Lang.question}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.question}
                  </h3>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    activeId === item.id ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeId === item.id ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm sm:text-base text-white">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>
    </section>
  );
}
