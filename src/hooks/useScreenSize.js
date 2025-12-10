import { useState, useEffect } from "react";

const useScreenSize = (breakpoint = 500) => {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setScreenSize(mediaQuery.matches);

    const handleChange = (event) => {
      setScreenSize(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return screenSize;
};

export default useScreenSize;
