/* eslint-disable */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { UserModel } from 'src/database/models/User';
import { UserMetadataModel } from 'src/database/models/UserMetadata';
import { DeviceModel } from 'src/database/models/Device';
import { DeviceMetadataModel } from 'src/database/models/DeviceMetadata';
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
  /** Custom scalar for timestamps. */
  DateTime: Date;
};

/** Relay specification. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** End cursor. */
  endCursor?: Maybe<Scalars['String']>;
  /** Has next page. */
  hasNextPage: Scalars['Boolean'];
  /** Has previous page. */
  hasPreviousPage: Scalars['Boolean'];
  /** Start cursor. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Root query. */
export type Query = {
  __typename?: 'Query';
  /** Node. */
  node?: Maybe<Node>;
  /** Page info. */
  pageInfo?: Maybe<PageInfo>;
  /** View device. */
  viewDevice: ViewDeviceResult;
  /** View all devices. */
  viewDevices: ViewDevicesResult;
  /** View logs. */
  viewLogs: ViewLogsResult;
  /** View user. */
  viewUser: ViewUserResult;
};

/** Root query. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Root query. */
export type QueryViewDeviceArgs = {
  input: ViewDeviceInput;
};

/** Root query. */
export type QueryViewDevicesArgs = {
  input: ViewDevicesInput;
};

/** Root query. */
export type QueryViewLogsArgs = {
  input: ViewLogsInput;
};

/** Root mutation. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Create device. */
  createDevice: CreateDeviceResult;
  /** Delete device. */
  deleteDevice: DeleteDeviceResult;
  /** Delete logs. */
  deleteLogs: DeleteLogsResult;
  /** Delete user. */
  deleteUser: DeleteUserResult;
  /** Empty. */
  empty?: Maybe<Scalars['String']>;
  /** Forgot password. */
  forgotPassword: ForgotPasswordResult;
  /** Modify device. */
  modifyDevice: ModifyDeviceResult;
  /** Modify user. */
  modifyUser: ModifyUserResult;
  /** Resend verify email. */
  resendVerifyEmail: ResendVerifyEmailResult;
  /** Reset password. */
  resetPassword: ResetPasswordResult;
  /** Sign in by email. */
  signInByEmail: SignInByEmailResult;
  /** Sign in by username. */
  signInByUsername: SignInByUsernameResult;
  /** Sign out. */
  signOut: SignOutResult;
  /** Sign up. */
  signUp: SignUpResult;
  /** Update email. */
  updateEmail: UpdateEmailResult;
  /** Update password. */
  updatePassword: UpdatePasswordResult;
  /** Verify email. */
  verifyEmail: VerifyEmailResult;
  /** Verify update email. */
  verifyUpdateEmail: VerifyUpdateEmailResult;
};

/** Root mutation. */
export type MutationCreateDeviceArgs = {
  input: CreateDeviceInput;
};

/** Root mutation. */
export type MutationDeleteDeviceArgs = {
  input: DeleteDeviceInput;
};

/** Root mutation. */
export type MutationDeleteLogsArgs = {
  input: DeleteLogsInput;
};

/** Root mutation. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** Root mutation. */
export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};

/** Root mutation. */
export type MutationModifyDeviceArgs = {
  input: ModifyDeviceInput;
};

/** Root mutation. */
export type MutationModifyUserArgs = {
  input: ModifyUserInput;
};

/** Root mutation. */
export type MutationResendVerifyEmailArgs = {
  input: ResendVerifyEmailInput;
};

/** Root mutation. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

/** Root mutation. */
export type MutationSignInByEmailArgs = {
  input: SignInByEmailInput;
};

/** Root mutation. */
export type MutationSignInByUsernameArgs = {
  input: SignInByUsernameInput;
};

/** Root mutation. */
export type MutationSignUpArgs = {
  input: SignUpInput;
};

/** Root mutation. */
export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};

/** Root mutation. */
export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};

/** Root mutation. */
export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

/** Root mutation. */
export type MutationVerifyUpdateEmailArgs = {
  input: VerifyUpdateEmailInput;
};

/** Global node. */
export type Node = {
  /** Id. */
  id: Scalars['ID'];
};

/** Error type. */
export type Error = {
  __typename?: 'Error';
  /** Message. */
  message: Scalars['String'];
  /** Path. */
  path?: Maybe<Scalars['String']>;
};

/** Provided data for create device. */
export type CreateDeviceInput = {
  /** Device description. */
  description?: Maybe<Scalars['String']>;
  /** Device field. */
  field1: Scalars['String'];
  /** Device field. */
  field2?: Maybe<Scalars['String']>;
  /** Device field. */
  field3?: Maybe<Scalars['String']>;
  /** Device field. */
  field4?: Maybe<Scalars['String']>;
  /** Device field. */
  field5?: Maybe<Scalars['String']>;
  /** Device latitude. */
  latitude: Scalars['Float'];
  /** Device longitude. */
  longitude: Scalars['Float'];
  /** Device name. */
  name: Scalars['String'];
};

/** Create device result. */
export type CreateDeviceResult = {
  __typename?: 'CreateDeviceResult';
  /** Device. */
  device?: Maybe<Device>;
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for delete device. */
export type DeleteDeviceInput = {
  /** Device id. */
  id: Scalars['ID'];
};

/** Delete device result. */
export type DeleteDeviceResult = {
  __typename?: 'DeleteDeviceResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Device metadata type. */
export type DeviceMetadata = {
  __typename?: 'DeviceMetadata';
  /** Device's last entry id. */
  lastEntryId?: Maybe<Scalars['Int']>;
  /** Device's last write date. */
  lastWriteDate?: Maybe<Scalars['DateTime']>;
  /** Device's write key. */
  writeKey?: Maybe<Scalars['String']>;
};

/** Provided data for modify device. */
export type ModifyDeviceInput = {
  /** Device description. */
  description?: Maybe<Scalars['String']>;
  /** Device elevation. */
  elevation?: Maybe<Scalars['Int']>;
  /** Device field. */
  field1?: Maybe<Scalars['String']>;
  /** Device field. */
  field2?: Maybe<Scalars['String']>;
  /** Device field. */
  field3?: Maybe<Scalars['String']>;
  /** Device field. */
  field4?: Maybe<Scalars['String']>;
  /** Device field. */
  field5?: Maybe<Scalars['String']>;
  /** Device id. */
  id: Scalars['ID'];
  /** Device public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Device latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** Device longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** Device name. */
  name?: Maybe<Scalars['String']>;
  /** Device url. */
  url?: Maybe<Scalars['String']>;
};

/** Modify device result. */
export type ModifyDeviceResult = {
  __typename?: 'ModifyDeviceResult';
  /** Device. */
  device?: Maybe<Device>;
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Device type. */
export type Device = Node & {
  __typename?: 'Device';
  /** Created date. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** Device description. */
  description?: Maybe<Scalars['String']>;
  /** Device elevation. */
  elevation?: Maybe<Scalars['Int']>;
  /** Device field. */
  field1?: Maybe<Scalars['String']>;
  /** Device field. */
  field2?: Maybe<Scalars['String']>;
  /** Device field. */
  field3?: Maybe<Scalars['String']>;
  /** Device field. */
  field4?: Maybe<Scalars['String']>;
  /** Device field. */
  field5?: Maybe<Scalars['String']>;
  /** Device id. */
  id: Scalars['ID'];
  /** Device public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Device latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** Device longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** Device metadata. */
  metadata?: Maybe<DeviceMetadata>;
  /** Modify date. */
  modifyDate?: Maybe<Scalars['DateTime']>;
  /** Device name. */
  name?: Maybe<Scalars['String']>;
  /** Device url. */
  url?: Maybe<Scalars['String']>;
  /** Device owner. */
  user?: Maybe<User>;
  /** Device owner id. */
  userId: Scalars['ID'];
  /** Device logs. */
  logs?: Maybe<Array<Maybe<Log>>>;
};

/** Provided data for view device. */
export type ViewDeviceInput = {
  /** Device id. */
  id: Scalars['ID'];
};

/** Provided data for view devices. */
export type ViewDevicesInput = {
  /** test */
  test?: Maybe<Scalars['String']>;
};

/** View devices result. */
export type ViewDevicesResult = {
  __typename?: 'ViewDevicesResult';
  /** Devices. */
  devices?: Maybe<Array<Maybe<Device>>>;
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** View device result. */
export type ViewDeviceResult = {
  __typename?: 'ViewDeviceResult';
  /** Device. */
  device?: Maybe<Device>;
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Provided data for delete logs. */
export type DeleteLogsInput = {
  /** Device id. */
  id: Scalars['ID'];
};

/** Delete logs result. */
export type DeleteLogsResult = {
  __typename?: 'DeleteLogsResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Log type. */
export type Log = {
  __typename?: 'Log';
  /** Log time. */
  time: Scalars['DateTime'];
  /** Log device id. */
  deviceId: Scalars['String'];
  /** Log field. */
  field1?: Maybe<Scalars['String']>;
  /** Log field. */
  field2?: Maybe<Scalars['String']>;
  /** Log field. */
  field3?: Maybe<Scalars['String']>;
  /** Log field. */
  field4?: Maybe<Scalars['String']>;
  /** Log field. */
  field5?: Maybe<Scalars['String']>;
};

/** Provided data for view log. */
export type ViewLogsInput = {
  /** Device id. */
  id: Scalars['ID'];
  /** Start date. */
  start: Scalars['DateTime'];
  /** End date. */
  end: Scalars['DateTime'];
};

/** View logs result. */
export type ViewLogsResult = {
  __typename?: 'ViewLogsResult';
  /** Logs. */
  logs?: Maybe<Array<Maybe<Log>>>;
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
};

/** Provided data for delete user. */
export type DeleteUserInput = {
  /** Password. */
  password: Scalars['String'];
};

/** Delete user result. */
export type DeleteUserResult = {
  __typename?: 'DeleteUserResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for forgot password. */
export type ForgotPasswordInput = {
  /** Email. */
  email: Scalars['String'];
};

/** Forgot password result. */
export type ForgotPasswordResult = {
  __typename?: 'ForgotPasswordResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
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

/** Provided data for modify user. */
export type ModifyUserInput = {
  /** User bio. */
  bio?: Maybe<Scalars['String']>;
  /** User country. */
  country?: Maybe<Scalars['String']>;
  /** User first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** User last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** User longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** User username. */
  username?: Maybe<Scalars['String']>;
  /** User website. */
  website?: Maybe<Scalars['String']>;
};

/** Modify user result. */
export type ModifyUserResult = {
  __typename?: 'ModifyUserResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
  /** User. */
  user?: Maybe<User>;
};

/** Provided data for resend verify email. */
export type ResendVerifyEmailInput = {
  /** Email. */
  email: Scalars['String'];
};

/** Resend verify email result. */
export type ResendVerifyEmailResult = {
  __typename?: 'ResendVerifyEmailResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for reset password. */
export type ResetPasswordInput = {
  /** Reset password token. */
  resetPasswordToken: Scalars['String'];
};

/** Reset password result. */
export type ResetPasswordResult = {
  __typename?: 'ResetPasswordResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** User type. */
export type User = Node & {
  __typename?: 'User';
  /** User bio. */
  bio?: Maybe<Scalars['String']>;
  /** User country. */
  country?: Maybe<Scalars['String']>;
  /** User created date. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** User devices. */
  devices?: Maybe<Array<Maybe<Device>>>;
  /** User first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User id. */
  id: Scalars['ID'];
  /** User public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** User last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** User longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** User metadata */
  metadata?: Maybe<UserMetadata>;
  /** User modify date. */
  modifyDate?: Maybe<Scalars['DateTime']>;
  /** User username. */
  username?: Maybe<Scalars['String']>;
  /** User website. */
  website?: Maybe<Scalars['String']>;
};

/** Provided data for sign in email. */
export type SignInByEmailInput = {
  /** Email. */
  email: Scalars['String'];
  /** Password. */
  password: Scalars['String'];
};

/** Sign in by email result. */
export type SignInByEmailResult = {
  __typename?: 'SignInByEmailResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for sign in by username. */
export type SignInByUsernameInput = {
  /** Password. */
  password: Scalars['String'];
  /** Username. */
  username: Scalars['String'];
};

/** Sign in by username result. */
export type SignInByUsernameResult = {
  __typename?: 'SignInByUsernameResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Sign out result. */
export type SignOutResult = {
  __typename?: 'SignOutResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for sign up. */
export type SignUpInput = {
  /** User email. */
  email: Scalars['String'];
  /** User first name. */
  firstName: Scalars['String'];
  /** User last name. */
  lastName: Scalars['String'];
  /** User password. */
  password: Scalars['String'];
  /** User username. */
  username: Scalars['String'];
};

/** Sign up result. */
export type SignUpResult = {
  __typename?: 'SignUpResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for update email. */
export type UpdateEmailInput = {
  /** Email. */
  email: Scalars['String'];
};

/** Update email result. */
export type UpdateEmailResult = {
  __typename?: 'UpdateEmailResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for update password. */
export type UpdatePasswordInput = {
  /** Current password. */
  currentPassword: Scalars['String'];
  /** New password. */
  newPassword: Scalars['String'];
};

/** Update password result. */
export type UpdatePasswordResult = {
  __typename?: 'UpdatePasswordResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Response message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for verify email. */
export type VerifyEmailInput = {
  /** Verify email token. */
  verifyEmailToken: Scalars['String'];
};

/** Verify email result. */
export type VerifyEmailResult = {
  __typename?: 'VerifyEmailResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Response message. */
  message?: Maybe<Scalars['String']>;
};

/** Provided data for verify update email. */
export type VerifyUpdateEmailInput = {
  /** Verify update email token. */
  verifyUpdateEmailToken: Scalars['String'];
};

/** Verify update email result. */
export type VerifyUpdateEmailResult = {
  __typename?: 'VerifyUpdateEmailResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** Message. */
  message?: Maybe<Scalars['String']>;
};

/** View user result. */
export type ViewUserResult = {
  __typename?: 'ViewUserResult';
  /** Errors. */
  errors?: Maybe<Array<Maybe<Error>>>;
  /** User. */
  user?: Maybe<User>;
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
  PageInfo: ResolverTypeWrapper<PageInfo>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Device'] | ResolversTypes['User'];
  Error: ResolverTypeWrapper<Error>;
  CreateDeviceInput: CreateDeviceInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CreateDeviceResult: ResolverTypeWrapper<
    Omit<CreateDeviceResult, 'device'> & {
      device?: Maybe<ResolversTypes['Device']>;
    }
  >;
  DeleteDeviceInput: DeleteDeviceInput;
  DeleteDeviceResult: ResolverTypeWrapper<DeleteDeviceResult>;
  DeviceMetadata: ResolverTypeWrapper<DeviceMetadataModel>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ModifyDeviceInput: ModifyDeviceInput;
  ModifyDeviceResult: ResolverTypeWrapper<
    Omit<ModifyDeviceResult, 'device'> & {
      device?: Maybe<ResolversTypes['Device']>;
    }
  >;
  Device: ResolverTypeWrapper<DeviceModel>;
  ViewDeviceInput: ViewDeviceInput;
  ViewDevicesInput: ViewDevicesInput;
  ViewDevicesResult: ResolverTypeWrapper<
    Omit<ViewDevicesResult, 'devices'> & {
      devices?: Maybe<Array<Maybe<ResolversTypes['Device']>>>;
    }
  >;
  ViewDeviceResult: ResolverTypeWrapper<
    Omit<ViewDeviceResult, 'device'> & {
      device?: Maybe<ResolversTypes['Device']>;
    }
  >;
  DeleteLogsInput: DeleteLogsInput;
  DeleteLogsResult: ResolverTypeWrapper<DeleteLogsResult>;
  Log: ResolverTypeWrapper<Log>;
  ViewLogsInput: ViewLogsInput;
  ViewLogsResult: ResolverTypeWrapper<ViewLogsResult>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: ResolverTypeWrapper<DeleteUserResult>;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ResolverTypeWrapper<ForgotPasswordResult>;
  UserMetadata: ResolverTypeWrapper<UserMetadataModel>;
  ModifyUserInput: ModifyUserInput;
  ModifyUserResult: ResolverTypeWrapper<
    Omit<ModifyUserResult, 'user'> & { user?: Maybe<ResolversTypes['User']> }
  >;
  ResendVerifyEmailInput: ResendVerifyEmailInput;
  ResendVerifyEmailResult: ResolverTypeWrapper<ResendVerifyEmailResult>;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordResult: ResolverTypeWrapper<ResetPasswordResult>;
  User: ResolverTypeWrapper<UserModel>;
  SignInByEmailInput: SignInByEmailInput;
  SignInByEmailResult: ResolverTypeWrapper<SignInByEmailResult>;
  SignInByUsernameInput: SignInByUsernameInput;
  SignInByUsernameResult: ResolverTypeWrapper<SignInByUsernameResult>;
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
  ViewUserResult: ResolverTypeWrapper<
    Omit<ViewUserResult, 'user'> & { user?: Maybe<ResolversTypes['User']> }
  >;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  PageInfo: PageInfo;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
  Node: ResolversParentTypes['Device'] | ResolversParentTypes['User'];
  Error: Error;
  CreateDeviceInput: CreateDeviceInput;
  Float: Scalars['Float'];
  CreateDeviceResult: Omit<CreateDeviceResult, 'device'> & {
    device?: Maybe<ResolversParentTypes['Device']>;
  };
  DeleteDeviceInput: DeleteDeviceInput;
  DeleteDeviceResult: DeleteDeviceResult;
  DeviceMetadata: DeviceMetadataModel;
  Int: Scalars['Int'];
  ModifyDeviceInput: ModifyDeviceInput;
  ModifyDeviceResult: Omit<ModifyDeviceResult, 'device'> & {
    device?: Maybe<ResolversParentTypes['Device']>;
  };
  Device: DeviceModel;
  ViewDeviceInput: ViewDeviceInput;
  ViewDevicesInput: ViewDevicesInput;
  ViewDevicesResult: Omit<ViewDevicesResult, 'devices'> & {
    devices?: Maybe<Array<Maybe<ResolversParentTypes['Device']>>>;
  };
  ViewDeviceResult: Omit<ViewDeviceResult, 'device'> & {
    device?: Maybe<ResolversParentTypes['Device']>;
  };
  DeleteLogsInput: DeleteLogsInput;
  DeleteLogsResult: DeleteLogsResult;
  Log: Log;
  ViewLogsInput: ViewLogsInput;
  ViewLogsResult: ViewLogsResult;
  DateTime: Scalars['DateTime'];
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: DeleteUserResult;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ForgotPasswordResult;
  UserMetadata: UserMetadataModel;
  ModifyUserInput: ModifyUserInput;
  ModifyUserResult: Omit<ModifyUserResult, 'user'> & {
    user?: Maybe<ResolversParentTypes['User']>;
  };
  ResendVerifyEmailInput: ResendVerifyEmailInput;
  ResendVerifyEmailResult: ResendVerifyEmailResult;
  ResetPasswordInput: ResetPasswordInput;
  ResetPasswordResult: ResetPasswordResult;
  User: UserModel;
  SignInByEmailInput: SignInByEmailInput;
  SignInByEmailResult: SignInByEmailResult;
  SignInByUsernameInput: SignInByUsernameInput;
  SignInByUsernameResult: SignInByUsernameResult;
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
  ViewUserResult: Omit<ViewUserResult, 'user'> & {
    user?: Maybe<ResolversParentTypes['User']>;
  };
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

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  node?: Resolver<
    Maybe<ResolversTypes['Node']>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, 'id'>
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes['PageInfo']>,
    ParentType,
    ContextType
  >;
  viewDevice?: Resolver<
    ResolversTypes['ViewDeviceResult'],
    ParentType,
    ContextType,
    RequireFields<QueryViewDeviceArgs, 'input'>
  >;
  viewDevices?: Resolver<
    ResolversTypes['ViewDevicesResult'],
    ParentType,
    ContextType,
    RequireFields<QueryViewDevicesArgs, 'input'>
  >;
  viewLogs?: Resolver<
    ResolversTypes['ViewLogsResult'],
    ParentType,
    ContextType,
    RequireFields<QueryViewLogsArgs, 'input'>
  >;
  viewUser?: Resolver<
    ResolversTypes['ViewUserResult'],
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createDevice?: Resolver<
    ResolversTypes['CreateDeviceResult'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDeviceArgs, 'input'>
  >;
  deleteDevice?: Resolver<
    ResolversTypes['DeleteDeviceResult'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteDeviceArgs, 'input'>
  >;
  deleteLogs?: Resolver<
    ResolversTypes['DeleteLogsResult'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteLogsArgs, 'input'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['DeleteUserResult'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'input'>
  >;
  empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forgotPassword?: Resolver<
    ResolversTypes['ForgotPasswordResult'],
    ParentType,
    ContextType,
    RequireFields<MutationForgotPasswordArgs, 'input'>
  >;
  modifyDevice?: Resolver<
    ResolversTypes['ModifyDeviceResult'],
    ParentType,
    ContextType,
    RequireFields<MutationModifyDeviceArgs, 'input'>
  >;
  modifyUser?: Resolver<
    ResolversTypes['ModifyUserResult'],
    ParentType,
    ContextType,
    RequireFields<MutationModifyUserArgs, 'input'>
  >;
  resendVerifyEmail?: Resolver<
    ResolversTypes['ResendVerifyEmailResult'],
    ParentType,
    ContextType,
    RequireFields<MutationResendVerifyEmailArgs, 'input'>
  >;
  resetPassword?: Resolver<
    ResolversTypes['ResetPasswordResult'],
    ParentType,
    ContextType,
    RequireFields<MutationResetPasswordArgs, 'input'>
  >;
  signInByEmail?: Resolver<
    ResolversTypes['SignInByEmailResult'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInByEmailArgs, 'input'>
  >;
  signInByUsername?: Resolver<
    ResolversTypes['SignInByUsernameResult'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInByUsernameArgs, 'input'>
  >;
  signOut?: Resolver<ResolversTypes['SignOutResult'], ParentType, ContextType>;
  signUp?: Resolver<
    ResolversTypes['SignUpResult'],
    ParentType,
    ContextType,
    RequireFields<MutationSignUpArgs, 'input'>
  >;
  updateEmail?: Resolver<
    ResolversTypes['UpdateEmailResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEmailArgs, 'input'>
  >;
  updatePassword?: Resolver<
    ResolversTypes['UpdatePasswordResult'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePasswordArgs, 'input'>
  >;
  verifyEmail?: Resolver<
    ResolversTypes['VerifyEmailResult'],
    ParentType,
    ContextType,
    RequireFields<MutationVerifyEmailArgs, 'input'>
  >;
  verifyUpdateEmail?: Resolver<
    ResolversTypes['VerifyUpdateEmailResult'],
    ParentType,
    ContextType,
    RequireFields<MutationVerifyUpdateEmailArgs, 'input'>
  >;
};

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<'Device' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type ErrorResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CreateDeviceResult'] = ResolversParentTypes['CreateDeviceResult']
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
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Log']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewDevicesResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ViewDevicesResult'] = ResolversParentTypes['ViewDevicesResult']
> = {
  devices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Device']>>>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewDeviceResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ViewDeviceResult'] = ResolversParentTypes['ViewDeviceResult']
> = {
  device?: Resolver<Maybe<ResolversTypes['Device']>, ParentType, ContextType>;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteLogsResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['DeleteLogsResult'] = ResolversParentTypes['DeleteLogsResult']
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
  time?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deviceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewLogsResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ViewLogsResult'] = ResolversParentTypes['ViewLogsResult']
> = {
  logs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Log']>>>,
    ParentType,
    ContextType
  >;
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
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
    Maybe<Array<Maybe<ResolversTypes['Device']>>>,
    ParentType,
    ContextType
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
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type ViewUserResultResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ViewUserResult'] = ResolversParentTypes['ViewUserResult']
> = {
  errors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Error']>>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  CreateDeviceResult?: CreateDeviceResultResolvers<ContextType>;
  DeleteDeviceResult?: DeleteDeviceResultResolvers<ContextType>;
  DeviceMetadata?: DeviceMetadataResolvers<ContextType>;
  ModifyDeviceResult?: ModifyDeviceResultResolvers<ContextType>;
  Device?: DeviceResolvers<ContextType>;
  ViewDevicesResult?: ViewDevicesResultResolvers<ContextType>;
  ViewDeviceResult?: ViewDeviceResultResolvers<ContextType>;
  DeleteLogsResult?: DeleteLogsResultResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  ViewLogsResult?: ViewLogsResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteUserResult?: DeleteUserResultResolvers<ContextType>;
  ForgotPasswordResult?: ForgotPasswordResultResolvers<ContextType>;
  UserMetadata?: UserMetadataResolvers<ContextType>;
  ModifyUserResult?: ModifyUserResultResolvers<ContextType>;
  ResendVerifyEmailResult?: ResendVerifyEmailResultResolvers<ContextType>;
  ResetPasswordResult?: ResetPasswordResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  SignInByEmailResult?: SignInByEmailResultResolvers<ContextType>;
  SignInByUsernameResult?: SignInByUsernameResultResolvers<ContextType>;
  SignOutResult?: SignOutResultResolvers<ContextType>;
  SignUpResult?: SignUpResultResolvers<ContextType>;
  UpdateEmailResult?: UpdateEmailResultResolvers<ContextType>;
  UpdatePasswordResult?: UpdatePasswordResultResolvers<ContextType>;
  VerifyEmailResult?: VerifyEmailResultResolvers<ContextType>;
  VerifyUpdateEmailResult?: VerifyUpdateEmailResultResolvers<ContextType>;
  ViewUserResult?: ViewUserResultResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
