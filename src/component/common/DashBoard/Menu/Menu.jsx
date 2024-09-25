import "./Menu.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { useRef, useState } from "react";
import { Sec_Modules } from "../../../../DB/MenuSetUp";
import { useSelector } from "react-redux";
import {
  decryptAsync,
  encryptAsync,
} from "../../../../assets/Common JS/Commonfn";

const responsive = {
  0: { items: 1 },
  220: { items: 1.2 },
  420: { items: 2.3 },
  620: { items: 3.5 },
  1024: { items: 5 },
  1440: { items: 7.8 },
};

const Menu = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const { user, isLoding, error } = auth;


  const handleNavigate = async (path, code) => {
    const encryptedCode = await encryptAsync(code, user?.TYPEOFUSER);
    navigate(path + encryptedCode);
  };

  const items =
    Sec_Modules &&
    Sec_Modules.filter((item) => item.Typeofuser === user?.TYPEOFUSER) // Filter based on user type
      .sort((a, b) => a.Display_Order - b.Display_Order) // Sort by display_order
      .map((item, index) => (
        <div
          onClick={() => {
            handleNavigate(item.path, item.Module_Code);
          }}
          key={index}
          className="IconStyle"
        >
          <div className="IconDivStyle">
            <p style={{ fontSize: "30px" }}>
              <item.Img_Src />
            </p>
            {item.Module_Name}
          </div>
        </div>
      ));

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

export default Menu;
