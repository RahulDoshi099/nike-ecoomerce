import React from "react";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  //   console.log("🚀 ~ file: Hero.jsx:4 ~ Hero ~ heroapi:", heroapi)
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path"></div>
        <div className="">
          <div className="">
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            <button>{btntext}</button>
            {/* <div className=""></div> */}
            <div className=""></div>
          </div>
          <div className="">
            <img src={img} alt="hero-img/img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
