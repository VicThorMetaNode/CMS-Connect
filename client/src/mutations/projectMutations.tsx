import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $coachId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      coachId: $coachId
    ) {
      id
      name
      description
      status
      coach {
        id
        name
        role
        email
        phone
      }
    }
  }
`;

// const DELETE_PROJECT = gql`
//   mutation DeleteProject($id: ID!) {
//     deleteProject(id: $id) {
//       id
//     }
//   }
// `;
// `;

//No default cause multiple queries
export { ADD_PROJECT };
