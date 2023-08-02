import React from "react";
import Image from "next/image";
import banner from "@/img/bg.jpg";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { MdCardTravel, MdBookmarks, MdAccountCircle } from "react-icons/md";
import { SiGroupme } from "react-icons/si";
import Typed from "react-typed";

export default function index() {
  return (
    <div>
      <div className="position-relative py-1 py-5 mt-5">
        <Image
          src={banner}
          alt="banner"
          fill
          className="hero-image"
          // placeholder="blur"
          style={{
            zIndex: -69,
            objectFit: "cover",
            filter: "blur(calc(30px + 3vw))",
            opacity: 1,
          }}
        />
        <div
          className="container col-xl-10 col-xxl-8 px-4 py-6"
          style={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="divthingclockicontime"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AiFillClockCircle
                size={20}
                color="var(--grays-gray-alpha-8, rgba(255, 255, 255, 0.25))"
              />
              <span className="spanthing">
                Wednesdays at 7:45 AM in room 1517
              </span>
            </div>
          </div>
          <h1 className="main-header text-center hover-effect">
            <Typed
              strings={["Lambert CS Club"]}
              typeSpeed={60}
              startDelay={100}
            />
          </h1>
          <p
            className="display-5 text-center"
            style={{
              fontSize: "32px",
              fontWeight: "300",
              paddingBottom: "70px",
            }}
          >
            Where we build cool things and nerd about code.
          </p>
          <div className="mouse" />
        </div>
      </div>
      <div
        className="container"
        style={{
          // height: "100vh",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container px-4 text-center" id="featured-3">
          {/* <h2 className="pb-2 border-bottom">Learn More</h2> */}
          <div className="row g-4 pt-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 p-2">
                <SiGroupme size={36} color="var(--bs-body-bg)" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Join the GroupMe</h3>
              <p>
                All of our announcements and updates are posted in our GroupMe.
                Join the GroupMe to stay up to date with all of our events and
                more.
              </p>

              <a
                href="https://groupme.com/join_group/62533963/ulNkn9co"
                className="icon-link"
              >
                Join the GroupMe
                <BsChevronRight />
              </a>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <MdCardTravel size={36} color="var(--bs-body-bg)" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Weekly Meetings</h3>
              <p>
                We meet every week on <b>Wednesdays</b> at <b>7:45 AM</b> in{" "}
                <b>Room 1517</b>. We will be discussing upcoming events,
                competitions, and more. We will have lessons, projects, and more
                in meetings.
              </p>
              <Link href="/officers" className="icon-link">
                Add to Calendar
                <BsChevronRight />
              </Link>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <MdAccountCircle size={36} color="var(--bs-body-bg)" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Meet the Officers</h3>
              <p>For the 2023 to 2024 school year, the officers are.</p>
              <Link href="/officers" className="icon-link">
                Go to Officers Page
                <BsChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
