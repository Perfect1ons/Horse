import { getAccordions, getBannerTours, getImpressions } from "@/api/request";
import Accordion from "@/components/Accordion/Accordion";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Catalog from "@/components/Catalog/Catalog";
import Certification from "@/components/Certification/Certification";
import Services from "@/components/Services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Дари Душой | Магазин впечатлений!",
};

export default async function Home() {
  const bannerTours = await getBannerTours();
  const accordionData = await getAccordions();
  const catalogData = await getImpressions();

  

  return (
    <>
      <BannerSlider tours={bannerTours} />
      <Services />
      <Catalog impressions={catalogData.data} />

      <Certification />
      <Accordion accordion={accordionData} />
    </>
  );
}
