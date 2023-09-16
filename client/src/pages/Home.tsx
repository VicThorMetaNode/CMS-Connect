// import AddCoachModal from "../components/AddCoachModal";
// import AddCoachModal from "../components/AddCoachModal";
import AddProjectModal from "../components/AddProjectModal";
import { Coach } from "../components/Coach";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <section className="w-full h-[100%]">
        <div className="max-w-980  mx-auto  w-full px-2 md:w-[80%] md:px-0">
          <Projects />
          {/* <AddCoachModal /> */}
          <AddProjectModal />

          <Coach />
        </div>
      </section>
    </>
  );
};

export default Home;
