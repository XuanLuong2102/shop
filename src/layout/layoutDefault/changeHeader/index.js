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

  if (header) {
    header.classList.add("shrink");
    header.classList.remove("sticky");
  } else {
  }
};
export const HeaderSticky = () => {
  const header = document.querySelector(".layout-default__header");

  // Kiểm tra nếu header tồn tại trước khi thao tác với classList
  if (header) {
    header.classList.add("sticky");
    header.classList.remove("shrink");
  }
};
