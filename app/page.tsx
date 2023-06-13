import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/*<AboutSectionTwo />*/}
      <Team />
      {/*<Features />*/}
      {/*<Video />*/}
      {/*<Brands />*/}
      {/*<Testimonials />*/}
      {/*<Pricing />*/}
      {/*<Blog />*/}
      {/*<Contact />*/}
    </>
  );
}
