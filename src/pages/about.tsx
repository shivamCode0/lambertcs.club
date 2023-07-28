import React from "react";
import Image, { type StaticImageData } from "next/image";
import Meta from "@/components/Meta";
import Link from "next/link";

export default function OfficersPage() {
  return (
    <div className="container mt-3">
      <Meta title="About Lambert CS Club" />
      <h1 className="text-center mb-5">About Lambert CS Club</h1>
    </div>
  );
}
