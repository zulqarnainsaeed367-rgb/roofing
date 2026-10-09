import AboutHero from "../Component/Aboutcomponent/AboutHero";
import CommunityGiving from "../Component/Aboutcomponent/CommunityGiving";
import CoreValues from "../Component/Aboutcomponent/CoreValues";
import FeaturedWorks from "../Component/Aboutcomponent/FeaturedWorks";
import OurLegacy from "../Component/Aboutcomponent/OurLegacy";
import OurStory from "../Component/Aboutcomponent/OurStory";
import Testimonials from "../Component/Homecomponent/Testimonial";

export default function AboutUs() {
  return (
    <div className="bg-rcs-surface font-sans text-rcs-charcoal">
      <AboutHero />
      <OurStory />
      <OurLegacy />
      <CoreValues />
      <CommunityGiving/>
      <FeaturedWorks/>
      <Testimonials/>
    </div>
  )
}
