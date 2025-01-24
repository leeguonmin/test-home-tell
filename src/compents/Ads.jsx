import React from "react";
import "./cssall/Ads.css";

const Ads = () => {
  return (
    <div className="ads-container">
      <div className="ad-banner" style={{ width: "1000px", height: "400px" }}>
        <p>광고 배너 1</p>
      </div>
      <div className="ad-banner" style={{ width: "1000px", height: "400px" }}>
        <p>광고 배너 2</p>
      </div>
    </div>
  );
};

export default Ads;
