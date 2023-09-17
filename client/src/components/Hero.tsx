import { FaGithubAlt } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <section id="vertical" className="h-[100vh] w-[100vw] bg-slate-950  ">
        <div className="relative h-[100vh] w-[95%] m-auto  2xl:w-[80%]">
          <div className="flex flex-col justify-center h-[80%] leading-snug">
            <div className="my-auto">
              <div className="flex justify-end">
                <h1 className="font-main text-12xl uppercase text-normal text-white">
                  girl<span className="italic text-alt-pink">e</span>
                  <span className="italic text-alt-pink">e</span>k
                </h1>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-start">
                  <img
                    src="/cube.png"
                    alt="a jolly cube"
                    className="w-[150px] h-[150px] "
                  />
                </div>
                <div className="flex flex-col items-end leading-tight">
                  <h2 className="font-abel font-extrabold text-6xl uppercase text-white ">
                    Leading women to <span className="text-alt-pink">tech</span>
                  </h2>{" "}
                  <h3 className="font-sub font-normal text-md uppercase">
                    @2023 blockchainsucks
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-right "></div>
          </div>

          <div className="absolute bottom-10 left-0 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-8 border-l-2 border-alt-pink border-solid items-center p-5">
                <div className="font-ele font-bold text-2xl leading-none pl-2 ">
                  <p>
                    scroll <br /> to explore
                  </p>
                </div>
                <div className="max-w-sm">
                  <p className="font-abel font-normal uppercase text-lg leading-none pl-2 ">
                    <span className="font-bold">CAUTION:</span>
                    This website is a demo based on a real project and isn't
                    fully secure. Explore freely but avoid sharing sensitive
                    info and be respectful.
                  </p>
                </div>
              </div>
              <div>
                <button className="btn glass flex justify-center items-center gap-24">
                  <FaGithubAlt size={"1.5rem"} />
                  check it out on github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
