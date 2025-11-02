import AboutSection from "./component/AboutMe/AboutSection";
import AboutSwiper from "./component/AboutSwiper/AboutSwiper";
import DemoSection from "./component/demoSection/DemoSection";
import HeroSection from "./component/herosection/HeroSection";
import Nav from "./component/nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <DemoSection />
      <AboutSection />
      <AboutSwiper />
    </div>
  );
}
