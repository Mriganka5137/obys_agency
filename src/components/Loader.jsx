import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const Loader = () => {
  const [val, setVal] = useState(0);
  const container = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          return 100;
        }
      });
    }, 25);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useGSAP(
    () => {
      gsap.from(".line h1", {
        y: 150,
        stagger: 0.25,
        delay: 0.5,
        duration: 0.6,
      });
    },
    { scope: container }
  );
  return (
    <div
      className="fixed z-50 w-full h-full px-40 font-medium text-white py-60 bg-gray-950 font-plain"
      ref={container}
    >
      <div className="flex items-center gap-5 line ">
        <div className="flex justify-start gap-3 mr-5 text-5xl font-silkserifLightItalic">
          <h3 className="text-right w-28">{val}</h3>
          <h4>- 100</h4>
        </div>
        <h1 className="">YOUR</h1>
      </div>
      <div className="line">
        <h1>WEB EXPERIENCE</h1>
      </div>
      <div className="line">
        <h1>IS LOADING RIGHT NOW</h1>
      </div>
    </div>
  );
};

export default Loader;
