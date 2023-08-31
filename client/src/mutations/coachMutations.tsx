import { gql } from "@apollo/client";

const DELETE_COACH = gql`
  mutation deleteCoach($id: ID!) {
    deleteCoach(id: $id) {
      id
      name
      role
      email
      phone
    }
  }
`;

//No default cause multiple queries
export { DELETE_COACH };