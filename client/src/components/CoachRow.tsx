interface Coach {
  name: string;
  role: string;
  email: string;
  phone: string;
}
interface CoachRowProps {
  coach: Coach;
}

const CoachRow: React.FC<CoachRowProps> = ({ coach }) => {
  return (
    <tr className="md:hover transition ease-in-out  duration-400  ">
      <td>{coach.name} </td>
      <td>{coach.role} </td>
      <td>{coach.email} </td>
      <td>{coach.phone} </td>
      <td>
        <button className="btn">delete</button>
      </td>
    </tr>
  );
};

export default CoachRow;
