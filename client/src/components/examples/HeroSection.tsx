import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return <HeroSection onSelectProfile={(profile) => console.log("Selected profile:", profile)} />;
}
