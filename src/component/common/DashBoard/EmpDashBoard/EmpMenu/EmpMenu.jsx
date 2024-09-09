import "./EmpMenu.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import { useRef, useState } from "react";

const menuData = [
  {
    tittle: "Workforce Management",
    icon: <IoBagHandle />,
    path: "./wfm",
  },
  {
    tittle: "Workforce Management",
    icon: <FaFilter />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <FaClock />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <FaMoneyBill />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <IoIosColorPalette />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <GiSkills />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <IoAirplaneSharp />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <FaCalculator />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <FaHandshakeAngle />,
    path: "/",
  },
  {
    tittle: "Workforce Management",
    icon: <IoBagHandle />,
    path: "/",
  },
];

const responsive = {
  0: { items: 1 },
  220: { items: 1.2 },
  420: { items: 2.3 },
  620: { items: 3.5 },
  1024: { items: 5 },
  1440: { items: 7 },
};

const items =
  menuData &&
  menuData.map((item, index) => (
    <Link to={item.path} key={index} className="IconStyle">
      <div className="IconDivStyle">
        <p style={{ fontSize: "30px" }}>{item.icon}</p>
        {item.tittle}
      </div>
    </Link>
  ));

const EmpMenu = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <div className="process-icons">
        <AliceCarousel
          items={items}
          ref={carouselRef}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          mouseTracking
        />
        {activeIndex !== items.length - 7 && (
          <a
            aria-label="next"
            className="z-50"
            onClick={slideNext}
            style={{
              position: "absolute",
              right: 20,
              transform: "translateX(50%) rotate(90deg)",
              cursor: "pointer",
            }}
          >
            <FaAngleUp size={35} color="white" />
          </a>
        )}

        {activeIndex !== 0 && (
          <a
            aria-label="next"
            className="z-50"
            onClick={slidePrev}
            style={{
              position: "absolute",
              left: -15,
              transform: "translateX(50%) rotate(90deg)",
              cursor: "pointer",
            }}
          >
            <FaAngleDown size={35} color="white" />
          </a>
        )}
      </div>
    </>
  );
};

export default EmpMenu;
