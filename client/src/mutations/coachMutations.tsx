import { gql } from "@apollo/client";

const ADD_COACH = gql`
  mutation addCoach(
    $name: String!
    $role: String!
    $email: String!
    $phone: String!
  ) {
    addCoach(name: $name, role: $role, email: $email, phone: $phone) {
      name
      role
      email
      phone
    }
  }
`;

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
export { ADD_COACH, DELETE_COACH };
