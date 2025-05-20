import Slider from "~/blocks/home/Slider";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";
import Section from "~/blocks/home/Section";
import { Helper } from "~/utils/helper";
import Commodorian from "~/blocks/home/Commodorian";
import ContactSection from "~/blocks/home/ContactSection";
import News from "~/blocks/home/News";
import Faq from "~/blocks/home/Faq";

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

      <div className="text-white mt-6 mb-2 lg:px-20 md:px-20 xs:px-0.5 sm:px-0.5">
        <Section sections={gameSections} />
      </div>

      <Commodorian />

      <ContactSection />

      <News />
      <Faq />
    </>
  );
}
