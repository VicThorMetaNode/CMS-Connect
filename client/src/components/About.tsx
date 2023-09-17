// interface HeaderProps {
//   title: string;
//   colorTitle: string;
// }
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

export const About = () => {
  // const simpleRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(simpleRef.current, {
  //     duration: 1.5,
  //     x: 200,
  //     backgroundColor: "#560563",
  //     borderRadius: "20%",
  //     border: "5px solid white",
  //     ease: "bounce",
  //   });

  //   const elements = gsap.utils.toArray(".vertical_item");
  //   elements.forEach((el) => {
  //     gsap.to(el, {
  //       duration: 1,
  //       opacity: 0,
  //       delay: 1.5,
  //       y: "random(-200, 200)",
  //       stagger: 0.25,
  //     });
  //   });
  // }, []);

  return (
    <>
      {/* <div className="block bg-green-500 h-20 w-20" ref={simpleRef}>
        <p>move</p>
      </div>
      <div className="flex gap-20">
        <div className="block bg-yellow-500 h-20 w-20 vertical_item">
          <p>out</p>
        </div>
        <div className="block bg-purple-500 h-20 w-20 vertical_item">
          <p>in</p>
        </div>
      </div> */}

      <section id="vertical" className="h-[200vh] w-[100vw] ">
        <div className="w-[95%] m-auto">
          <div className="vertical_content  flex justify-center items-start h-[100%]">
            <div className="col col_left h-[100%] border-l-4 border-alt-pink border-solid w-[50%] bg-yel">
              <h1 className="font-main text-5xl vertical_heading font-bold pl-5 leading-none py-5 ">
                <span className="block uppercase">About</span>
                <span className="block uppercase">smooth</span>
                <span className="text-pink block uppercase">GK</span>
              </h1>
            </div>
            <div className="col col_right w-[40%]">
              <div className="vertical_item">
                <h2 className="font-changa text-2xl text-alt-pink uppercase leading-normal">
                  Smooth Scroll Lenis
                </h2>
                <p className="font-sub text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="vertical_item">
                <h2 className="font-changa text-2xl text-alt-pink uppercase leading-normal">
                  Smooth Scroll Lenis
                </h2>
                <p className="font-sub text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="vertical_item">
                <h2 className="font-changa text-2xl text-alt-pink uppercase leading-normal">
                  Smooth Scroll Lenis
                </h2>
                <p className="font-sub text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="vertical_item">
                <h2 className="font-changa text-2xl text-alt-pink uppercase leading-normal">
                  Smooth Scroll Lenis
                </h2>
                <p className="font-sub text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
