import React from "react";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  //   console.log("🚀 ~ file: Hero.jsx:4 ~ Hero ~ heroapi:", heroapi)
  return (
    <>
      <div>
        <div></div>
        <div>
          <div>
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            <button>{btntext}</button>
            {/* <div></div> */}
            {/* <div></div> */}
          </div>
          <div>
            <img src={img} alt="hero-img/img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
