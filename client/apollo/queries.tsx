import gql from 'graphql-tag';

export default gql`
  query me {
    me {
      username
      createdDate
      modifyDate
      firstName
      lastName
      country
      bio
      isPublic
      latitude
      longitude
      website
      metadata {
        lastSignInDate
      }
    }
  }
`;
