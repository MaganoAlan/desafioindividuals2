import { gql } from "@apollo/client";

const INFO_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        species
        gender
        image
      }
    }
  }
`;

export default INFO_CHARACTER;
