/* eslint-disable */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { UserModel } from 'src/database/models/User';
import { DeviceModel } from 'src/database/models/Device';
import { Context } from 'src/context';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Custom scalar adding timestamp type. */
  DateTime: Date;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Mutation: ResolverTypeWrapper<{}>;
  Error: ResolverTypeWrapper<Error>;
  DeleteDeviceInput: DeleteDeviceInput;
  DeleteDeviceResult: ResolverTypeWrapper<DeleteDeviceResult>;
  DeviceMetadata: ResolverTypeWrapper<DeviceMetadata>;
  ModifyDeviceInput: ModifyDeviceInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ModifyDeviceResult: ResolverTypeWrapper<
    Omit<ModifyDeviceResult, 'device'> & {
      device?: Maybe<ResolversTypes['Device']>;
    }
  >;
  NewDeviceInput: NewDeviceInput;
  NewDeviceResult: ResolverTypeWrapper<
    Omit<NewDeviceResult, 'device'> & {
      device?: Maybe<ResolversTypes['Device']>;
    }
  >;
  Device: ResolverTypeWrapper<DeviceModel>;
  DeviceConnection: ResolverTypeWrapper<
    Omit<DeviceConnection, 'edges'> & {
      edges?: Maybe<Array<Maybe<ResolversTypes['DeviceEdge']>>>;
    }
  >;
  DeviceEdge: ResolverTypeWrapper<
    Omit<DeviceEdge, 'node'> & { node?: Maybe<ResolversTypes['Device']> }
  >;
  FlushLogInput: FlushLogInput;
  FlushLogResult: ResolverTypeWrapper<FlushLogResult>;
  Log: ResolverTypeWrapper<Log>;
  LogConnection: ResolverTypeWrapper<LogConnection>;
  LogEdge: ResolverTypeWrapper<LogEdge>;
  Node:
    | ResolversTypes['Device']
    | ResolversTypes['Log']
    | ResolversTypes['User']
    | ResolversTypes['WatchedDevice'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: ResolverTypeWrapper<DeleteUserResult>;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ResolverTypeWrapper<ForgotPasswordResult>;
  UserMetadata: ResolverTypeWrapper<UserMetadata>;
  ModifyUserInput: ModifyUserInput;
  ModifyUserResult: ResolverTypeWrapper<
    Omit<ModifyUserResult, 'user'> & { user?: Maybe<ResolversTypes['User']> }
  >;
  ResendVerifyEmailInput: ResendVerifyEmailInput;
  ResendVerifyEmailResult: ResolverTypeWrapper<ResendVerifyEmailResult>;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordResult: ResolverTypeWrapper<ResetPasswordResult>;
  User: ResolverTypeWrapper<UserModel>;
  UserConnection: ResolverTypeWrapper<
    Omit<UserConnection, 'edges'> & {
      edges?: Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>;
    }
  >;
  UserEdge: ResolverTypeWrapper<
    Omit<UserEdge, 'node'> & { node?: Maybe<ResolversTypes['User']> }
  >;
  SignInByEmailInput: SignInByEmailInput;
  SignInByEmailResult: ResolverTypeWrapper<
    Omit<SignInByEmailResult, 'user'> & { user?: Maybe<ResolversTypes['User']> }
  >;
  SignInByUsernameInput: SignInByUsernameInput;
  SignInByUsernameResult: ResolverTypeWrapper<
    Omit<SignInByUsernameResult, 'user'> & {
      user?: Maybe<ResolversTypes['User']>;
    }
  >;
  SignOutResult: ResolverTypeWrapper<SignOutResult>;
  SignUpInput: SignUpInput;
  SignUpResult: ResolverTypeWrapper<SignUpResult>;
  UpdateEmailInput: UpdateEmailInput;
  UpdateEmailResult: ResolverTypeWrapper<UpdateEmailResult>;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdatePasswordResult: ResolverTypeWrapper<UpdatePasswordResult>;
  VerifyEmailInput: VerifyEmailInput;
  VerifyEmailResult: ResolverTypeWrapper<VerifyEmailResult>;
  VerifyUpdateEmailInput: VerifyUpdateEmailInput;
  VerifyUpdateEmailResult: ResolverTypeWrapper<VerifyUpdateEmailResult>;
  AddWatchedDeviceInput: AddWatchedDeviceInput;
  AddWatchedDeviceResult: ResolverTypeWrapper<AddWatchedDeviceResult>;
  RemoveWatchedDeviceInput: RemoveWatchedDeviceInput;
  RemoveWatchedDeviceResult: ResolverTypeWrapper<RemoveWatchedDeviceResult>;
  WatchedDevice: ResolverTypeWrapper<WatchedDevice>;
  WatchedDeviceConnection: ResolverTypeWrapper<WatchedDeviceConnection>;
  WatchedDeviceEdge: ResolverTypeWrapper<WatchedDeviceEdge>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  Mutation: {};
  Error: Error;
  DeleteDeviceInput: DeleteDeviceInput;
  DeleteDeviceResult: DeleteDeviceResult;
  DeviceMetadata: DeviceMetadata;
  ModifyDeviceInput: ModifyDeviceInput;
  Boolean: Scalars['Boolean'];
  ModifyDeviceResult: Omit<ModifyDeviceResult, 'device'> & {
    device?: Maybe<ResolversParentTypes['Device']>;
  };
  NewDeviceInput: NewDeviceInput;
  NewDeviceResult: Omit<NewDeviceResult, 'device'> & {
    device?: Maybe<ResolversParentTypes['Device']>;
  };
  Device: DeviceModel;
  DeviceConnection: Omit<DeviceConnection, 'edges'> & {
    edges?: Maybe<Array<Maybe<ResolversParentTypes['DeviceEdge']>>>;
  };
  DeviceEdge: Omit<DeviceEdge, 'node'> & {
    node?: Maybe<ResolversParentTypes['Device']>;
  };
  FlushLogInput: FlushLogInput;
  FlushLogResult: FlushLogResult;
  Log: Log;
  LogConnection: LogConnection;
  LogEdge: LogEdge;
  Node:
    | ResolversParentTypes['Device']
    | ResolversParentTypes['Log']
    | ResolversParentTypes['User']
    | ResolversParentTypes['WatchedDevice'];
  PageInfo: PageInfo;
  DateTime: Scalars['DateTime'];
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: DeleteUserResult;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ForgotPasswordResult;
  UserMetadata: UserMetadata;
  ModifyUserInput: ModifyUserInput;
  ModifyUserResult: Omit<ModifyUserResult, 'user'> & {
    user?: Maybe<ResolversParentTypes['User']>;
  };
  ResendVerifyEmailInput: ResendVerifyEmailInput;
  ResendVerifyEmailResult: ResendVerifyEmailResult;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordResult: ResetPasswordResult;
  User: UserModel;
  UserConnection: Omit<UserConnection, 'edges'> & {
    edges?: Maybe<Array<Maybe<ResolversParentTypes['UserEdge']>>>;
  };
  UserEdge: Omit<UserEdge, 'node'> & {
    node?: Maybe<ResolversParentTypes['User']>;
  };
  SignInByEmailInput: SignInByEmailInput;
  SignInByEmailResult: Omit<SignInByEmailResult, 'user'> & {
    user?: Maybe<ResolversParentTypes['User']>;
  };
  SignInByUsernameInput: SignInByUsernameInput;
  SignInByUsernameResult: Omit<SignInByUsernameResult, 'user'> & {
    user?: Maybe<ResolversParentTypes['User']>;
  };
  SignOutResult: SignOutResult;
  SignUpInput: SignUpInput;
  SignUpResult: SignUpResult;
  UpdateEmailInput: UpdateEmailInput;
  UpdateEmailResult: UpdateEmailResult;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdatePasswordResult: UpdatePasswordResult;
  VerifyEmailInput: VerifyEmailInput;
  VerifyEmailResult: VerifyEmailResult;
  VerifyUpdateEmailInput: VerifyUpdateEmailInput;
  VerifyUpdateEmailResult: VerifyUpdateEmailResult;
  AddWatchedDeviceInput: AddWatchedDeviceInput;
  AddWatchedDeviceResult: AddWatchedDeviceResult;
  RemoveWatchedDeviceInput: RemoveWatchedDeviceInput;
  RemoveWatchedDeviceResult: RemoveWatchedDeviceResult;
  WatchedDevice: WatchedDevice;
  WatchedDeviceConnection: WatchedDeviceConnection;
  WatchedDeviceEdge: WatchedDeviceEdge;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  device?: Resolver<
    Maybe<ResolversTypes['Device']>,
    ParentType,
    ContextType,
    RequireFields<QueryDeviceArgs, 'id'>
  >;
  deviceActivity?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Log']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryDeviceActivityArgs, 'id'>
  >;
  deviceChart?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Log']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryDeviceChartArgs, 'id' | 'startDate' | 'endDate'>
  >;
  devices?: Resolver<
    Maybe<ResolversTypes['DeviceConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryDevicesArgs, 'first'>
  >;
  devicesByLocation?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Device']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryDevicesByLocationArgs, 'latitude' | 'longitude'>
  >;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['Node']>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, 'id'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
  users?: Resolver<
    Maybe<ResolversTypes['UserConnection']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'first'>
  >;
  watchedDevices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['WatchedDevice']>>>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addWatchedDevice?: Resolver<
    Maybe<ResolversTypes['AddWatchedDeviceResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddWatchedDeviceArgs, 'input'>
  >;
  deleteDevice?: Resolver<
    Maybe<ResolversTypes['DeleteDeviceResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDeviceArgs, 'input'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['DeleteUserResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'input'>
  >;
  empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flushLog?: Resolver<
    Maybe<ResolversTypes['FlushLogResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationFlushLogArgs, 'input'>
  >;
  forgotPassword?: Resolver<
    Maybe<ResolversTypes['ForgotPasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'input'>
  >;
  modifyDevice?: Resolver<
    Maybe<ResolversTypes['ModifyDeviceResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationModifyDeviceArgs, 'input'>
  >;
  modifyUser?: Resolver<
    Maybe<ResolversTypes['ModifyUserResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationModifyUserArgs, 'input'>
  >;
  newDevice?: Resolver<
    Maybe<ResolversTypes['NewDeviceResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationNewDeviceArgs, 'input'>
  >;
  removeWatchedDevice?: Resolver<
    Maybe<ResolversTypes['RemoveWatchedDeviceResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveWatchedDeviceArgs, 'input'>
  >;
  resendVerifyEmail?: Resolver<
    Maybe<ResolversTypes['ResendVerifyEmailResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationResendVerifyEmailArgs, 'input'>
  >;
  resetPassword?: Resolver<
    Maybe<ResolversTypes['ResetPasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationResetPasswordArgs, 'input'>
  >;
  signInByEmail?: Resolver<
    Maybe<ResolversTypes['SignInByEmailResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationSignInByEmailArgs, 'input'>
  >;
  signInByUsername?: Resolver<
    Maybe<ResolversTypes['SignInByUsernameResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationSignInByUsernameArgs, 'input'>
  >;
  signOut?: Resolver<
    Maybe<ResolversTypes['SignOutResult']>,
    ParentType,
    ContextType
  >;
  signUp?: Resolver<
    Maybe<ResolversTypes['SignUpResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationSignUpArgs, 'input'>
  >;
  updateEmail?: Resolver<
    Maybe<ResolversTypes['UpdateEmailResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailArgs, 'input'>
  >;
  updatePassword?: Resolver<
    Maybe<ResolversTypes['UpdatePasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePasswordArgs, 'input'>
  >;
  verifyEmail?: Resolver<
    Maybe<ResolversTypes['VerifyEmailResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationVerifyEmailArgs, 'input'>
  >;
  verifyUpdateEmail?: Resolver<
    Maybe<ResolversTypes['VerifyUpdateEmailResult']>,
    ParentType,
    ContextType,
    RequireFields<MutationVerifyUpdateEmailArgs, 'input'>
  >;
};

export type ErrorResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeleteDeviceResult'] = ResolversParentTypes['DeleteDeviceResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceMetadataResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeviceMetadata'] = ResolversParentTypes['DeviceMetadata']
> = {
  lastEntryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastWriteDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  writeKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifyDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ModifyDeviceResult'] = ResolversParentTypes['ModifyDeviceResult']
> = {
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['NewDeviceResult'] = ResolversParentTypes['NewDeviceResult']
> = {
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']
> = {
  createdDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  elevation?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logs?: Resolver<
    Maybe<ResolversTypes['LogConnection']>,
    ParentType,
    ContextType,
    RequireFields<DeviceLogsArgs, 'first'>
  >;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes['DeviceMetadata']>,
    ParentType,
    ContextType
  >;
  modifyDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeviceConnection'] = ResolversParentTypes['DeviceConnection']
> = {
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DeviceEdge']>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeviceEdge'] = ResolversParentTypes['DeviceEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlushLogResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['FlushLogResult'] = ResolversParentTypes['FlushLogResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']
> = {
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['LogConnection'] = ResolversParentTypes['LogConnection']
> = {
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['LogEdge']>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['LogEdge'] = ResolversParentTypes['LogEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<
    'Device' | 'Log' | 'User' | 'WatchedDevice',
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteUserResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeleteUserResult'] = ResolversParentTypes['DeleteUserResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForgotPasswordResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ForgotPasswordResult'] = ResolversParentTypes['ForgotPasswordResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMetadataResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserMetadata'] = ResolversParentTypes['UserMetadata']
> = {
  lastPasswordChangedDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  lastSignInDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  lastSignInIpAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  signInCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifyUserResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ModifyUserResult'] = ResolversParentTypes['ModifyUserResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResendVerifyEmailResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ResendVerifyEmailResult'] = ResolversParentTypes['ResendVerifyEmailResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResetPasswordResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ResetPasswordResult'] = ResolversParentTypes['ResetPasswordResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  devices?: Resolver<
    Maybe<ResolversTypes['DeviceConnection']>,
    ParentType,
    ContextType,
    RequireFields<UserDevicesArgs, 'first'>
  >;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPublic?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metadata?: Resolver<
    Maybe<ResolversTypes['UserMetadata']>,
    ParentType,
    ContextType
  >;
  modifyDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watchedDevices?: Resolver<
    Maybe<ResolversTypes['WatchedDeviceConnection']>,
    ParentType,
    ContextType,
    RequireFields<UserWatchedDevicesArgs, 'first'>
  >;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']
> = {
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInByEmailResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SignInByEmailResult'] = ResolversParentTypes['SignInByEmailResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInByUsernameResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SignInByUsernameResult'] = ResolversParentTypes['SignInByUsernameResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignOutResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SignOutResult'] = ResolversParentTypes['SignOutResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignUpResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SignUpResult'] = ResolversParentTypes['SignUpResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateEmailResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UpdateEmailResult'] = ResolversParentTypes['UpdateEmailResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePasswordResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UpdatePasswordResult'] = ResolversParentTypes['UpdatePasswordResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyEmailResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['VerifyEmailResult'] = ResolversParentTypes['VerifyEmailResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyUpdateEmailResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['VerifyUpdateEmailResult'] = ResolversParentTypes['VerifyUpdateEmailResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddWatchedDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AddWatchedDeviceResult'] = ResolversParentTypes['AddWatchedDeviceResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watchedDevice?: Resolver<
    Maybe<ResolversTypes['WatchedDevice']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveWatchedDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['RemoveWatchedDeviceResult'] = ResolversParentTypes['RemoveWatchedDeviceResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchedDeviceResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['WatchedDevice'] = ResolversParentTypes['WatchedDevice']
> = {
  createdDate?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchedDeviceConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['WatchedDeviceConnection'] = ResolversParentTypes['WatchedDeviceConnection']
> = {
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['WatchedDeviceEdge']>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WatchedDeviceEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['WatchedDeviceEdge'] = ResolversParentTypes['WatchedDeviceEdge']
> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['WatchedDevice']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  DeleteDeviceResult?: DeleteDeviceResultResolvers<ContextType>;
  DeviceMetadata?: DeviceMetadataResolvers<ContextType>;
  ModifyDeviceResult?: ModifyDeviceResultResolvers<ContextType>;
  NewDeviceResult?: NewDeviceResultResolvers<ContextType>;
  Device?: DeviceResolvers<ContextType>;
  DeviceConnection?: DeviceConnectionResolvers<ContextType>;
  DeviceEdge?: DeviceEdgeResolvers<ContextType>;
  FlushLogResult?: FlushLogResultResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  LogConnection?: LogConnectionResolvers<ContextType>;
  LogEdge?: LogEdgeResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteUserResult?: DeleteUserResultResolvers<ContextType>;
  ForgotPasswordResult?: ForgotPasswordResultResolvers<ContextType>;
  UserMetadata?: UserMetadataResolvers<ContextType>;
  ModifyUserResult?: ModifyUserResultResolvers<ContextType>;
  ResendVerifyEmailResult?: ResendVerifyEmailResultResolvers<ContextType>;
  ResetPasswordResult?: ResetPasswordResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  SignInByEmailResult?: SignInByEmailResultResolvers<ContextType>;
  SignInByUsernameResult?: SignInByUsernameResultResolvers<ContextType>;
  SignOutResult?: SignOutResultResolvers<ContextType>;
  SignUpResult?: SignUpResultResolvers<ContextType>;
  UpdateEmailResult?: UpdateEmailResultResolvers<ContextType>;
  UpdatePasswordResult?: UpdatePasswordResultResolvers<ContextType>;
  VerifyEmailResult?: VerifyEmailResultResolvers<ContextType>;
  VerifyUpdateEmailResult?: VerifyUpdateEmailResultResolvers<ContextType>;
  AddWatchedDeviceResult?: AddWatchedDeviceResultResolvers<ContextType>;
  RemoveWatchedDeviceResult?: RemoveWatchedDeviceResultResolvers<ContextType>;
  WatchedDevice?: WatchedDeviceResolvers<ContextType>;
  WatchedDeviceConnection?: WatchedDeviceConnectionResolvers<ContextType>;
  WatchedDeviceEdge?: WatchedDeviceEdgeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
