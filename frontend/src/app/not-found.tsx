import NotFounded from "@/components/NotFound/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена | Дари Душой",
};

const NotFound = () => {
  return <NotFounded/>;
};

export default NotFound;
