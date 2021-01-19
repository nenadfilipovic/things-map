/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Custom scalar adding timestamp type. */
  DateTime: any;
};

/** The query root of things-map GraphQL interface. */
export type Query = {
  __typename?: 'Query';
  /** Display device. */
  device?: Maybe<Device>;
  /** Display device activity as calendar. */
  deviceActivity?: Maybe<Array<Maybe<Log>>>;
  /** Display device log chart. */
  deviceChart?: Maybe<Array<Maybe<Log>>>;
  /** Display all devices. */
  devices?: Maybe<DeviceConnection>;
  /** Display devices by location. */
  devicesByLocation?: Maybe<Array<Maybe<Device>>>;
  /** Display currently logged in user. */
  me?: Maybe<User>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Display public user. */
  user?: Maybe<User>;
  /** Display all public users. */
  users?: Maybe<UserConnection>;
  /** Display user watched devices. */
  watchedDevices?: Maybe<Array<Maybe<WatchedDevice>>>;
};

/** The query root of things-map GraphQL interface. */
export type QueryDeviceArgs = {
  id: Scalars['ID'];
};

/** The query root of things-map GraphQL interface. */
export type QueryDeviceActivityArgs = {
  id: Scalars['ID'];
};

/** The query root of things-map GraphQL interface. */
export type QueryDeviceChartArgs = {
  id: Scalars['ID'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
};

/** The query root of things-map GraphQL interface. */
export type QueryDevicesArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** The query root of things-map GraphQL interface. */
export type QueryDevicesByLocationArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** The query root of things-map GraphQL interface. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** The query root of things-map GraphQL interface. */
export type QueryUserArgs = {
  id: Scalars['ID'];
};

/** The query root of things-map GraphQL interface. */
export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** The root query for implementing GraphQL mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates new watched device object. */
  addWatchedDevice?: Maybe<AddWatchedDeviceResult>;
  /** Deletes selected device. */
  deleteDevice?: Maybe<DeleteDeviceResult>;
  /** Deletes user. */
  deleteUser?: Maybe<DeleteUserResult>;
  /** Empty mutation that allow extending it in other files. */
  empty?: Maybe<Scalars['String']>;
  /** Flushes logs of the device. */
  flushLog?: Maybe<FlushLogResult>;
  /** Gives reset password token to user. */
  forgotPassword?: Maybe<ForgotPasswordResult>;
  /** Modifies selected device information. */
  modifyDevice?: Maybe<ModifyDeviceResult>;
  /** Modifies user data. */
  modifyUser?: Maybe<ModifyUserResult>;
  /** Creates new device for user. */
  newDevice?: Maybe<NewDeviceResult>;
  /** Removes watched device object. */
  removeWatchedDevice?: Maybe<RemoveWatchedDeviceResult>;
  /** Resends verification email. */
  resendVerifyEmail?: Maybe<ResendVerifyEmailResult>;
  /** Resets user password. */
  resetPassword?: Maybe<ResetPasswordResult>;
  /** Signs user in by email. */
  signInByEmail?: Maybe<SignInByEmailResult>;
  /** Signs user in by username. */
  signInByUsername?: Maybe<SignInByUsernameResult>;
  /** Sings out user. */
  signOut?: Maybe<SignOutResult>;
  /** Signs up user. */
  signUp?: Maybe<SignUpResult>;
  /** Updates email of the user. */
  updateEmail?: Maybe<UpdateEmailResult>;
  /** Updates password of the user. */
  updatePassword?: Maybe<UpdatePasswordResult>;
  /** Verifies email of the user. */
  verifyEmail?: Maybe<VerifyEmailResult>;
  /** Verifies update email of the user. */
  verifyUpdateEmail?: Maybe<VerifyUpdateEmailResult>;
};

/** The root query for implementing GraphQL mutations. */
export type MutationAddWatchedDeviceArgs = {
  input: AddWatchedDeviceInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationFlushLogArgs = {
  input: FlushLogInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationModifyDeviceArgs = {
  input: ModifyDeviceInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationModifyUserArgs = {
  input: ModifyUserInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationNewDeviceArgs = {
  input: NewDeviceInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationRemoveWatchedDeviceArgs = {
  input: RemoveWatchedDeviceInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationResendVerifyEmailArgs = {
  input: ResendVerifyEmailInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationSignInByEmailArgs = {
  input: SignInByEmailInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationSignInByUsernameArgs = {
  input: SignInByUsernameInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationSignUpArgs = {
  input: SignUpInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

/** The root query for implementing GraphQL mutations. */
export type MutationVerifyUpdateEmailArgs = {
  input: VerifyUpdateEmailInput;
};

/** Type representing a error. */
export type Error = {
  __typename?: 'Error';
  /** Message containing error. */
  message: Scalars['String'];
  /** Path of the error. */
  path?: Maybe<Scalars['String']>;
};

/** Input type of DeleteDevice. */
export type DeleteDeviceInput = {
  /** A unique identifier for the device. */
  id: Scalars['ID'];
};

/** Return type of DeleteDevice. */
export type DeleteDeviceResult = {
  __typename?: 'DeleteDeviceResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Device metadata type. */
export type DeviceMetadata = {
  __typename?: 'DeviceMetadata';
  /** Device last entry id. */
  lastEntryId?: Maybe<Scalars['Int']>;
  /** Device last write date. */
  lastWriteDate?: Maybe<Scalars['DateTime']>;
  /** Device write key. */
  writeKey?: Maybe<Scalars['String']>;
};

/** Input type of ModifyDevice. */
export type ModifyDeviceInput = {
  /** The description of device. */
  description?: Maybe<Scalars['String']>;
  /** Elevation of the device. */
  elevation?: Maybe<Scalars['Int']>;
  /** Field 1 of the device. */
  field1?: Maybe<Scalars['String']>;
  /** Field 2 of the device. */
  field2?: Maybe<Scalars['String']>;
  /** Field 3 of the device. */
  field3?: Maybe<Scalars['String']>;
  /** Field 4 of the device. */
  field4?: Maybe<Scalars['String']>;
  /** Field 5 of the device. */
  field5?: Maybe<Scalars['String']>;
  /** A unique identifier for the device. */
  id: Scalars['ID'];
  /** Whether the device is public or not. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Latitude of the device. */
  latitude?: Maybe<Scalars['Float']>;
  /** Latitude of the device. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the device. */
  name?: Maybe<Scalars['String']>;
  /** The url of the device. */
  url?: Maybe<Scalars['String']>;
};

/** Return type of ModifyDevice. */
export type ModifyDeviceResult = {
  __typename?: 'ModifyDeviceResult';
  /** Returns modified node. */
  device?: Maybe<Device>;
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of NewDevice. */
export type NewDeviceInput = {
  /** The description of device. */
  description?: Maybe<Scalars['String']>;
  /** Field 1 of the device. */
  field1: Scalars['String'];
  /** Field 2 of the device. */
  field2?: Maybe<Scalars['String']>;
  /** Field 3 of the device. */
  field3?: Maybe<Scalars['String']>;
  /** Field 4 of the device. */
  field4?: Maybe<Scalars['String']>;
  /** Field 5 of the device. */
  field5?: Maybe<Scalars['String']>;
  /** Latitude of the device. */
  latitude: Scalars['Float'];
  /** Logs that belongs to the device. */
  longitude: Scalars['Float'];
  /** The name of the device. */
  name: Scalars['String'];
};

/** Return type of NewDevice. */
export type NewDeviceResult = {
  __typename?: 'NewDeviceResult';
  /** Returns created node. */
  device?: Maybe<Device>;
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Represents device that belongs to user. */
export type Device = Node & {
  __typename?: 'Device';
  /** Identifies the date and time when the object was created. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** The description of device. */
  description?: Maybe<Scalars['String']>;
  /** Elevation of the device. */
  elevation?: Maybe<Scalars['Int']>;
  /** Field 1 of the device. */
  field1?: Maybe<Scalars['String']>;
  /** Field 2 of the device. */
  field2?: Maybe<Scalars['String']>;
  /** Field 3 of the device. */
  field3?: Maybe<Scalars['String']>;
  /** Field 4 of the device. */
  field4?: Maybe<Scalars['String']>;
  /** Field 5 of the device. */
  field5?: Maybe<Scalars['String']>;
  /** A unique identifier for the device. */
  id: Scalars['ID'];
  /** Whether the device is public or not. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Latitude of the device. */
  latitude?: Maybe<Scalars['Float']>;
  /** Logs that belongs to the device. */
  logs?: Maybe<LogConnection>;
  /** Longitude of the device. */
  longitude?: Maybe<Scalars['Float']>;
  /** Metadata for the device. */
  metadata?: Maybe<DeviceMetadata>;
  /** Identifies the date and time when the object was modified. */
  modifyDate?: Maybe<Scalars['DateTime']>;
  /** The name of the device. */
  name?: Maybe<Scalars['String']>;
  /** Owner device is belonging to. */
  owner?: Maybe<User>;
  /** The url of the device. */
  url?: Maybe<Scalars['String']>;
  /** A unique identifier for the device owner. */
  userId: Scalars['ID'];
};

/** Represents device that belongs to user. */
export type DeviceLogsArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** The connection type for Device. */
export type DeviceConnection = {
  __typename?: 'DeviceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DeviceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type DeviceEdge = {
  __typename?: 'DeviceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Device>;
};

/** Input type of FlushLog. */
export type FlushLogInput = {
  /** ID of the device. */
  id: Scalars['ID'];
};

/** Return type of FlushLog. */
export type FlushLogResult = {
  __typename?: 'FlushLogResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Type representing log that belongs to device. */
export type Log = Node & {
  __typename?: 'Log';
  /** A unique identifier for the device that logs belong to. */
  deviceId?: Maybe<Scalars['String']>;
  /** Field 1 of the log. */
  field1?: Maybe<Scalars['String']>;
  /** Field 2 of the log. */
  field2?: Maybe<Scalars['String']>;
  /** Field 3 of the log. */
  field3?: Maybe<Scalars['String']>;
  /** Field 4 of the log. */
  field4?: Maybe<Scalars['String']>;
  /** Field 5 of the log. */
  field5?: Maybe<Scalars['String']>;
  /** A unique identifier for the log. */
  id: Scalars['ID'];
  /** The time field of the log. */
  time?: Maybe<Scalars['DateTime']>;
};

/** The connection type for Log. */
export type LogConnection = {
  __typename?: 'LogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LogEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type LogEdge = {
  __typename?: 'LogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Log>;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Input type of DeleteUser. */
export type DeleteUserInput = {
  /** The users password. */
  password: Scalars['String'];
};

/** Return type of DeleteUser. */
export type DeleteUserResult = {
  __typename?: 'DeleteUserResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of ForgotPassword. */
export type ForgotPasswordInput = {
  /** The users email address. */
  email: Scalars['String'];
};

/** Return type of ForgotPassword. */
export type ForgotPasswordResult = {
  __typename?: 'ForgotPasswordResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** User metadata type */
export type UserMetadata = {
  __typename?: 'UserMetadata';
  /** User last password changed date. */
  lastPasswordChangedDate?: Maybe<Scalars['DateTime']>;
  /** User last sign in date. */
  lastSignInDate?: Maybe<Scalars['DateTime']>;
  /** User last sign in ip address. */
  lastSignInIpAddress?: Maybe<Scalars['String']>;
  /** User sign in count. */
  signInCount?: Maybe<Scalars['Int']>;
};

/** Input type of ModifyUser. */
export type ModifyUserInput = {
  /** The user's profile bio. */
  bio?: Maybe<Scalars['String']>;
  /** Country of the user. */
  country?: Maybe<Scalars['String']>;
  /** The first name of the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Whether the user profile is public or not. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** The last name of the user. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude of the user location. */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude of the user location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The username of the user. */
  username?: Maybe<Scalars['String']>;
  /** The website of the user. */
  website?: Maybe<Scalars['String']>;
};

/** Return type of ModifyUser. */
export type ModifyUserResult = {
  __typename?: 'ModifyUserResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
  /** Returns modified node. */
  user?: Maybe<User>;
};

/** Input type of ResendVerifyEmail. */
export type ResendVerifyEmailInput = {
  /** The users email address. */
  email: Scalars['String'];
};

/** Return type of ResendVerifyEmail. */
export type ResendVerifyEmailResult = {
  __typename?: 'ResendVerifyEmailResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of ResetPassword */
export type ResetPasswordInput = {
  /** Token used to reset password. */
  resetPasswordToken: Scalars['String'];
};

/** Return type of ResetPassword. */
export type ResetPasswordResult = {
  __typename?: 'ResetPasswordResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Type representing user. */
export type User = Node & {
  __typename?: 'User';
  /** The user's profile bio. */
  bio?: Maybe<Scalars['String']>;
  /** Country of the user. */
  country?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was created. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** Devices that belongs to user. */
  devices?: Maybe<DeviceConnection>;
  /** The first name of the user. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the user. */
  id: Scalars['ID'];
  /** Whether the user profile is public or not. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** The last name of the user. */
  lastName?: Maybe<Scalars['String']>;
  /** Latitude of the user location. */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude of the user location. */
  longitude?: Maybe<Scalars['Float']>;
  /** Metadata of the user. */
  metadata?: Maybe<UserMetadata>;
  /** Identifies the date and time when the object was modified. */
  modifyDate?: Maybe<Scalars['DateTime']>;
  /** The username of the user. */
  username?: Maybe<Scalars['String']>;
  /** Devices that user have in watch list. */
  watchedDevices?: Maybe<WatchedDeviceConnection>;
  /** The website of the user. */
  website?: Maybe<Scalars['String']>;
};

/** Type representing user. */
export type UserDevicesArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** Type representing user. */
export type UserWatchedDevicesArgs = {
  after?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** Input type of SignInByEmail */
export type SignInByEmailInput = {
  /** The email address of the user. */
  email: Scalars['String'];
  /** The password of the user. */
  password: Scalars['String'];
};

/** Return type of SignInByEmail. */
export type SignInByEmailResult = {
  __typename?: 'SignInByEmailResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
  /** Returns node instance. */
  user?: Maybe<User>;
};

/** Input type of SignInByUsername. */
export type SignInByUsernameInput = {
  /** The password of the user. */
  password: Scalars['String'];
  /** The username of the user. */
  username: Scalars['String'];
};

/** Return type of SignInByUsername. */
export type SignInByUsernameResult = {
  __typename?: 'SignInByUsernameResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
  /** Returns node instance. */
  user?: Maybe<User>;
};

/** Return type of SignOut. */
export type SignOutResult = {
  __typename?: 'SignOutResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of SignUp. */
export type SignUpInput = {
  /** Email address of the user. */
  email: Scalars['String'];
  /** The first name of the user. */
  firstName: Scalars['String'];
  /** The last name of the user. */
  lastName: Scalars['String'];
  /** The password of the user. */
  password: Scalars['String'];
  /** The username of the user. */
  username: Scalars['String'];
};

/** Return type of SignUp. */
export type SignUpResult = {
  __typename?: 'SignUpResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of UpdateEmail. */
export type UpdateEmailInput = {
  /** Provided as new email. */
  email: Scalars['String'];
};

/** Return type of UpdateEmail. */
export type UpdateEmailResult = {
  __typename?: 'UpdateEmailResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of UpdatePassword. */
export type UpdatePasswordInput = {
  /** Current user password. */
  currentPassword: Scalars['String'];
  /** New password. */
  newPassword: Scalars['String'];
};

/** Return type of UpdatePassword. */
export type UpdatePasswordResult = {
  __typename?: 'UpdatePasswordResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of VerifyEmail. */
export type VerifyEmailInput = {
  /** Verify email token. */
  verifyEmailToken: Scalars['String'];
};

/** Return type of VerifyEmail. */
export type VerifyEmailResult = {
  __typename?: 'VerifyEmailResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of VerifyUpdateEmail. */
export type VerifyUpdateEmailInput = {
  /** Token used to verify update email. */
  verifyUpdateEmailToken: Scalars['String'];
};

/** Return type of VerifyUpdateEmail. */
export type VerifyUpdateEmailResult = {
  __typename?: 'VerifyUpdateEmailResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Input type of AddWatchedDevice. */
export type AddWatchedDeviceInput = {
  /** A unique identifier for the device. */
  deviceId: Scalars['ID'];
};

/** Return type of AddWatchedDevice. */
export type AddWatchedDeviceResult = {
  __typename?: 'AddWatchedDeviceResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
  /** Returns created node. */
  watchedDevice?: Maybe<WatchedDevice>;
};

/** Input type of RemoveWatchedDevice. */
export type RemoveWatchedDeviceInput = {
  /** A unique identifier for object. */
  id: Scalars['ID'];
};

/** Return type of RemoveWatchedDevice. */
export type RemoveWatchedDeviceResult = {
  __typename?: 'RemoveWatchedDeviceResult';
  /** Errors array returned if there was error. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message returned if mutation was successful. */
  message?: Maybe<Scalars['String']>;
};

/** Type representing watched device. */
export type WatchedDevice = Node & {
  __typename?: 'WatchedDevice';
  /** Identifies the date and time when the object was created. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** A unique identifier for the device beign watched. */
  deviceId?: Maybe<Scalars['String']>;
  /** A unique identifier for the watched device object. */
  id: Scalars['ID'];
  /** A unique identifier for the user watching device. */
  userId?: Maybe<Scalars['String']>;
};

/** The connection type for WatchedDevice. */
export type WatchedDeviceConnection = {
  __typename?: 'WatchedDeviceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WatchedDeviceEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type WatchedDeviceEdge = {
  __typename?: 'WatchedDeviceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<WatchedDevice>;
};

export type DeleteDeviceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteDeviceMutation = { __typename?: 'Mutation' } & {
  deleteDevice?: Maybe<
    { __typename?: 'DeleteDeviceResult' } & Pick<DeleteDeviceResult, 'message'>
  >;
};

export type NewDeviceMutationVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  field1: Scalars['String'];
}>;

export type NewDeviceMutation = { __typename?: 'Mutation' } & {
  newDevice?: Maybe<
    { __typename?: 'NewDeviceResult' } & Pick<NewDeviceResult, 'message'>
  >;
};

export type ModifyDeviceMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type ModifyDeviceMutation = { __typename?: 'Mutation' } & {
  modifyDevice?: Maybe<
    { __typename?: 'ModifyDeviceResult' } & Pick<ModifyDeviceResult, 'message'>
  >;
};

export type ModifyUserMutationVariables = Exact<{
  bio?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}>;

export type ModifyUserMutation = { __typename?: 'Mutation' } & {
  modifyUser?: Maybe<
    { __typename?: 'ModifyUserResult' } & Pick<ModifyUserResult, 'message'> & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
        user?: Maybe<
          { __typename?: 'User' } & Pick<
            User,
            | 'id'
            | 'firstName'
            | 'lastName'
            | 'username'
            | 'country'
            | 'bio'
            | 'latitude'
            | 'longitude'
            | 'website'
            | 'modifyDate'
            | 'createdDate'
          > & {
              metadata?: Maybe<
                { __typename?: 'UserMetadata' } & Pick<
                  UserMetadata,
                  'lastSignInDate'
                >
              >;
            }
        >;
      }
  >;
};

export type DeleteUserMutationVariables = Exact<{
  password: Scalars['String'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser?: Maybe<
    { __typename?: 'DeleteUserResult' } & Pick<DeleteUserResult, 'message'> & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type UpdatePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type UpdatePasswordMutation = { __typename?: 'Mutation' } & {
  updatePassword?: Maybe<
    { __typename?: 'UpdatePasswordResult' } & Pick<
      UpdatePasswordResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type VerifyUpdateEmailMutationVariables = Exact<{
  verifyUpdateEmailToken: Scalars['String'];
}>;

export type VerifyUpdateEmailMutation = { __typename?: 'Mutation' } & {
  verifyUpdateEmail?: Maybe<
    { __typename?: 'VerifyUpdateEmailResult' } & Pick<
      VerifyUpdateEmailResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type UpdateEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type UpdateEmailMutation = { __typename?: 'Mutation' } & {
  updateEmail?: Maybe<
    { __typename?: 'UpdateEmailResult' } & Pick<
      UpdateEmailResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordToken: Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<
    { __typename?: 'ResetPasswordResult' } & Pick<
      ResetPasswordResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
  forgotPassword?: Maybe<
    { __typename?: 'ForgotPasswordResult' } & Pick<
      ForgotPasswordResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type SignOutMutationVariables = Exact<{ [key: string]: never }>;

export type SignOutMutation = { __typename?: 'Mutation' } & {
  signOut?: Maybe<
    { __typename?: 'SignOutResult' } & Pick<SignOutResult, 'message'> & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type ResendVerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type ResendVerifyEmailMutation = { __typename?: 'Mutation' } & {
  resendVerifyEmail?: Maybe<
    { __typename?: 'ResendVerifyEmailResult' } & Pick<
      ResendVerifyEmailResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type VerifyEmailMutationVariables = Exact<{
  verifyEmailToken: Scalars['String'];
}>;

export type VerifyEmailMutation = { __typename?: 'Mutation' } & {
  verifyEmail?: Maybe<
    { __typename?: 'VerifyEmailResult' } & Pick<
      VerifyEmailResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type SignInByEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInByEmailMutation = { __typename?: 'Mutation' } & {
  signInByEmail?: Maybe<
    { __typename?: 'SignInByEmailResult' } & Pick<
      SignInByEmailResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
        user?: Maybe<{ __typename?: 'User' } & Pick<User, 'firstName'>>;
      }
  >;
};

export type SignInByUsernameMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInByUsernameMutation = { __typename?: 'Mutation' } & {
  signInByUsername?: Maybe<
    { __typename?: 'SignInByUsernameResult' } & Pick<
      SignInByUsernameResult,
      'message'
    > & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
        user?: Maybe<{ __typename?: 'User' } & Pick<User, 'firstName'>>;
      }
  >;
};

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignUpMutation = { __typename?: 'Mutation' } & {
  signUp?: Maybe<
    { __typename?: 'SignUpResult' } & Pick<SignUpResult, 'message'> & {
        errors?: Maybe<
          Array<
            Maybe<{ __typename?: 'Error' } & Pick<Error, 'message' | 'path'>>
          >
        >;
      }
  >;
};

export type DeviceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeviceQuery = { __typename?: 'Query' } & {
  device?: Maybe<
    { __typename?: 'Device' } & Pick<
      Device,
      | 'createdDate'
      | 'modifyDate'
      | 'name'
      | 'description'
      | 'latitude'
      | 'longitude'
    > & {
        owner?: Maybe<{ __typename?: 'User' } & Pick<User, 'username'>>;
        metadata?: Maybe<
          { __typename?: 'DeviceMetadata' } & Pick<
            DeviceMetadata,
            'writeKey' | 'lastWriteDate' | 'lastEntryId'
          >
        >;
      }
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'username'
      | 'createdDate'
      | 'modifyDate'
      | 'firstName'
      | 'lastName'
      | 'country'
      | 'bio'
      | 'isPublic'
      | 'latitude'
      | 'longitude'
      | 'website'
    > & {
        metadata?: Maybe<
          { __typename?: 'UserMetadata' } & Pick<UserMetadata, 'lastSignInDate'>
        >;
      }
  >;
};

export type DevicesQueryVariables = Exact<{ [key: string]: never }>;

export type DevicesQuery = { __typename?: 'Query' } & {
  devices?: Maybe<
    { __typename?: 'DeviceConnection' } & {
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'DeviceEdge' } & Pick<DeviceEdge, 'cursor'> & {
                node?: Maybe<
                  { __typename?: 'Device' } & Pick<
                    Device,
                    | 'id'
                    | 'name'
                    | 'createdDate'
                    | 'description'
                    | 'latitude'
                    | 'longitude'
                  > & {
                      metadata?: Maybe<
                        { __typename?: 'DeviceMetadata' } & Pick<
                          DeviceMetadata,
                          'lastEntryId'
                        >
                      >;
                    }
                >;
              }
          >
        >
      >;
    }
  >;
};

export const DeleteDeviceDocument = gql`
  mutation deleteDevice($id: ID!) {
    deleteDevice(input: { id: $id }) {
      message
    }
  }
`;
export type DeleteDeviceMutationFn = Apollo.MutationFunction<
  DeleteDeviceMutation,
  DeleteDeviceMutationVariables
>;

/**
 * __useDeleteDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceMutation, { data, loading, error }] = useDeleteDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDeviceMutation,
    DeleteDeviceMutationVariables
  >,
) {
  return Apollo.useMutation<
    DeleteDeviceMutation,
    DeleteDeviceMutationVariables
  >(DeleteDeviceDocument, baseOptions);
}
export type DeleteDeviceMutationHookResult = ReturnType<
  typeof useDeleteDeviceMutation
>;
export type DeleteDeviceMutationResult = Apollo.MutationResult<DeleteDeviceMutation>;
export type DeleteDeviceMutationOptions = Apollo.BaseMutationOptions<
  DeleteDeviceMutation,
  DeleteDeviceMutationVariables
>;
export const NewDeviceDocument = gql`
  mutation newDevice(
    $name: String!
    $description: String
    $latitude: Float!
    $longitude: Float!
    $field1: String!
  ) {
    newDevice(
      input: {
        name: $name
        description: $description
        latitude: $latitude
        longitude: $longitude
        field1: $field1
      }
    ) {
      message
    }
  }
`;
export type NewDeviceMutationFn = Apollo.MutationFunction<
  NewDeviceMutation,
  NewDeviceMutationVariables
>;

/**
 * __useNewDeviceMutation__
 *
 * To run a mutation, you first call `useNewDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newDeviceMutation, { data, loading, error }] = useNewDeviceMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      field1: // value for 'field1'
 *   },
 * });
 */
export function useNewDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    NewDeviceMutation,
    NewDeviceMutationVariables
  >,
) {
  return Apollo.useMutation<NewDeviceMutation, NewDeviceMutationVariables>(
    NewDeviceDocument,
    baseOptions,
  );
}
export type NewDeviceMutationHookResult = ReturnType<
  typeof useNewDeviceMutation
>;
export type NewDeviceMutationResult = Apollo.MutationResult<NewDeviceMutation>;
export type NewDeviceMutationOptions = Apollo.BaseMutationOptions<
  NewDeviceMutation,
  NewDeviceMutationVariables
>;
export const ModifyDeviceDocument = gql`
  mutation modifyDevice($id: ID!, $name: String, $description: String) {
    modifyDevice(input: { id: $id, name: $name, description: $description }) {
      message
    }
  }
`;
export type ModifyDeviceMutationFn = Apollo.MutationFunction<
  ModifyDeviceMutation,
  ModifyDeviceMutationVariables
>;

/**
 * __useModifyDeviceMutation__
 *
 * To run a mutation, you first call `useModifyDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyDeviceMutation, { data, loading, error }] = useModifyDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useModifyDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ModifyDeviceMutation,
    ModifyDeviceMutationVariables
  >,
) {
  return Apollo.useMutation<
    ModifyDeviceMutation,
    ModifyDeviceMutationVariables
  >(ModifyDeviceDocument, baseOptions);
}
export type ModifyDeviceMutationHookResult = ReturnType<
  typeof useModifyDeviceMutation
>;
export type ModifyDeviceMutationResult = Apollo.MutationResult<ModifyDeviceMutation>;
export type ModifyDeviceMutationOptions = Apollo.BaseMutationOptions<
  ModifyDeviceMutation,
  ModifyDeviceMutationVariables
>;
export const ModifyUserDocument = gql`
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
        id
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
`;
export type ModifyUserMutationFn = Apollo.MutationFunction<
  ModifyUserMutation,
  ModifyUserMutationVariables
>;

/**
 * __useModifyUserMutation__
 *
 * To run a mutation, you first call `useModifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyUserMutation, { data, loading, error }] = useModifyUserMutation({
 *   variables: {
 *      bio: // value for 'bio'
 *      country: // value for 'country'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      username: // value for 'username'
 *      website: // value for 'website'
 *   },
 * });
 */
export function useModifyUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ModifyUserMutation,
    ModifyUserMutationVariables
  >,
) {
  return Apollo.useMutation<ModifyUserMutation, ModifyUserMutationVariables>(
    ModifyUserDocument,
    baseOptions,
  );
}
export type ModifyUserMutationHookResult = ReturnType<
  typeof useModifyUserMutation
>;
export type ModifyUserMutationResult = Apollo.MutationResult<ModifyUserMutation>;
export type ModifyUserMutationOptions = Apollo.BaseMutationOptions<
  ModifyUserMutation,
  ModifyUserMutationVariables
>;
export const DeleteUserDocument = gql`
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
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    baseOptions,
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UpdatePasswordDocument = gql`
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
`;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables
>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      currentPassword: // value for 'currentPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdatePasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
  >,
) {
  return Apollo.useMutation<
    UpdatePasswordMutation,
    UpdatePasswordMutationVariables
  >(UpdatePasswordDocument, baseOptions);
}
export type UpdatePasswordMutationHookResult = ReturnType<
  typeof useUpdatePasswordMutation
>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<
  UpdatePasswordMutation,
  UpdatePasswordMutationVariables
>;
export const VerifyUpdateEmailDocument = gql`
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
`;
export type VerifyUpdateEmailMutationFn = Apollo.MutationFunction<
  VerifyUpdateEmailMutation,
  VerifyUpdateEmailMutationVariables
>;

/**
 * __useVerifyUpdateEmailMutation__
 *
 * To run a mutation, you first call `useVerifyUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUpdateEmailMutation, { data, loading, error }] = useVerifyUpdateEmailMutation({
 *   variables: {
 *      verifyUpdateEmailToken: // value for 'verifyUpdateEmailToken'
 *   },
 * });
 */
export function useVerifyUpdateEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyUpdateEmailMutation,
    VerifyUpdateEmailMutationVariables
  >,
) {
  return Apollo.useMutation<
    VerifyUpdateEmailMutation,
    VerifyUpdateEmailMutationVariables
  >(VerifyUpdateEmailDocument, baseOptions);
}
export type VerifyUpdateEmailMutationHookResult = ReturnType<
  typeof useVerifyUpdateEmailMutation
>;
export type VerifyUpdateEmailMutationResult = Apollo.MutationResult<VerifyUpdateEmailMutation>;
export type VerifyUpdateEmailMutationOptions = Apollo.BaseMutationOptions<
  VerifyUpdateEmailMutation,
  VerifyUpdateEmailMutationVariables
>;
export const UpdateEmailDocument = gql`
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
`;
export type UpdateEmailMutationFn = Apollo.MutationFunction<
  UpdateEmailMutation,
  UpdateEmailMutationVariables
>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEmailMutation,
    UpdateEmailMutationVariables
  >,
) {
  return Apollo.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(
    UpdateEmailDocument,
    baseOptions,
  );
}
export type UpdateEmailMutationHookResult = ReturnType<
  typeof useUpdateEmailMutation
>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<
  UpdateEmailMutation,
  UpdateEmailMutationVariables
>;
export const ResetPasswordDocument = gql`
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
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      resetPasswordToken: // value for 'resetPasswordToken'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const ForgotPasswordDocument = gql`
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
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >,
) {
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, baseOptions);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const SignOutDocument = gql`
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
`;
export type SignOutMutationFn = Apollo.MutationFunction<
  SignOutMutation,
  SignOutMutationVariables
>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignOutMutation,
    SignOutMutationVariables
  >,
) {
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(
    SignOutDocument,
    baseOptions,
  );
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<
  SignOutMutation,
  SignOutMutationVariables
>;
export const ResendVerifyEmailDocument = gql`
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
`;
export type ResendVerifyEmailMutationFn = Apollo.MutationFunction<
  ResendVerifyEmailMutation,
  ResendVerifyEmailMutationVariables
>;

/**
 * __useResendVerifyEmailMutation__
 *
 * To run a mutation, you first call `useResendVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerifyEmailMutation, { data, loading, error }] = useResendVerifyEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendVerifyEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResendVerifyEmailMutation,
    ResendVerifyEmailMutationVariables
  >,
) {
  return Apollo.useMutation<
    ResendVerifyEmailMutation,
    ResendVerifyEmailMutationVariables
  >(ResendVerifyEmailDocument, baseOptions);
}
export type ResendVerifyEmailMutationHookResult = ReturnType<
  typeof useResendVerifyEmailMutation
>;
export type ResendVerifyEmailMutationResult = Apollo.MutationResult<ResendVerifyEmailMutation>;
export type ResendVerifyEmailMutationOptions = Apollo.BaseMutationOptions<
  ResendVerifyEmailMutation,
  ResendVerifyEmailMutationVariables
>;
export const VerifyEmailDocument = gql`
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
`;
export type VerifyEmailMutationFn = Apollo.MutationFunction<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      verifyEmailToken: // value for 'verifyEmailToken'
 *   },
 * });
 */
export function useVerifyEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyEmailMutation,
    VerifyEmailMutationVariables
  >,
) {
  return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(
    VerifyEmailDocument,
    baseOptions,
  );
}
export type VerifyEmailMutationHookResult = ReturnType<
  typeof useVerifyEmailMutation
>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;
export const SignInByEmailDocument = gql`
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
`;
export type SignInByEmailMutationFn = Apollo.MutationFunction<
  SignInByEmailMutation,
  SignInByEmailMutationVariables
>;

/**
 * __useSignInByEmailMutation__
 *
 * To run a mutation, you first call `useSignInByEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInByEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInByEmailMutation, { data, loading, error }] = useSignInByEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInByEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInByEmailMutation,
    SignInByEmailMutationVariables
  >,
) {
  return Apollo.useMutation<
    SignInByEmailMutation,
    SignInByEmailMutationVariables
  >(SignInByEmailDocument, baseOptions);
}
export type SignInByEmailMutationHookResult = ReturnType<
  typeof useSignInByEmailMutation
>;
export type SignInByEmailMutationResult = Apollo.MutationResult<SignInByEmailMutation>;
export type SignInByEmailMutationOptions = Apollo.BaseMutationOptions<
  SignInByEmailMutation,
  SignInByEmailMutationVariables
>;
export const SignInByUsernameDocument = gql`
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
`;
export type SignInByUsernameMutationFn = Apollo.MutationFunction<
  SignInByUsernameMutation,
  SignInByUsernameMutationVariables
>;

/**
 * __useSignInByUsernameMutation__
 *
 * To run a mutation, you first call `useSignInByUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInByUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInByUsernameMutation, { data, loading, error }] = useSignInByUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInByUsernameMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInByUsernameMutation,
    SignInByUsernameMutationVariables
  >,
) {
  return Apollo.useMutation<
    SignInByUsernameMutation,
    SignInByUsernameMutationVariables
  >(SignInByUsernameDocument, baseOptions);
}
export type SignInByUsernameMutationHookResult = ReturnType<
  typeof useSignInByUsernameMutation
>;
export type SignInByUsernameMutationResult = Apollo.MutationResult<SignInByUsernameMutation>;
export type SignInByUsernameMutationOptions = Apollo.BaseMutationOptions<
  SignInByUsernameMutation,
  SignInByUsernameMutationVariables
>;
export const SignUpDocument = gql`
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
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const DeviceDocument = gql`
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

/**
 * __useDeviceQuery__
 *
 * To run a query within a React component, call `useDeviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeviceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeviceQuery(
  baseOptions: Apollo.QueryHookOptions<DeviceQuery, DeviceQueryVariables>,
) {
  return Apollo.useQuery<DeviceQuery, DeviceQueryVariables>(
    DeviceDocument,
    baseOptions,
  );
}
export function useDeviceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DeviceQuery, DeviceQueryVariables>,
) {
  return Apollo.useLazyQuery<DeviceQuery, DeviceQueryVariables>(
    DeviceDocument,
    baseOptions,
  );
}
export type DeviceQueryHookResult = ReturnType<typeof useDeviceQuery>;
export type DeviceLazyQueryHookResult = ReturnType<typeof useDeviceLazyQuery>;
export type DeviceQueryResult = Apollo.QueryResult<
  DeviceQuery,
  DeviceQueryVariables
>;
export const MeDocument = gql`
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

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const DevicesDocument = gql`
  query devices {
    devices(first: 5) {
      edges {
        cursor
        node {
          id
          name
          createdDate
          description
          latitude
          longitude
          metadata {
            lastEntryId
          }
        }
      }
    }
  }
`;

/**
 * __useDevicesQuery__
 *
 * To run a query within a React component, call `useDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevicesQuery(
  baseOptions?: Apollo.QueryHookOptions<DevicesQuery, DevicesQueryVariables>,
) {
  return Apollo.useQuery<DevicesQuery, DevicesQueryVariables>(
    DevicesDocument,
    baseOptions,
  );
}
export function useDevicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DevicesQuery,
    DevicesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<DevicesQuery, DevicesQueryVariables>(
    DevicesDocument,
    baseOptions,
  );
}
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>;
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>;
export type DevicesQueryResult = Apollo.QueryResult<
  DevicesQuery,
  DevicesQueryVariables
>;
