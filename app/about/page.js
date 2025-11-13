import JourneySection from "@/components/about/JourneySection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import ValuesSection from "@/components/about/ValuesSection";
import HeroSection from "@/components/about/HeroSection";

export const metadata = {
  title: "About Us - JASTUTE Solutions Story & Mission",
  description: "Learn about JASTUTE Solutions - a Kenyan creative and technology company founded in 2023. Our mission, vision, values, and journey in digital design and development.",
  keywords: ["about JASTUTE Solutions", "Kenya digital agency", "creative technology company", "Justus founder", "company mission vision"],
  openGraph: {
    title: "About JASTUTE Solutions - Our Story & Mission",
    description: "Discover the story behind JASTUTE Solutions, our mission to help brands grow, and our core values that drive everything we do.",
    url: '/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#E0F0DF]">
      <HeroSection />
      <JourneySection />
      <MissionVisionSection />
      <ValuesSection />
    </div>
  );
}