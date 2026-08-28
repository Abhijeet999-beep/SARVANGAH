import Hero from "@/components/Hero";
import Pathways from "@/components/Pathways";
import Philosophy from "@/components/Philosophy";
import ShivaTattva from "@/components/ShivaTattva";
import DailySadhana from "@/components/DailySadhana";
import Wisdom from "@/components/Wisdom";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

import { heroContent } from "@/content/hero";
import { pathwaysContent } from "@/content/pathways";
import { philosophyContent } from "@/content/philosophy";
import { shivaTattvaContent } from "@/content/shivaTattva";
import { dailySadhanaContent } from "@/content/dailySadhana";
import { wisdomContent } from "@/content/wisdom";
import { communityContent } from "@/content/community";
import { footerContent } from "@/content/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero {...heroContent} />

        <Pathways {...pathwaysContent} />

        <Philosophy {...philosophyContent} />

        <ShivaTattva {...shivaTattvaContent} />

        <DailySadhana {...dailySadhanaContent} />

        <Wisdom {...wisdomContent} />

        <Community {...communityContent} />
      </main>

      <Footer {...footerContent} />
    </>
  );
}