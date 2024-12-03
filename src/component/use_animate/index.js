import { useEffect } from "react";

export const useAnimateOnScroll = (props) => {
  const { classname, addClass, Scroll } = props;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${classname}`);
      if (element) {
        if (window.scrollY > Scroll) {
          element.classList.add(addClass);
        } else {
          element.classList.remove(addClass);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [classname, addClass, Scroll]); // Add dependencies to re-run when they change
};
