import React from "react";
import { AppProps } from "next/app";
import TopNavBar from "@/components/TopNavBar";
import "@/scss/main.scss";
import "@/scss/other.scss";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{ backgroundColor: "var(--cursor-color)" }}
        outerStyle={{ border: "2px solid #A0A0A0" }}
        trailingSpeed={6}
      />
      <Meta {...{ title: "Lambert CS Club", description: "The official website of the Computer Science Club at Lambert High School in Suwanee, GA" }} />
      <TopNavBar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
