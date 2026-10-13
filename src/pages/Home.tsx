import Hero from "../components/home-sections/Hero";
import FeaturedProperties from "../components/home-sections/FeaturedProperties";
import OverView from "../components/home-sections/OverView";
import Ownership from "../components/home-sections/Ownership";
import WhyDubai from "../components/home-sections/WhyDubai";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      <OverView />
      <Ownership />
      <WhyDubai />
    </div>
  );
};

export default Home;
