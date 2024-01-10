// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import { useLocomotiveScroll } from "react-locomotive-scroll";

// const LocomotiveScrollProvider = ({ children }) => {
//   const containerRef = useRef(null);
//   const { scroll, ProvideScroll } = useLocomotiveScroll();

//   useEffect(() => {
//     if (!scroll.instance) {
//       const newScroll = new LocomotiveScroll({
//         el: containerRef.current,
//         smooth: true,
//         lerp: 0.07,
//       });

//       scroll.setScroll(newScroll);

//       return () => {
//         newScroll.destroy();
//       };
//     }
//   }, [scroll]);

//   return (
//     <ProvideScroll containerRef={containerRef}>
//       <div data-scroll-container ref={containerRef}>
//         {children}
//       </div>
//     </ProvideScroll>
//   );
// };

// export default LocomotiveScrollProvider;
