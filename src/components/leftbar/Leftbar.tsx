"use client";

import React, { useEffect, useState } from "react";

import "./leftbar.scss";
import Button from "../button/Button";
import About from "../svgComps/About";
import Resume from "../svgComps/Resume";
import Portfolio from "../svgComps/Portfolio";
import Blog from "../svgComps/Blog";
import Contact from "../svgComps/Contact";
import Link from "next/link";
type Props = {};

export default function Leftbar({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Define the class name based on the scroll state

  const containerClassName = isScrolled ? "scrolled" : "";
  return (
    <div className={`leftbar ${containerClassName}`} style={{ color: "white" }}>
      <Link className="link" href="/">
        <Button title="ABOUT" Icon={About} />
      </Link>
      <Link className="link" href="/resume">
        <Button title="RESUME" Icon={Resume} />
      </Link>
      <Link className="link" href="/portfolio">
        <Button title="PORTFOLIO" Icon={Portfolio} />
      </Link>
      <Link className="link" href="/blog">
        <Button title="BLOG" Icon={Blog} />
      </Link>
      <Link className="link" href="/contact">
        <Button title="CONTACT" Icon={Contact} />
      </Link>
    </div>
  );
}
