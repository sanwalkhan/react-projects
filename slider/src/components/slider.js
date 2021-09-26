import React, { useState } from "react";
import Data from "./data";

export const Slider = (slides) => {
  const [images, setimages] = useState(0);
  const length = slides.length;

  const nextslide = () => {
    setimages(images === length - 1 ? 0 : images + 1);
  };

  const prevslide = () => {
    setimages(images === 0 ? length - 1 : images - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <button className="left-arrow" onClick={prevslide}>
        Prev
      </button>
      <button className="right-arrow" onClick={nextslide}>
        Next
      </button>
      {Data.map((slide, i) => {
        return (
          <div className={i === images ? "slide active" : "slide"} key={i}>
            {i === images && <img src={slide.image} alt="" className="image" />}
          </div>
        );
      })}
    </div>
  );
};
