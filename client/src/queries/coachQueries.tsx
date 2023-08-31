import { gql } from "@apollo/client";

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

//No default cause multiple queries
export { GET_COACHES };
