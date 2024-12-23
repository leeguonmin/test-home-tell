import React, { useEffect } from "react";
import "../cssall/Banner.css";

// const MainBanner = () => {
//   useEffect(() => {
//     const images = document.querySelectorAll(".banner-image");
//     const dots = document.querySelectorAll(".dot");
//     let currentIndex = 0;

//     const activateSlide = (index) => {
//       images[currentIndex].classList.remove("active");
//       dots[currentIndex].classList.remove("active");
//       currentIndex = index;
//       images[currentIndex].classList.add("active");
//       dots[currentIndex].classList.add("active");
//     };

//     document.querySelector(".next").addEventListener("click", () => {
//       activateSlide((currentIndex + 1) % images.length);
//     });

//     document.querySelector(".prev").addEventListener("click", () => {
//       activateSlide((currentIndex - 1 + images.length) % images.length);
//     });

//     dots.forEach((dot, index) => {
//       dot.addEventListener("click", () => activateSlide(index));
//     });
//   }, []);

//   return (
//     <div className="main-banner">
//       <div className="banner-image active">배너 이미지1</div>
//       <div className="banner-image">배너 이미지2</div>
//       <div className="banner-image">배너 이미지3</div>
//       <button className="prev">이전</button>
//       <button className="next">다음</button>
//       <div className="slide-dots">
//         <span className="dot active"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div>
//     </div>
//   );
// };

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "./image/CK_ti375a38706082843.jpg", alt: "배너 이미지 1" },
    { src: "./image/ti155t001114.jpg", alt: "배너 이미지 2" },
    { src: "./image/ta0169t000687.jpg", alt: "배너 이미지 3" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="main-banner">
      <div className="banner-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            className={`banner-image ${index === currentIndex ? "active" : ""}`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        <img src="/icons/prev.png" alt="이전" />
      </button>
      <button className="next" onClick={nextSlide}>
        <img src="/icons/next.png" alt="다음" />
      </button>
      <div className="slide-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MainBanner;
