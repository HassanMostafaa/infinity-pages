/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageContentDynamicZoneInput: { input: any; output: any; }
};

export type IGenBooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<IGenBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGenComponentFooterNavigationFooterColumn = {
  __typename?: 'ComponentFooterNavigationFooterColumn';
  Links?: Maybe<Array<Maybe<IGenComponentSharedLink>>>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type IGenComponentFooterNavigationFooterColumnLinksArgs = {
  filters?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentFooterNavigationFooterColumnFiltersInput = {
  Links?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  Title?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentFooterNavigationFooterColumnFiltersInput>>>;
  not?: InputMaybe<IGenComponentFooterNavigationFooterColumnFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentFooterNavigationFooterColumnFiltersInput>>>;
};

export type IGenComponentFooterNavigationFooterColumnInput = {
  Links?: InputMaybe<Array<InputMaybe<IGenComponentSharedLinkInput>>>;
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentHeaderNavigationHeaderNavigationLink = {
  __typename?: 'ComponentHeaderNavigationHeaderNavigationLink';
  Page?: Maybe<IGenPage>;
  id: Scalars['ID']['output'];
};

export type IGenComponentHeaderNavigationHeaderNavigationLinkFiltersInput = {
  Page?: InputMaybe<IGenPageFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentHeaderNavigationHeaderNavigationLinkFiltersInput>>>;
  not?: InputMaybe<IGenComponentHeaderNavigationHeaderNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentHeaderNavigationHeaderNavigationLinkFiltersInput>>>;
};

export type IGenComponentHeaderNavigationHeaderNavigationLinkInput = {
  Page?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentHeroSectionHeroSlide = {
  __typename?: 'ComponentHeroSectionHeroSlide';
  Button?: Maybe<IGenComponentSharedLink>;
  Description?: Maybe<Scalars['JSON']['output']>;
  Media?: Maybe<IGenUploadFile>;
  Title?: Maybe<Scalars['String']['output']>;
  UseHalfOverlay?: Maybe<Scalars['Boolean']['output']>;
  UserFullOverlay?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type IGenComponentHeroSectionHeroSlideFiltersInput = {
  Button?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  Description?: InputMaybe<IGenJsonFilterInput>;
  Title?: InputMaybe<IGenStringFilterInput>;
  UseHalfOverlay?: InputMaybe<IGenBooleanFilterInput>;
  UserFullOverlay?: InputMaybe<IGenBooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentHeroSectionHeroSlideFiltersInput>>>;
  not?: InputMaybe<IGenComponentHeroSectionHeroSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentHeroSectionHeroSlideFiltersInput>>>;
};

export type IGenComponentHeroSectionHeroWithSlides = {
  __typename?: 'ComponentHeroSectionHeroWithSlides';
  Breadcrumbs?: Maybe<Array<Maybe<IGenComponentSharedLink>>>;
  Slides?: Maybe<Array<Maybe<IGenComponentHeroSectionHeroSlide>>>;
  id: Scalars['ID']['output'];
};


export type IGenComponentHeroSectionHeroWithSlidesBreadcrumbsArgs = {
  filters?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenComponentHeroSectionHeroWithSlidesSlidesArgs = {
  filters?: InputMaybe<IGenComponentHeroSectionHeroSlideFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentMetaPageContent = {
  __typename?: 'ComponentMetaPageContent';
  id: Scalars['ID']['output'];
};

export type IGenComponentMetaPageMeta = {
  __typename?: 'ComponentMetaPageMeta';
  Description?: Maybe<Scalars['String']['output']>;
  LongNavigationName?: Maybe<Scalars['String']['output']>;
  NavigationName?: Maybe<Scalars['String']['output']>;
  Slug: Scalars['String']['output'];
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type IGenComponentMetaPageMetaFiltersInput = {
  Description?: InputMaybe<IGenStringFilterInput>;
  LongNavigationName?: InputMaybe<IGenStringFilterInput>;
  NavigationName?: InputMaybe<IGenStringFilterInput>;
  Slug?: InputMaybe<IGenStringFilterInput>;
  Title?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentMetaPageMetaFiltersInput>>>;
  not?: InputMaybe<IGenComponentMetaPageMetaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentMetaPageMetaFiltersInput>>>;
};

export type IGenComponentMetaPageMetaInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  LongNavigationName?: InputMaybe<Scalars['String']['input']>;
  NavigationName?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentSectionsThreeColumnsSwiper = {
  __typename?: 'ComponentSectionsThreeColumnsSwiper';
  Description?: Maybe<Scalars['JSON']['output']>;
  Items?: Maybe<Array<Maybe<IGenComponentSharedSimpleCard>>>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type IGenComponentSectionsThreeColumnsSwiperItemsArgs = {
  filters?: InputMaybe<IGenComponentSharedSimpleCardFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentSectionsTitleDescriptionCtAs = {
  __typename?: 'ComponentSectionsTitleDescriptionCtAs';
  CTA?: Maybe<Array<Maybe<IGenComponentSharedLink>>>;
  Description?: Maybe<Scalars['JSON']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type IGenComponentSectionsTitleDescriptionCtAsCtaArgs = {
  filters?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentSectionsTitleDescriptionMedia = {
  __typename?: 'ComponentSectionsTitleDescriptionMedia';
  CTAs?: Maybe<Array<Maybe<IGenComponentSharedLink>>>;
  Description?: Maybe<Scalars['JSON']['output']>;
  Image?: Maybe<IGenUploadFile>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type IGenComponentSectionsTitleDescriptionMediaCtAsArgs = {
  filters?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenComponentSharedLink = {
  __typename?: 'ComponentSharedLink';
  ExternalUrl?: Maybe<Scalars['String']['output']>;
  IsExternal?: Maybe<Scalars['Boolean']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  UseSelfTarget?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  page?: Maybe<IGenPage>;
};

export type IGenComponentSharedLinkFiltersInput = {
  ExternalUrl?: InputMaybe<IGenStringFilterInput>;
  IsExternal?: InputMaybe<IGenBooleanFilterInput>;
  Text?: InputMaybe<IGenStringFilterInput>;
  UseSelfTarget?: InputMaybe<IGenBooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentSharedLinkFiltersInput>>>;
  not?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentSharedLinkFiltersInput>>>;
  page?: InputMaybe<IGenPageFiltersInput>;
};

export type IGenComponentSharedLinkInput = {
  ExternalUrl?: InputMaybe<Scalars['String']['input']>;
  IsExternal?: InputMaybe<Scalars['Boolean']['input']>;
  Text?: InputMaybe<Scalars['String']['input']>;
  UseSelfTarget?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenComponentSharedSimpleCard = {
  __typename?: 'ComponentSharedSimpleCard';
  Description?: Maybe<Scalars['JSON']['output']>;
  Image?: Maybe<IGenUploadFile>;
  Link?: Maybe<IGenComponentSharedLink>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type IGenComponentSharedSimpleCardFiltersInput = {
  Description?: InputMaybe<IGenJsonFilterInput>;
  Link?: InputMaybe<IGenComponentSharedLinkFiltersInput>;
  Title?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenComponentSharedSimpleCardFiltersInput>>>;
  not?: InputMaybe<IGenComponentSharedSimpleCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenComponentSharedSimpleCardFiltersInput>>>;
};

export type IGenDateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<IGenDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenDeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type IGenError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type IGenFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<IGenFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type IGenFooterNavigation = {
  __typename?: 'FooterNavigation';
  Columns?: Maybe<Array<Maybe<IGenComponentFooterNavigationFooterColumn>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IGenFooterNavigationColumnsArgs = {
  filters?: InputMaybe<IGenComponentFooterNavigationFooterColumnFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenFooterNavigationInput = {
  Columns?: InputMaybe<Array<InputMaybe<IGenComponentFooterNavigationFooterColumnInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenGenericMorph = IGenComponentFooterNavigationFooterColumn | IGenComponentHeaderNavigationHeaderNavigationLink | IGenComponentHeroSectionHeroSlide | IGenComponentHeroSectionHeroWithSlides | IGenComponentMetaPageContent | IGenComponentMetaPageMeta | IGenComponentSectionsThreeColumnsSwiper | IGenComponentSectionsTitleDescriptionCtAs | IGenComponentSectionsTitleDescriptionMedia | IGenComponentSharedLink | IGenComponentSharedSimpleCard | IGenFooterNavigation | IGenHeaderNavigation | IGenI18NLocale | IGenPage | IGenReviewWorkflowsWorkflow | IGenReviewWorkflowsWorkflowStage | IGenUploadFile | IGenUsersPermissionsPermission | IGenUsersPermissionsRole | IGenUsersPermissionsUser;

export type IGenHeaderNavigation = {
  __typename?: 'HeaderNavigation';
  Links?: Maybe<Array<Maybe<IGenComponentHeaderNavigationHeaderNavigationLink>>>;
  Logo?: Maybe<IGenUploadFile>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IGenHeaderNavigationLinksArgs = {
  filters?: InputMaybe<IGenComponentHeaderNavigationHeaderNavigationLinkFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenHeaderNavigationInput = {
  Links?: InputMaybe<Array<InputMaybe<IGenComponentHeaderNavigationHeaderNavigationLinkInput>>>;
  Logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenI18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenI18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<IGenI18NLocale>;
  pageInfo: IGenPagination;
};

export type IGenI18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  code?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenI18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenI18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenIdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IGenIdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenIntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IGenIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type IGenJsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<IGenJsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type IGenMutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<IGenUsersPermissionsLoginPayload>;
  createPage?: Maybe<IGenPage>;
  createReviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<IGenUsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  deleteFooterNavigation?: Maybe<IGenDeleteMutationResponse>;
  deleteHeaderNavigation?: Maybe<IGenDeleteMutationResponse>;
  deletePage?: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<IGenDeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<IGenDeleteMutationResponse>;
  deleteUploadFile?: Maybe<IGenUploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<IGenUsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<IGenUsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<IGenUsersPermissionsPasswordPayload>;
  login: IGenUsersPermissionsLoginPayload;
  /** Register a user */
  register: IGenUsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<IGenUsersPermissionsLoginPayload>;
  updateFooterNavigation?: Maybe<IGenFooterNavigation>;
  updateHeaderNavigation?: Maybe<IGenHeaderNavigation>;
  updatePage?: Maybe<IGenPage>;
  updateReviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  updateUploadFile: IGenUploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<IGenUsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: IGenUsersPermissionsUserEntityResponse;
};


export type IGenMutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationCreatePageArgs = {
  data: IGenPageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationCreateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
};


export type IGenMutationCreateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
};


export type IGenMutationDeletePageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type IGenMutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type IGenMutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type IGenMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type IGenMutationLoginArgs = {
  input: IGenUsersPermissionsLoginInput;
};


export type IGenMutationRegisterArgs = {
  input: IGenUsersPermissionsRegisterInput;
};


export type IGenMutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IGenMutationUpdateFooterNavigationArgs = {
  data: IGenFooterNavigationInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateHeaderNavigationArgs = {
  data: IGenHeaderNavigationInput;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdatePageArgs = {
  data: IGenPageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowArgs = {
  data: IGenReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: IGenReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenMutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<IGenFileInfoInput>;
};


export type IGenMutationUpdateUsersPermissionsRoleArgs = {
  data: IGenUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type IGenMutationUpdateUsersPermissionsUserArgs = {
  data: IGenUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type IGenPage = {
  __typename?: 'Page';
  Content?: Maybe<Array<Maybe<IGenPageContentDynamicZone>>>;
  MetaData?: Maybe<IGenComponentMetaPageMeta>;
  Title: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenPageContentDynamicZone = IGenComponentHeroSectionHeroWithSlides | IGenComponentSectionsThreeColumnsSwiper | IGenComponentSectionsTitleDescriptionCtAs | IGenComponentSectionsTitleDescriptionMedia | IGenError;

export type IGenPageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  nodes: Array<IGenPage>;
  pageInfo: IGenPagination;
};

export type IGenPageFiltersInput = {
  MetaData?: InputMaybe<IGenComponentMetaPageMetaFiltersInput>;
  Title?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  not?: InputMaybe<IGenPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenPageFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenPageInput = {
  Content?: InputMaybe<Array<Scalars['PageContentDynamicZoneInput']['input']>>;
  MetaData?: InputMaybe<IGenComponentMetaPageMetaInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IGenPaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum IGenPublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type IGenQuery = {
  __typename?: 'Query';
  footerNavigation?: Maybe<IGenFooterNavigation>;
  headerNavigation?: Maybe<IGenHeaderNavigation>;
  i18NLocale?: Maybe<IGenI18NLocale>;
  i18NLocales: Array<Maybe<IGenI18NLocale>>;
  i18NLocales_connection?: Maybe<IGenI18NLocaleEntityResponseCollection>;
  me?: Maybe<IGenUsersPermissionsMe>;
  page?: Maybe<IGenPage>;
  pages: Array<Maybe<IGenPage>>;
  pages_connection?: Maybe<IGenPageEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<IGenReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<IGenReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<IGenReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<IGenReviewWorkflowsWorkflowEntityResponseCollection>;
  uploadFile?: Maybe<IGenUploadFile>;
  uploadFiles: Array<Maybe<IGenUploadFile>>;
  uploadFiles_connection?: Maybe<IGenUploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<IGenUsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<IGenUsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<IGenUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<IGenUsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<IGenUsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<IGenUsersPermissionsUserEntityResponseCollection>;
};


export type IGenQueryFooterNavigationArgs = {
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryHeaderNavigationArgs = {
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocalesArgs = {
  filters?: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryI18NLocalesConnectionArgs = {
  filters?: InputMaybe<IGenI18NLocaleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesArgs = {
  filters?: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryPagesConnectionArgs = {
  filters?: InputMaybe<IGenPageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowStagesConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryReviewWorkflowsWorkflowsConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFilesArgs = {
  filters?: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUploadFilesConnectionArgs = {
  filters?: InputMaybe<IGenUploadFileFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsRolesConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};


export type IGenQueryUsersPermissionsUsersConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<IGenPublicationStatus>;
};

export type IGenReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<IGenReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<IGenReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<IGenReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IGenReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenReviewWorkflowsWorkflowStagesConnectionArgs = {
  filters?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflow>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<IGenJsonFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<IGenReviewWorkflowsWorkflow>;
};

export type IGenReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
  pageInfo: IGenPagination;
};

export type IGenReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  workflow?: InputMaybe<IGenReviewWorkflowsWorkflowFiltersInput>;
};

export type IGenReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type IGenReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<IGenReviewWorkflowsWorkflowStage>;
};

export type IGenStringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<IGenStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type IGenUploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<IGenGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type IGenUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<IGenUploadFile>;
  pageInfo: IGenPagination;
};

export type IGenUploadFileFiltersInput = {
  alternativeText?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  caption?: InputMaybe<IGenStringFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  ext?: InputMaybe<IGenStringFilterInput>;
  formats?: InputMaybe<IGenJsonFilterInput>;
  hash?: InputMaybe<IGenStringFilterInput>;
  height?: InputMaybe<IGenIntFilterInput>;
  mime?: InputMaybe<IGenStringFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<IGenStringFilterInput>;
  provider?: InputMaybe<IGenStringFilterInput>;
  provider_metadata?: InputMaybe<IGenJsonFilterInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  size?: InputMaybe<IGenFloatFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  url?: InputMaybe<IGenStringFilterInput>;
  width?: InputMaybe<IGenIntFilterInput>;
};

export type IGenUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type IGenUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: IGenUsersPermissionsMe;
};

export type IGenUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<IGenUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type IGenUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<IGenUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenUsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<IGenStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  role?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
};

export type IGenUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsPermission>;
};

export type IGenUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IGenUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<IGenUsersPermissionsPermission>>;
  permissions_connection?: Maybe<IGenUsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<IGenUsersPermissionsUser>>;
  users_connection?: Maybe<IGenUsersPermissionsUserRelationResponseCollection>;
};


export type IGenUsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRolePermissionsConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IGenUsersPermissionsRoleUsersConnectionArgs = {
  filters?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IGenPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IGenUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsRole>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  description?: InputMaybe<IGenStringFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  name?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<IGenUsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  type?: InputMaybe<IGenStringFilterInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  users?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
};

export type IGenUsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IGenUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<IGenUsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type IGenUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<IGenUsersPermissionsUser>;
};

export type IGenUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
  pageInfo: IGenPagination;
};

export type IGenUsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<IGenBooleanFilterInput>;
  confirmed?: InputMaybe<IGenBooleanFilterInput>;
  createdAt?: InputMaybe<IGenDateTimeFilterInput>;
  documentId?: InputMaybe<IGenIdFilterInput>;
  email?: InputMaybe<IGenStringFilterInput>;
  not?: InputMaybe<IGenUsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IGenUsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<IGenStringFilterInput>;
  publishedAt?: InputMaybe<IGenDateTimeFilterInput>;
  role?: InputMaybe<IGenUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IGenDateTimeFilterInput>;
  username?: InputMaybe<IGenStringFilterInput>;
};

export type IGenUsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type IGenUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<IGenUsersPermissionsUser>;
};
