import React from "react";
import "./Features.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem"></div>
      <span className="featureTitle">Revanue</span>
      <div className="featureContainer">
        <span className="featureMoney">$22</span>
        <span className="featureRate">
          -11 <ArrowDownwardOutlinedIcon className="featureIcon negative" />
        </span>
      </div>
      <span className="featureSub">Compared to last month</span>
    </div>
  );
}
