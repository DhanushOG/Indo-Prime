import MotionWrapper from "../components/MotionWrapper";

import Hero from "../components/Hero";
import About from "../components/About";
import VisionMission from "../components/VisionMission";
import Services from "../components/Services";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Clients />
    </>
  );
}
