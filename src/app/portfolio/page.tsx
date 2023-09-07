"use client";
import Underline from "@/components/svgComps/Underline";

import "./portfolio.scss";
import PortfolioItem from "@/components/portfolioItem/PortfolioItem";
import portfolioItems from "@/utils/Data/PortfolioItem";
import { useEffect, useState } from "react";
type Props = {};

export default function Portfolio({}: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all"); // Initialize with "all" to show all items
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const handleSelectedCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    const category = e.currentTarget.getAttribute("value");
    setSelectedCategory(category || ""); // Set the selected category
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredItems(() => {
        return selectedCategory === "all"
          ? portfolioItems
          : portfolioItems.filter(
              (item) => item.portfolioType === selectedCategory
            );
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <Underline />
      <ul className="portfolioOptions">
        <li value="all" onClick={handleSelectedCategory}>
          All
        </li>
        <li value="Certificate" onClick={handleSelectedCategory}>
          Certfications
        </li>
        <li value="Project" onClick={handleSelectedCategory}>
          Project
        </li>
        <li value="Badge" onClick={handleSelectedCategory}>
          Badge
        </li>
      </ul>
      <div className="portfolioItemWrapper">
        {filteredItems.map((item, index) => (
          <PortfolioItem
            key={index}
            portfolioType={item.portfolioType}
            certificateLink={item.certificateLink}
            githubLink={item.githubLink}
            techStack={item.techStack}
            imgSrc={item.imgSrc}
            heading={item.heading}
            classV={`portfolioItem ${
              selectedCategory !== "all" &&
              item.portfolioType !== selectedCategory
                ? "hidden"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
