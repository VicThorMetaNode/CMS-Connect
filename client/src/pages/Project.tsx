import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import CoachInfo from "../components/CoachInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";

export const Project = () => {
  //destruct using params
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner />;
  if (error) return <p>Oups... </p>;
  return (
    <>
      <div className="py-10">
        <div className="card bg-gradient-to-br from-indigo-300 to-purple-400 shadow-xl text-vamp p-4">
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5>Project Status:</h5>
          <p>{data.project.status}</p>

          <CoachInfo coach={data.project.coach} />
          <div className="flex items-center">
            <Link to="/" className="btn ">
              Back
            </Link>
            <DeleteProjectButton projectId={data.project} />
            {/* we use projectId rather than id because we can use useParams in this case: see above */}
          </div>
        </div>
      </div>
    </>
  );
};
