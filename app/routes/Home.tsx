import Slider from "~/blocks/Slider";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";
import Section from "~/blocks/Section";
import { Helper } from "~/utils/helper";
import Commodorian from "~/blocks/Commodorian";
import ContactSection from "~/blocks/ContactSection";
import News from "~/blocks/News";
import Faq from "~/blocks/Faq";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.home },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.home },
  ];
}

export default function Home() {
  const { gameSections } = new Helper();
  return (
    <>
      <Slider />

      <div className="text-white ml-4 mr-4 px-4 py-3 mt-6 mb-2 sm:ml-14 sm:mr-9 sm:px-5">
        <Section sections={gameSections} />
      </div>

      <Commodorian />

      <ContactSection />

      <News />
      <Faq />
    </>
  );
}
