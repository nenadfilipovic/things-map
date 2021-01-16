import gql from 'graphql-tag';

const device = gql`
  query device($id: ID!) {
    device(id: $id) {
      owner {
        username
      }
      createdDate
      modifyDate
      name
      description
      latitude
      longitude
      metadata {
        writeKey
        lastWriteDate
        lastEntryId
      }
    }
  }
`;

const me = gql`
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

const devices = gql`
  query devices {
    devices(first: 5) {
      edges {
        cursor
        node {
          id
          name
          createdDate
          description
          metadata {
            lastEntryId
          }
        }
      }
    }
  }
`;

export { me, devices, device };
