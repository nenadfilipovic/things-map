/* eslint-disable */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { User as UserModel } from 'src/database/models/User';
import { UserMetadata as UserMetadataModel } from 'src/database/models/UserMetadata';
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
  /** Current user. */
  viewUser: ViewUserResult;
};

/** Root query. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** Root mutation. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Delete user. */
  deleteUser: DeleteUserResult;
  /** Empty. */
  empty?: Maybe<Scalars['String']>;
  /** Forgot password. */
  forgotPassword: ForgotPasswordResult;
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
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** Root mutation. */
export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
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

/** Provided data for delete user. */
export type DeleteUserInput = {
  /** User's password. */
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
  /** User's email. */
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
export type Metadata = {
  __typename?: 'Metadata';
  /** User's last password changed date. */
  lastPasswordChangedDate?: Maybe<Scalars['DateTime']>;
  /** User's last sign in date. */
  lastSignInDate?: Maybe<Scalars['DateTime']>;
  /** User's last sign in ip address. */
  lastSignInIpAddress?: Maybe<Scalars['String']>;
  /** User's sign in count. */
  signInCount?: Maybe<Scalars['Int']>;
};

/** Provided data for modify user. */
export type ModifyUserInput = {
  /** User's bio. */
  bio?: Maybe<Scalars['String']>;
  /** User's country. */
  country?: Maybe<Scalars['String']>;
  /** User's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** User's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** User's longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** User's username. */
  username?: Maybe<Scalars['String']>;
  /** User's website. */
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
  /** User's email. */
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
  /** User's reset password token. */
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
  /** User's bio. */
  bio?: Maybe<Scalars['String']>;
  /** User's country. */
  country?: Maybe<Scalars['String']>;
  /** User's created date. */
  createdDate?: Maybe<Scalars['DateTime']>;
  /** User's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's id. */
  id: Scalars['ID'];
  /** User's public flag. */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** User's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's latitude. */
  latitude?: Maybe<Scalars['Float']>;
  /** User's longitude. */
  longitude?: Maybe<Scalars['Float']>;
  /** User's metadata */
  metadata?: Maybe<Metadata>;
  /** User's modify date. */
  modifyDate?: Maybe<Scalars['DateTime']>;
  /** User's username. */
  username?: Maybe<Scalars['String']>;
  /** User's website. */
  website?: Maybe<Scalars['String']>;
};

/** Provided data for sign in email. */
export type SignInByEmailInput = {
  /** User's email. */
  email: Scalars['String'];
  /** User's password. */
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
  /** User's password. */
  password: Scalars['String'];
  /** User's username. */
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
  /** User's email. */
  email: Scalars['String'];
  /** User's first name. */
  firstName: Scalars['String'];
  /** User's last name. */
  lastName: Scalars['String'];
  /** User's password. */
  password: Scalars['String'];
  /** User's username. */
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
  /** User's new email. */
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
  /** User's current password. */
  currentPassword: Scalars['String'];
  /** User's new password. */
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
  /** User's verify email token. */
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
  /** User's verify update email token. */
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
  Node: ResolversTypes['User'];
  Error: ResolverTypeWrapper<Error>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: ResolverTypeWrapper<DeleteUserResult>;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ResolverTypeWrapper<ForgotPasswordResult>;
  Metadata: ResolverTypeWrapper<UserMetadataModel>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ModifyUserInput: ModifyUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
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
  Node: ResolversParentTypes['User'];
  Error: Error;
  DateTime: Scalars['DateTime'];
  DeleteUserInput: DeleteUserInput;
  DeleteUserResult: DeleteUserResult;
  ForgotPasswordInput: ForgotPasswordInput;
  ForgotPasswordResult: ForgotPasswordResult;
  Metadata: UserMetadataModel;
  Int: Scalars['Int'];
  ModifyUserInput: ModifyUserInput;
  Float: Scalars['Float'];
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
  __resolveType: TypeResolveFn<'User', ParentType, ContextType>;
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

export type MetadataResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']
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
    Maybe<ResolversTypes['Metadata']>,
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
  DateTime?: GraphQLScalarType;
  DeleteUserResult?: DeleteUserResultResolvers<ContextType>;
  ForgotPasswordResult?: ForgotPasswordResultResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
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
