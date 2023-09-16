// interface HeaderProps {
//   title: string;
//   colorTitle: string;
// }

export const Header = () => {
  return (
    <>
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
