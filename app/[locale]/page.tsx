import Fleet from "@/components/Fleet";
import HeroSlider from "@/components/Hero";
import Why from "@/components/Why";
import Highlights from "@/components/Highlights";
import Steps from "@/components/Steps";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";

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