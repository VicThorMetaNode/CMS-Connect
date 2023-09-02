import AddCoachModal from "../components/AddCoachModal";
import { Coach } from "../components/Coach";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Projects />
      <AddCoachModal />
      <Coach />
    </>
  );
};

export default Home;
