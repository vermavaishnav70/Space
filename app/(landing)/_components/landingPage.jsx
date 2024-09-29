"use client";
import Navbar from "./navbar/navbar";
import HeroSection from "./hero-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";
import Footer from "@/components/footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SeventhSection />
        <GetStartedFree />
        <Footer />
    </div>
  );
};

export default LandingPage;
