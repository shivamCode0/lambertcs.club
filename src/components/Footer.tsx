import Link from "next/link";
import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "@/img/logo.svg";

export default function Footer() {
  return (
    <div style={{ position: "absolute", bottom: "0", width: "100%", height: "6rem" }}>
      <footer className="container d-flex flex-wrap justify-content-around align-items-center py-3 border-top">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Image src={logo} alt="" width="30" height="30" className="d-inline-block align-top me-2" />
          </Link>
          <div>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Lambert CS Club</span>
            <br />
            <span className="mb-3 mb-md-0 text-muted" style={{ fontSize: "0.75em" }}>
              Website made by Shivam
            </span>
          </div>
        </div>

        <ul className="nav col-md-6 list-unstyled d-flex mb-3 mb-md-0 justify-content-center" style={{ flexWrap: "nowrap" }}>
          <li>
            <a href="mailto:shivam@shivam.pro" className="text-muted no-a">
              <HiMail className="me-1" />
              officers@lambertcs.club (not yet)
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://github.com/shivamCode0/lambert-cs-club">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
