import { About } from "../components/About";
import { AnimationTest } from "../components/AnimationTest";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      {/* <section className="w-full h-[100%] ">
        <div className="max-w-980  mx-auto  w-full px-2 md:w-[80%] md:px-0 bg-pink-600"> */}
      <section>
        <div>
          <Hero />
          <About />
          <AnimationTest />
        </div>
      </section>
    </>
  );
};

export default Home;
