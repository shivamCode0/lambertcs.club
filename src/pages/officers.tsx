import React from "react";
import Image, { type StaticImageData } from "next/image";
import Meta from "@/components/Meta";
import Link from "next/link";
import { officers } from "@/img/officers/officers";

export default function OfficersPage() {
  return (
    <div className="container mt-3">
      <Meta title="23-24 Officers - Lambert CS Club" />
      <h1 className="text-center mb-5">Officers for the 2023-2024 School Year</h1>
      <hr />
      <div className="row mt-5" style={{ justifyContent: "center" }}>
        {officers.map((v) => (
          <div className="col-12 col-md-6 col-lg-4" key={v.name}>
            <div className="card mb-3" key={v.name}>
              <div className="row g-0">
                <div className="col-6">
                  <Image src={v.img} alt={v.name} className="img-fluid" />
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title">{v.name}</h5>
                    <p className="card-text">{v.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
