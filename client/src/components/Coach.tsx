// Import FC (FunctionalComponent) type
import { gql, useQuery } from "@apollo/client";
import CoachRow from './CoachRow'

// Define the type for a Coach
interface Coach {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}



const GET_COACHES = gql`
  query getCoaches {
    coaches {
      id
      name
      role
      email
      phone
    }
  }
`;

export const Coach = () => {
  //get the data back from queries 'gql' using 'useQuery'
  //'useQuery' can give use states as loading, error and data
  const { loading, error, data } = useQuery(GET_COACHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oups... </p>;

  return (
    <>
      {!loading && !error && (
        <div className="overflow-x-auto">
        <table  className="table table-sm md:table-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone</th> 
            </tr>
          </thead>
          <tbody>
            {data.coaches.map((coach: Coach) => (
              <CoachRow key={coach.id} coach={coach} />
            ))}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
};
