import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const page1 = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(page1.current, {
        y: 1200,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: page1 }
  );

  return (
    <div
      className="w-full h-screen text-white bg-red-400 page1"
      ref={page1}
    ></div>
  );
};

export default Page1;
