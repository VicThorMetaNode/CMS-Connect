import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      description
      status
    }
  }
`;

//No default cause multiple queries
export { GET_PROJECTS };
