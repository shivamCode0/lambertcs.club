import React from "react";
import Image, { type StaticImageData } from "next/image";
import Meta from "@/components/Meta";
import Link from "next/link";

export default function CompetitionsPage() {
  return (
    <div className="container mt-3">
      <Meta title="Competitions - Lambert CS Club" />
      <h1 className="text-center mb-5">Competitions</h1>
    </div>
  );
}
