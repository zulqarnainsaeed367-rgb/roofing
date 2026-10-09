import Hero from "../Component/Homecomponent/Herohome";
import ServicesIntro from "../Component/Homecomponent/ServicesIntro";
import ServicesSection from "../Component/Homecomponent/ServicesSection";
import Testimonials from "../Component/Homecomponent/Testimonial";
import WhatWeDo from "../Component/Homecomponent/whatdo";
import WhyChooseRoofing from "../Component/Homecomponent/WhyChooseRoofing";

export default function Home() {
  return (
    <section>
     <Hero/>
     <WhatWeDo/>
     <ServicesIntro/>
     < ServicesSection/>
     <WhyChooseRoofing/>
     <Testimonials/>
     
    </section>
  )
}
