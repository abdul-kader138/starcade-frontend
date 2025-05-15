import Slider from "~/blocks/Slider";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.home },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.home },
  ];
}

export default function Home() {
  return <></>;
}
