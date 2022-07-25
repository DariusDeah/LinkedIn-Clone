import { FiberManualRecordRounded, InfoRounded } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function newsArticle(heading: string, subtitle: string) {
  return (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordRounded />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoRounded />
      </div>
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Pizza is good", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
      {newsArticle("Darius is cool", "Top News - 999 readers")}
    </div>
  );
}

export default Widgets;
