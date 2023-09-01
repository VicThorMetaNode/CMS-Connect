import { useMutation, MutationUpdaterFn } from "@apollo/client";
import { DELETE_COACH } from "../mutations/coachMutations";
import { GET_COACHES } from "../queries/coachQueries";

interface Coach {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}
interface CoachRowProps {
  coach: Coach;
}

interface DeleteCoachData {
  deleteCoach: {
    id: string;
  };
}

const CoachRow: React.FC<CoachRowProps> = ({ coach }) => {
  const handleUpdateCache: MutationUpdaterFn<DeleteCoachData> = (
    cache,
    { data }
  ) => {
    if (data) {
      const deletedCoachId = data.deleteCoach.id;
      const { coaches } = cache.readQuery<{ coaches: Coach[] }>({
        query: GET_COACHES,
      }) || { coaches: [] };
      const updatedCoaches = coaches.filter(
        (coach) => coach.id !== deletedCoachId
      );
      cache.writeQuery<{ coaches: Coach[] }>({
        query: GET_COACHES,
        data: { coaches: updatedCoaches },
      });
    }
  };

  const [deleteCoach] = useMutation<DeleteCoachData>(DELETE_COACH, {
    variables: { id: coach.id },
    // Update cache so no need to refresh to see result
    update: handleUpdateCache,
  });

  const handleClick = () => {
    // Invoke the deleteCoach mutation function here
    deleteCoach().catch((error) => {
      console.error("Error deleting coach:", error);
    });
  };

  return (
    <tr className="md:hover transition ease-in-out duration-400">
      <td>{coach.name} </td>
      <td>{coach.role} </td>
      <td>{coach.email} </td>
      <td>{coach.phone} </td>
      <td>
        <button className="btn" onClick={handleClick}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default CoachRow;
