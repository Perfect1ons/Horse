import { IAccordion } from "@/types/accordion";
import { IBanner } from "@/types/banner";
import { IImpressions } from "@/types/impression";
import ky from "ky";

const design = ky.create({ prefixUrl: process.env.STRAPI, cache: "no-cache" });

export const getBannerTours = (): Promise<IBanner> => {
  return design.get("guides/?populate=image").json();
};

export const getAccordions = (): Promise<IAccordion> => {
  return design.get("accordions").json();
};

export const getImpressions = (): Promise<IImpressions> => {
  return design.get("impressions/?populate=image").json();
};
