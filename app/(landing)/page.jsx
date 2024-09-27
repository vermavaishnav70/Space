'use client';
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./_components/hero-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import SeventhSection from "./_components/seventh-section";
import GetStartedFree from "./_components/eighth-section";
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

    </div> );
}
 
export default LandingPage;