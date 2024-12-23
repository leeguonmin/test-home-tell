import React, { useEffect } from "react";
import "./MainBanner.css";

const MainBanner = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".banner-image");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    const activateSlide = (index) => {
      images[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex = index;
      images[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    };

    document.querySelector(".next").addEventListener("click", () => {
      activateSlide((currentIndex + 1) % images.length);
    });

    document.querySelector(".prev").addEventListener("click", () => {
      activateSlide((currentIndex - 1 + images.length) % images.length);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => activateSlide(index));
    });
  }, []);

  return (
    <div className="main-banner">
      <div className="banner-image active">배너 이미지1</div>
      <div className="banner-image">배너 이미지2</div>
      <div className="banner-image">배너 이미지3</div>
      <button className="prev">이전</button>
      <button className="next">다음</button>
      <div className="slide-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default MainBanner;
