import React from "react";
import Image, { type StaticImageData } from "next/image";
import Meta from "@/components/Meta";
import Link from "next/link";

export default function OfficersPage() {
  return (
    <div className="container mt-3">
      <Meta title="23-24 Officers - Lambert CS Club" />
      <h1 className="text-center mb-5">Officers for the 2023-2024 School Year</h1>
    </div>
  );
}
