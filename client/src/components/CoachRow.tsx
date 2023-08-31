import { useMutation } from "@apollo/client";
import { DELETE_COACH } from "../mutations/coachMutations";

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

const CoachRow: React.FC<CoachRowProps> = ({ coach }) => {
  const [deleteCoach] = useMutation(DELETE_COACH, {
    variables: {id: coach.id},
    });

    const handleClick = () => {
      // Invoke the deleteCoach mutation function here
      deleteCoach().catch((error) => {
        console.error('Error deleting coach:', error);
      });
    };
    
  return (
    <tr className="md:hover transition ease-in-out duration-400">
      <td>{coach.name} </td>
      <td>{coach.role} </td>
      <td>{coach.email} </td>
      <td>{coach.phone} </td>
      <td>
        <button className="btn" onClick={handleClick}>delete</button>
      </td>
    </tr>
  );
};

export default CoachRow;
