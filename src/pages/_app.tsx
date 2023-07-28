import React from "react";
import { AppProps } from "next/app";
import TopNavBar from "@/components/TopNavBar";
import "@/scss/main.scss";
import "@/scss/other.scss";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Meta {...{ title: "Lambert CS Club", description: "The official website of the Computer Science Club at Lambert High School in Suwanee, GA" }} />
      <TopNavBar />

      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
