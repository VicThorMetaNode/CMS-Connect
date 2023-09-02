interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="card w-96 bg-gradient-to-br from-indigo-300 to-purple-400 shadow-xl flex items-center text-center">
        <div className="card-body">
          <h5 className="text-black font-semibold">{project.name} </h5>
          <h6 className="text-vamp font-semibold ">
            Status: <span className="italic font-normal">{project.status}</span>
          </h6>
          <a
            href=""
            className="btn glass text-vamp font-semibold hover:glass duration-300 hover:scale-90"
          >
            View
          </a>
        </div>
      </div>
    </>
  );
}
