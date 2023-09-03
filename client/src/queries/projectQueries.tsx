import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      description
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
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

//No default cause multiple queries
export { GET_PROJECTS, GET_PROJECT };
