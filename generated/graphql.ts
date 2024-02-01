import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']['input']>;
  _gt: InputMaybe<Scalars['Boolean']['input']>;
  _gte: InputMaybe<Scalars['Boolean']['input']>;
  _in: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Boolean']['input']>;
  _lte: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<Scalars['Boolean']['input']>;
  _nin: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']['input']>;
  _gt: InputMaybe<Scalars['Int']['input']>;
  _gte: InputMaybe<Scalars['Int']['input']>;
  _in: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Int']['input']>;
  _lte: InputMaybe<Scalars['Int']['input']>;
  _neq: InputMaybe<Scalars['Int']['input']>;
  _nin: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']['input']>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']['input']>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "contest" */
export type Contest = {
  __typename?: 'contest';
  contest_name: Scalars['String']['output'];
  contest_no: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  status: Scalars['Boolean']['output'];
  total_amount: Scalars['Int']['output'];
  total_price: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "contest" */
export type Contest_Aggregate = {
  __typename?: 'contest_aggregate';
  aggregate: Maybe<Contest_Aggregate_Fields>;
  nodes: Array<Contest>;
};

/** aggregate fields of "contest" */
export type Contest_Aggregate_Fields = {
  __typename?: 'contest_aggregate_fields';
  avg: Maybe<Contest_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Contest_Max_Fields>;
  min: Maybe<Contest_Min_Fields>;
  stddev: Maybe<Contest_Stddev_Fields>;
  stddev_pop: Maybe<Contest_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Contest_Stddev_Samp_Fields>;
  sum: Maybe<Contest_Sum_Fields>;
  var_pop: Maybe<Contest_Var_Pop_Fields>;
  var_samp: Maybe<Contest_Var_Samp_Fields>;
  variance: Maybe<Contest_Variance_Fields>;
};


/** aggregate fields of "contest" */
export type Contest_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Contest_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Contest_Avg_Fields = {
  __typename?: 'contest_avg_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "contest". All fields are combined with a logical 'AND'. */
export type Contest_Bool_Exp = {
  _and: InputMaybe<Array<Contest_Bool_Exp>>;
  _not: InputMaybe<Contest_Bool_Exp>;
  _or: InputMaybe<Array<Contest_Bool_Exp>>;
  contest_name: InputMaybe<String_Comparison_Exp>;
  contest_no: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  status: InputMaybe<Boolean_Comparison_Exp>;
  total_amount: InputMaybe<Int_Comparison_Exp>;
  total_price: InputMaybe<Int_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contest" */
export enum Contest_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContestPkey = 'contest_pkey'
}

/** input type for incrementing numeric columns in table "contest" */
export type Contest_Inc_Input = {
  total_amount: InputMaybe<Scalars['Int']['input']>;
  total_price: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "contest" */
export type Contest_Insert_Input = {
  contest_name: InputMaybe<Scalars['String']['input']>;
  contest_no: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  status: InputMaybe<Scalars['Boolean']['input']>;
  total_amount: InputMaybe<Scalars['Int']['input']>;
  total_price: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Contest_Max_Fields = {
  __typename?: 'contest_max_fields';
  contest_name: Maybe<Scalars['String']['output']>;
  contest_no: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  total_amount: Maybe<Scalars['Int']['output']>;
  total_price: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Contest_Min_Fields = {
  __typename?: 'contest_min_fields';
  contest_name: Maybe<Scalars['String']['output']>;
  contest_no: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  total_amount: Maybe<Scalars['Int']['output']>;
  total_price: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "contest" */
export type Contest_Mutation_Response = {
  __typename?: 'contest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contest>;
};

/** on_conflict condition type for table "contest" */
export type Contest_On_Conflict = {
  constraint: Contest_Constraint;
  update_columns: Array<Contest_Update_Column>;
  where: InputMaybe<Contest_Bool_Exp>;
};

/** Ordering options when selecting data from "contest". */
export type Contest_Order_By = {
  contest_name: InputMaybe<Order_By>;
  contest_no: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  status: InputMaybe<Order_By>;
  total_amount: InputMaybe<Order_By>;
  total_price: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: contest */
export type Contest_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "contest" */
export enum Contest_Select_Column {
  /** column name */
  ContestName = 'contest_name',
  /** column name */
  ContestNo = 'contest_no',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contest" */
export type Contest_Set_Input = {
  contest_name: InputMaybe<Scalars['String']['input']>;
  contest_no: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  status: InputMaybe<Scalars['Boolean']['input']>;
  total_amount: InputMaybe<Scalars['Int']['input']>;
  total_price: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Contest_Stddev_Fields = {
  __typename?: 'contest_stddev_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Contest_Stddev_Pop_Fields = {
  __typename?: 'contest_stddev_pop_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Contest_Stddev_Samp_Fields = {
  __typename?: 'contest_stddev_samp_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "contest" */
export type Contest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contest_Stream_Cursor_Value_Input = {
  contest_name: InputMaybe<Scalars['String']['input']>;
  contest_no: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  status: InputMaybe<Scalars['Boolean']['input']>;
  total_amount: InputMaybe<Scalars['Int']['input']>;
  total_price: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Contest_Sum_Fields = {
  __typename?: 'contest_sum_fields';
  total_amount: Maybe<Scalars['Int']['output']>;
  total_price: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "contest" */
export enum Contest_Update_Column {
  /** column name */
  ContestName = 'contest_name',
  /** column name */
  ContestNo = 'contest_no',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TotalPrice = 'total_price',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Contest_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Contest_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Contest_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contest_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contest_Var_Pop_Fields = {
  __typename?: 'contest_var_pop_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Contest_Var_Samp_Fields = {
  __typename?: 'contest_var_samp_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Contest_Variance_Fields = {
  __typename?: 'contest_variance_fields';
  total_amount: Maybe<Scalars['Float']['output']>;
  total_price: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contest" */
  delete_contest: Maybe<Contest_Mutation_Response>;
  /** delete single row from the table: "contest" */
  delete_contest_by_pk: Maybe<Contest>;
  /** insert data into the table: "contest" */
  insert_contest: Maybe<Contest_Mutation_Response>;
  /** insert a single row into the table: "contest" */
  insert_contest_one: Maybe<Contest>;
  /** update data of the table: "contest" */
  update_contest: Maybe<Contest_Mutation_Response>;
  /** update single row of the table: "contest" */
  update_contest_by_pk: Maybe<Contest>;
  /** update multiples rows of table: "contest" */
  update_contest_many: Maybe<Array<Maybe<Contest_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ContestArgs = {
  where: Contest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ContestArgs = {
  objects: Array<Contest_Insert_Input>;
  on_conflict: InputMaybe<Contest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contest_OneArgs = {
  object: Contest_Insert_Input;
  on_conflict: InputMaybe<Contest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ContestArgs = {
  _inc: InputMaybe<Contest_Inc_Input>;
  _set: InputMaybe<Contest_Set_Input>;
  where: Contest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contest_By_PkArgs = {
  _inc: InputMaybe<Contest_Inc_Input>;
  _set: InputMaybe<Contest_Set_Input>;
  pk_columns: Contest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contest_ManyArgs = {
  updates: Array<Contest_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk: Maybe<Contest>;
};


export type Query_RootContestArgs = {
  distinct_on: InputMaybe<Array<Contest_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Contest_Order_By>>;
  where: InputMaybe<Contest_Bool_Exp>;
};


export type Query_RootContest_AggregateArgs = {
  distinct_on: InputMaybe<Array<Contest_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Contest_Order_By>>;
  where: InputMaybe<Contest_Bool_Exp>;
};


export type Query_RootContest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contest" */
  contest: Array<Contest>;
  /** fetch aggregated fields from the table: "contest" */
  contest_aggregate: Contest_Aggregate;
  /** fetch data from the table: "contest" using primary key columns */
  contest_by_pk: Maybe<Contest>;
  /** fetch data from the table in a streaming manner: "contest" */
  contest_stream: Array<Contest>;
};


export type Subscription_RootContestArgs = {
  distinct_on: InputMaybe<Array<Contest_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Contest_Order_By>>;
  where: InputMaybe<Contest_Bool_Exp>;
};


export type Subscription_RootContest_AggregateArgs = {
  distinct_on: InputMaybe<Array<Contest_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Contest_Order_By>>;
  where: InputMaybe<Contest_Bool_Exp>;
};


export type Subscription_RootContest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootContest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contest_Stream_Cursor_Input>>;
  where: InputMaybe<Contest_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']['input']>;
  _gt: InputMaybe<Scalars['timestamptz']['input']>;
  _gte: InputMaybe<Scalars['timestamptz']['input']>;
  _in: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['timestamptz']['input']>;
  _lte: InputMaybe<Scalars['timestamptz']['input']>;
  _neq: InputMaybe<Scalars['timestamptz']['input']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']['input']>;
  _gt: InputMaybe<Scalars['uuid']['input']>;
  _gte: InputMaybe<Scalars['uuid']['input']>;
  _in: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['uuid']['input']>;
  _lte: InputMaybe<Scalars['uuid']['input']>;
  _neq: InputMaybe<Scalars['uuid']['input']>;
  _nin: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetAllContestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContestsQuery = { __typename?: 'query_root', contest: Array<{ __typename?: 'contest', id: any, contest_name: string, contest_no: string, total_price: number, total_amount: number, type: string, status: boolean }> };

export type MyQueryQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type MyQueryQuery = { __typename?: 'query_root', contest_by_pk: { __typename?: 'contest', contest_name: string, contest_no: string, id: any, status: boolean, total_amount: number, total_price: number, type: string } | null };

export type CreateContestMutationVariables = Exact<{
  input: Contest_Insert_Input;
}>;


export type CreateContestMutation = { __typename?: 'mutation_root', insert_contest_one: { __typename?: 'contest', contest_name: string, contest_no: string, id: any, status: boolean, total_amount: number, total_price: number, type: string } | null };

export type DeleteContestMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteContestMutation = { __typename?: 'mutation_root', delete_contest_by_pk: { __typename?: 'contest', contest_name: string, contest_no: string, id: any, status: boolean, total_amount: number, total_price: number, type: string } | null };

export type UpdateContestMutationVariables = Exact<{
  pk_columns: Contest_Pk_Columns_Input;
}>;


export type UpdateContestMutation = { __typename?: 'mutation_root', update_contest_by_pk: { __typename?: 'contest', contest_name: string, contest_no: string, id: any, status: boolean, total_amount: number, total_price: number, type: string } | null };



export const GetAllContestsDocument = `
    query GetAllContests {
  contest {
    id
    contest_name
    contest_no
    total_price
    total_amount
    type
    status
  }
}
    `;

export const useGetAllContestsQuery = <
      TData = GetAllContestsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllContestsQueryVariables,
      options?: UseQueryOptions<GetAllContestsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAllContestsQuery, TError, TData>(
      variables === undefined ? ['GetAllContests'] : ['GetAllContests', variables],
      fetcher<GetAllContestsQuery, GetAllContestsQueryVariables>(client, GetAllContestsDocument, variables, headers),
      options
    )};

export const MyQueryDocument = `
    query MyQuery($id: uuid!) {
  contest_by_pk(id: $id) {
    contest_name
    contest_no
    id
    status
    total_amount
    total_price
    type
  }
}
    `;

export const useMyQueryQuery = <
      TData = MyQueryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: MyQueryQueryVariables,
      options?: UseQueryOptions<MyQueryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<MyQueryQuery, TError, TData>(
      ['MyQuery', variables],
      fetcher<MyQueryQuery, MyQueryQueryVariables>(client, MyQueryDocument, variables, headers),
      options
    )};

export const CreateContestDocument = `
    mutation CreateContest($input: contest_insert_input!) {
  insert_contest_one(object: $input) {
    contest_name
    contest_no
    id
    status
    total_amount
    total_price
    type
  }
}
    `;

export const useCreateContestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateContestMutation, TError, CreateContestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<CreateContestMutation, TError, CreateContestMutationVariables, TContext>(
      ['CreateContest'],
      (variables?: CreateContestMutationVariables) => fetcher<CreateContestMutation, CreateContestMutationVariables>(client, CreateContestDocument, variables, headers)(),
      options
    )};

export const DeleteContestDocument = `
    mutation DeleteContest($id: uuid!) {
  delete_contest_by_pk(id: $id) {
    contest_name
    contest_no
    id
    status
    total_amount
    total_price
    type
  }
}
    `;

export const useDeleteContestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteContestMutation, TError, DeleteContestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<DeleteContestMutation, TError, DeleteContestMutationVariables, TContext>(
      ['DeleteContest'],
      (variables?: DeleteContestMutationVariables) => fetcher<DeleteContestMutation, DeleteContestMutationVariables>(client, DeleteContestDocument, variables, headers)(),
      options
    )};

export const UpdateContestDocument = `
    mutation UpdateContest($pk_columns: contest_pk_columns_input!) {
  update_contest_by_pk(pk_columns: $pk_columns) {
    contest_name
    contest_no
    id
    status
    total_amount
    total_price
    type
  }
}
    `;

export const useUpdateContestMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateContestMutation, TError, UpdateContestMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<UpdateContestMutation, TError, UpdateContestMutationVariables, TContext>(
      ['UpdateContest'],
      (variables?: UpdateContestMutationVariables) => fetcher<UpdateContestMutation, UpdateContestMutationVariables>(client, UpdateContestDocument, variables, headers)(),
      options
    )};
