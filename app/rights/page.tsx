import type { Metadata } from "next";
import RightsPage from "@/components/RightsPage";
import { rightsPageContent } from "@/content/rightsPage";

export const metadata: Metadata = {
  title: rightsPageContent.meta.title,
  description: rightsPageContent.meta.description,
};

export default function RightsRoute() {
  return <RightsPage />;
}
