"use client"

import Footer from "@/components/footer";
import FeaturesSection from "@/components/homepage/features";
import HeroSection from "@/components/homepage/hero";
import SectionCard from "@/components/homepage/section";

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturesSection />
      <SectionCard />
    </main>
  );
}
