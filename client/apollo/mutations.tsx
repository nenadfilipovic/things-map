import gql from 'graphql-tag';

export default gql`
  mutation modifyUser(
    $bio: String
    $country: String
    $firstName: String
    $lastName: String
    $latitude: Float
    $longitude: Float
    $username: String
    $website: String
  ) {
    modifyUser(
      input: {
        bio: $bio
        country: $country
        firstName: $firstName
        lastName: $lastName
        latitude: $latitude
        longitude: $longitude
        username: $username
        website: $website
      }
    ) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
      user {
        firstName
        lastName
        username
        country
        bio
        latitude
        longitude
        website
        metadata {
          lastSignInDate
        }
        modifyDate
        createdDate
      }
    }
  }
  mutation deleteUser($password: String!) {
    deleteUser(input: { password: $password }) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation updatePassword($currentPassword: String!, $newPassword: String!) {
    updatePassword(
      input: { currentPassword: $currentPassword, newPassword: $newPassword }
    ) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation verifyUpdateEmail($verifyUpdateEmailToken: String!) {
    verifyUpdateEmail(
      input: { verifyUpdateEmailToken: $verifyUpdateEmailToken }
    ) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation updateEmail($email: String!) {
    updateEmail(input: { email: $email }) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation resetPassword($resetPasswordToken: String!) {
    resetPassword(input: { resetPasswordToken: $resetPasswordToken }) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation forgotPassword($email: String!) {
    forgotPassword(input: { email: $email }) {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation signOut {
    signOut {
      message
      errors {
        ... on Error {
          message
          path
        }
      }
    }
  }
  mutation resendVerifyEmail($email: String!) {
    resendVerifyEmail(input: { email: $email }) {
      errors {
        ... on Error {
          message
          path
        }
      }
      message
    }
  }
  mutation verifyEmail($verifyEmailToken: String!) {
    verifyEmail(input: { verifyEmailToken: $verifyEmailToken }) {
      errors {
        ... on Error {
          message
          path
        }
      }
      message
    }
  }
  mutation signInByEmail($email: String!, $password: String!) {
    signInByEmail(input: { email: $email, password: $password }) {
      errors {
        ... on Error {
          message
          path
        }
      }
      message
      user {
        firstName
      }
    }
  }
  mutation signInByUsername($username: String!, $password: String!) {
    signInByUsername(input: { username: $username, password: $password }) {
      errors {
        ... on Error {
          message
          path
        }
      }
      message
      user {
        firstName
      }
    }
  }
  mutation signUp(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    signUp(
      input: {
        email: $email
        username: $username
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      errors {
        ... on Error {
          message
          path
        }
      }
      message
    }
  }
`;
