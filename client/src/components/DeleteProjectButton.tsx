import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

interface Project {
  id: string;
}

interface ProjectInfoProps {
  projectId: Project;
}

const DeleteProjectButton: React.FC<ProjectInfoProps> = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId.id },
    onCompleted: () => {
      navigate("/");
      toast.info("Project deleted successfully!", {
        position: "top-right",
        autoClose: 2000, // You can adjust the duration as needed
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
    onError: (error) => {
      toast.error(`Error deleting project: ${error.message}`);
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent any default behavior
    deleteProject();
  };
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-warning m-2" onClick={handleDeleteClick}>
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
