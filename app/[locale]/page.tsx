import dynamic from "next/dynamic";
import Fleet from "@/components/Fleet";
import HeroSlider from "@/components/Hero";

const Why = dynamic(() => import("@/components/Why"), { ssr: true });
const Highlights = dynamic(() => import("@/components/Highlights"), { ssr: true });
const Steps = dynamic(() => import("@/components/Steps"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Destinations = dynamic(() => import("@/components/Destinations"), { ssr: true });

export default async function Home({
  params
}:{
  params: Promise<{locale:string}>
}) {

  const {locale} = await params;

  return (
    <main className="w-full overflow-hidden">
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