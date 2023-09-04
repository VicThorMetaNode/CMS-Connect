// Import FC (FunctionalComponent) type
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Oups... </p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-3 py-10">
          {data.projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
