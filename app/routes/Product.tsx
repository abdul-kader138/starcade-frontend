import Slider from "~/blocks/home/Slider";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";
import Section from "~/blocks/home/Section";
import { Helper } from "~/utils/helper";
import Commodorian from "~/blocks/home/Commodorian";
import ContactSection from "~/blocks/home/ContactSection";
import News from "~/blocks/home/News";
import Faq from "~/blocks/home/Faq";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ProductSlider from "~/blocks/product/ProductSlider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.product },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.product },
  ];
}

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { gameSections } = new Helper();
  return (
    <>
      <ProductSlider />
    </>
  );
}
