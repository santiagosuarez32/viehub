
import Fleet from "@/components/Fleet";
import HeroSlider from "@/components/Hero";
import Why from "@/components/Why";
import Highlights from "@/components/Highlights";
import Steps from "@/components/Steps";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";

export default function Home() {
  return (
    <main className="w-full overlofw-hidden">
      <HeroSlider />
      <Fleet />
      <Why />
      <Highlights />
      <Steps />
      <Services />
      <Destinations />
      
    </main>
  );
}