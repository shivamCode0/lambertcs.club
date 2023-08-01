import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import logo from "@/img/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function TopNavBar() {
  const Router = useRouter();
  return (
    <Navbar expand="md" variant="dark" className="px-2 pt-2 text-center topnavbar" style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="container-md">
        <Navbar.Brand href="/" as={Link} className="mr-auto">
          <Image src={logo} alt="" width="30" height="30" className="d-inline-block align-top me-2" />
          <span className="fw-bold fh">Lambert CS Club</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ position: "absolute", right: "1em", top: "0.5em" }} />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="ms-4">
            {Object.entries({
              Home: "/",
              Competitions: "/competitions",
              Officers: "/officers",
            }).map(([k, v]) => (
              <Nav.Link href={v} as={Link} key={k} className="mx-2" active={v === Router.pathname}>
                {k}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
