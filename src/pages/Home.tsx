import Hero from "../components/home-sections/Hero";
import FeaturedProperties from "../components/home-sections/FeaturedProperties";
import OverView from "../components/home-sections/OverView";
import Ownership from "../components/home-sections/Ownership";
import WhyDubai from "../components/home-sections/WhyDubai";
import Properties from "../components/home-sections/Properties";
import Faqs from "../components/home-sections/Faqs";
import CTA from "../components/home-sections/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <OverView />
      <Ownership />
      <WhyDubai />
      <Properties />
      <Faqs />
      <CTA />
    </div>
  );
};

export default Home;
