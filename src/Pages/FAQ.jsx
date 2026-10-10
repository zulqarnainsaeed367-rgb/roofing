import FaqHero from "../Component/FQComponent/FaqHero";
import RoofingFaqSection from "../Component/FQComponent/RoofingFaqSection";
import RoofingWarrantyMaterialFaqs from "../Component/FQComponent/RoofingWarrantyMaterialFaqs";
import WhyChooseAbsolute from "../Component/FQComponent/WhyChooseAbsolute";

export default function FAQ() {
  return (
    <section >
      <FaqHero/>
      <RoofingFaqSection/>
      <RoofingFaqSection/>
      <RoofingWarrantyMaterialFaqs/>
      <WhyChooseAbsolute/>
    </section>
  )
}
