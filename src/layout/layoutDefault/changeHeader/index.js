import { useEffect } from "react";

export const ChangeHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".layout-default__header");
      if (window.scrollY > 30) {
        header.classList.add("shrink");
        header.classList.remove("sticky");
      } else {
        header.classList.remove("shrink");
        header.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export const HeaderShrink = () => {
  const header = document.querySelector(".layout-default__header");
  const sticky = document.querySelector(".sticky");
  
  if (sticky) {
  } else {
    header.classList.add("shrink");
    header.classList.remove("sticky");
  }
};