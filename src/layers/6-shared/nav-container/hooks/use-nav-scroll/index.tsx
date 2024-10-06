"use client";
import { useState, useEffect } from "react";

export const useNavScroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible((prevVisible) => {
        const visible =
          prevScrollPos > currentScrollPos || currentScrollPos < 10;

        setPrevScrollPos(currentScrollPos);
        return visible;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return { visible };
};
