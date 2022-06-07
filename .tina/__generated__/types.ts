//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export function gql(strings: TemplateStringsArray, ...args: string[]): string {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (args[i] || '')
  })
  return str
}
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
  category: Category;
  categoryConnection: CategoryConnection;
  author: Author;
  authorConnection: AuthorConnection;
  post: Post;
  postConnection: PostConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryAuthorArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryAuthorConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type DocumentNode = Page | Category | Author | Post;

export type PageBlocksHero = {
  __typename?: 'PageBlocksHero';
  heading?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsArticle = Post;

export type PageBlocksFeaturesItems = {
  __typename?: 'PageBlocksFeaturesItems';
  article?: Maybe<PageBlocksFeaturesItemsArticle>;
};

export type PageBlocksFeatures = {
  __typename?: 'PageBlocksFeatures';
  items?: Maybe<Array<Maybe<PageBlocksFeaturesItems>>>;
};

export type PageBlocksContentItems = {
  __typename?: 'PageBlocksContentItems';
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type PageBlocksContent = {
  __typename?: 'PageBlocksContent';
  items?: Maybe<Array<Maybe<PageBlocksContentItems>>>;
};

export type PageBlocksVideoItems = {
  __typename?: 'PageBlocksVideoItems';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PageBlocksVideo = {
  __typename?: 'PageBlocksVideo';
  items?: Maybe<Array<Maybe<PageBlocksVideoItems>>>;
};

export type PageBlocks = PageBlocksHero | PageBlocksFeatures | PageBlocksContent | PageBlocksVideo;

export type Page = Node & Document & {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type CategoryRelatedCategory = Category;

export type CategoryRelated = {
  __typename?: 'CategoryRelated';
  category?: Maybe<CategoryRelatedCategory>;
};

export type Category = Node & Document & {
  __typename?: 'Category';
  title?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<CategoryRelated>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type CategoryConnectionEdges = {
  __typename?: 'CategoryConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Category>;
};

export type CategoryConnection = Connection & {
  __typename?: 'CategoryConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<CategoryConnectionEdges>>>;
};

export type Author = Node & Document & {
  __typename?: 'Author';
  title?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type AuthorConnectionEdges = {
  __typename?: 'AuthorConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Author>;
};

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<AuthorConnectionEdges>>>;
};

export type PostAuthorsAuthor = Author;

export type PostAuthors = {
  __typename?: 'PostAuthors';
  author?: Maybe<PostAuthorsAuthor>;
};

export type PostCategoriesCategory = Category;

export type PostCategories = {
  __typename?: 'PostCategories';
  category?: Maybe<PostCategoriesCategory>;
};

export type Post = Node & Document & {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  authors?: Maybe<Array<Maybe<PostAuthors>>>;
  categories?: Maybe<Array<Maybe<PostCategories>>>;
  description?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
  updateCategory: Category;
  createCategory: Category;
  updateAuthor: Author;
  createAuthor: Author;
  updatePost: Post;
  createPost: Post;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationUpdateCategoryArgs = {
  relativePath: Scalars['String'];
  params: CategoryMutation;
};


export type MutationCreateCategoryArgs = {
  relativePath: Scalars['String'];
  params: CategoryMutation;
};


export type MutationUpdateAuthorArgs = {
  relativePath: Scalars['String'];
  params: AuthorMutation;
};


export type MutationCreateAuthorArgs = {
  relativePath: Scalars['String'];
  params: AuthorMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  category?: InputMaybe<CategoryMutation>;
  author?: InputMaybe<AuthorMutation>;
  post?: InputMaybe<PostMutation>;
};

export type PageBlocksHeroMutation = {
  heading?: InputMaybe<Scalars['String']>;
  subheading?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFeaturesItemsMutation = {
  article?: InputMaybe<Scalars['String']>;
};

export type PageBlocksFeaturesMutation = {
  items?: InputMaybe<Array<InputMaybe<PageBlocksFeaturesItemsMutation>>>;
};

export type PageBlocksContentItemsMutation = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};

export type PageBlocksContentMutation = {
  items?: InputMaybe<Array<InputMaybe<PageBlocksContentItemsMutation>>>;
};

export type PageBlocksVideoItemsMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type PageBlocksVideoMutation = {
  items?: InputMaybe<Array<InputMaybe<PageBlocksVideoItemsMutation>>>;
};

export type PageBlocksMutation = {
  hero?: InputMaybe<PageBlocksHeroMutation>;
  features?: InputMaybe<PageBlocksFeaturesMutation>;
  content?: InputMaybe<PageBlocksContentMutation>;
  video?: InputMaybe<PageBlocksVideoMutation>;
};

export type PageMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type CategoryRelatedMutation = {
  category?: InputMaybe<Scalars['String']>;
};

export type CategoryMutation = {
  title?: InputMaybe<Scalars['String']>;
  related?: InputMaybe<Array<InputMaybe<CategoryRelatedMutation>>>;
  description?: InputMaybe<Scalars['String']>;
};

export type AuthorMutation = {
  title?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  github?: InputMaybe<Scalars['String']>;
  linkedin?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type PostAuthorsMutation = {
  author?: InputMaybe<Scalars['String']>;
};

export type PostCategoriesMutation = {
  category?: InputMaybe<Scalars['String']>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  authors?: InputMaybe<Array<InputMaybe<PostAuthorsMutation>>>;
  categories?: InputMaybe<Array<InputMaybe<PostCategoriesMutation>>>;
  description?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
};

export type PagePartsFragment = { __typename?: 'Page', blocks?: Array<{ __typename: 'PageBlocksHero', heading?: string | null, subheading?: string | null, description?: string | null, image?: string | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItems', article?: { __typename?: 'Post', id: string } | null } | null> | null } | { __typename: 'PageBlocksContent', items?: Array<{ __typename: 'PageBlocksContentItems', image?: string | null, name?: string | null, description?: string | null, href?: string | null } | null> | null } | { __typename: 'PageBlocksVideo', items?: Array<{ __typename: 'PageBlocksVideoItems', title?: string | null, description?: string | null, url?: string | null } | null> | null } | null> | null };

export type CategoryPartsFragment = { __typename?: 'Category', title?: string | null, description?: string | null, related?: Array<{ __typename: 'CategoryRelated', category?: { __typename?: 'Category', id: string } | null } | null> | null };

export type AuthorPartsFragment = { __typename?: 'Author', title?: string | null, email?: string | null, name?: string | null, twitter?: string | null, github?: string | null, linkedin?: string | null, bio?: string | null, image?: string | null };

export type PostPartsFragment = { __typename?: 'Post', title?: string | null, date?: string | null, image?: string | null, description?: string | null, body?: any | null, authors?: Array<{ __typename: 'PostAuthors', author?: { __typename?: 'Author', id: string } | null } | null> | null, categories?: Array<{ __typename: 'PostCategories', category?: { __typename?: 'Category', id: string } | null } | null> | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksHero', heading?: string | null, subheading?: string | null, description?: string | null, image?: string | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItems', article?: { __typename?: 'Post', id: string } | null } | null> | null } | { __typename: 'PageBlocksContent', items?: Array<{ __typename: 'PageBlocksContentItems', image?: string | null, name?: string | null, description?: string | null, href?: string | null } | null> | null } | { __typename: 'PageBlocksVideo', items?: Array<{ __typename: 'PageBlocksVideoItems', title?: string | null, description?: string | null, url?: string | null } | null> | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, edges?: Array<{ __typename?: 'PageConnectionEdges', node?: { __typename?: 'Page', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksHero', heading?: string | null, subheading?: string | null, description?: string | null, image?: string | null } | { __typename: 'PageBlocksFeatures', items?: Array<{ __typename: 'PageBlocksFeaturesItems', article?: { __typename?: 'Post', id: string } | null } | null> | null } | { __typename: 'PageBlocksContent', items?: Array<{ __typename: 'PageBlocksContentItems', image?: string | null, name?: string | null, description?: string | null, href?: string | null } | null> | null } | { __typename: 'PageBlocksVideo', items?: Array<{ __typename: 'PageBlocksVideoItems', title?: string | null, description?: string | null, url?: string | null } | null> | null } | null> | null } | null } | null> | null } };

export type CategoryQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, title?: string | null, description?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, related?: Array<{ __typename: 'CategoryRelated', category?: { __typename?: 'Category', id: string } | null } | null> | null } };

export type CategoryConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryConnectionQuery = { __typename?: 'Query', categoryConnection: { __typename?: 'CategoryConnection', totalCount: number, edges?: Array<{ __typename?: 'CategoryConnectionEdges', node?: { __typename?: 'Category', id: string, title?: string | null, description?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, related?: Array<{ __typename: 'CategoryRelated', category?: { __typename?: 'Category', id: string } | null } | null> | null } | null } | null> | null } };

export type AuthorQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type AuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: string, title?: string | null, email?: string | null, name?: string | null, twitter?: string | null, github?: string | null, linkedin?: string | null, bio?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type AuthorConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthorConnectionQuery = { __typename?: 'Query', authorConnection: { __typename?: 'AuthorConnection', totalCount: number, edges?: Array<{ __typename?: 'AuthorConnectionEdges', node?: { __typename?: 'Author', id: string, title?: string | null, email?: string | null, name?: string | null, twitter?: string | null, github?: string | null, linkedin?: string | null, bio?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title?: string | null, date?: string | null, image?: string | null, description?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, authors?: Array<{ __typename: 'PostAuthors', author?: { __typename?: 'Author', id: string } | null } | null> | null, categories?: Array<{ __typename: 'PostCategories', category?: { __typename?: 'Category', id: string } | null } | null> | null } };

export type PostConnectionQueryVariables = Exact<{ [key: string]: never; }>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, edges?: Array<{ __typename?: 'PostConnectionEdges', node?: { __typename?: 'Post', id: string, title?: string | null, date?: string | null, image?: string | null, description?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, authors?: Array<{ __typename: 'PostAuthors', author?: { __typename?: 'Author', id: string } | null } | null> | null, categories?: Array<{ __typename: 'PostCategories', category?: { __typename?: 'Category', id: string } | null } | null> | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  blocks {
    __typename
    ... on PageBlocksHero {
      heading
      subheading
      description
      image
    }
    ... on PageBlocksFeatures {
      items {
        __typename
        article {
          ... on Document {
            id
          }
        }
      }
    }
    ... on PageBlocksContent {
      items {
        __typename
        image
        name
        description
        href
      }
    }
    ... on PageBlocksVideo {
      items {
        __typename
        title
        description
        url
      }
    }
  }
}
    `;
export const CategoryPartsFragmentDoc = gql`
    fragment CategoryParts on Category {
  title
  related {
    __typename
    category {
      ... on Document {
        id
      }
    }
  }
  description
}
    `;
export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  title
  email
  name
  twitter
  github
  linkedin
  bio
  image
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  title
  date
  image
  authors {
    __typename
    author {
      ... on Document {
        id
      }
    }
  }
  categories {
    __typename
    category {
      ... on Document {
        id
      }
    }
  }
  description
  body
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection {
  pageConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const CategoryDocument = gql`
    query category($relativePath: String!) {
  category(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CategoryParts
  }
}
    ${CategoryPartsFragmentDoc}`;
export const CategoryConnectionDocument = gql`
    query categoryConnection {
  categoryConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CategoryParts
      }
    }
  }
}
    ${CategoryPartsFragmentDoc}`;
export const AuthorDocument = gql`
    query author($relativePath: String!) {
  author(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
export const AuthorConnectionDocument = gql`
    query authorConnection {
  authorConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AuthorParts
      }
    }
  }
}
    ${AuthorPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection {
  postConnection {
    totalCount
    edges {
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    category(variables: CategoryQueryVariables, options?: C): Promise<{data: CategoryQuery, variables: CategoryQueryVariables, query: string}> {
        return requester<{data: CategoryQuery, variables: CategoryQueryVariables, query: string}, CategoryQueryVariables>(CategoryDocument, variables, options);
      },
    categoryConnection(variables?: CategoryConnectionQueryVariables, options?: C): Promise<{data: CategoryConnectionQuery, variables: CategoryConnectionQueryVariables, query: string}> {
        return requester<{data: CategoryConnectionQuery, variables: CategoryConnectionQueryVariables, query: string}, CategoryConnectionQueryVariables>(CategoryConnectionDocument, variables, options);
      },
    author(variables: AuthorQueryVariables, options?: C): Promise<{data: AuthorQuery, variables: AuthorQueryVariables, query: string}> {
        return requester<{data: AuthorQuery, variables: AuthorQueryVariables, query: string}, AuthorQueryVariables>(AuthorDocument, variables, options);
      },
    authorConnection(variables?: AuthorConnectionQueryVariables, options?: C): Promise<{data: AuthorConnectionQuery, variables: AuthorConnectionQueryVariables, query: string}> {
        return requester<{data: AuthorConnectionQuery, variables: AuthorConnectionQueryVariables, query: string}, AuthorConnectionQueryVariables>(AuthorConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    let data = {};
    try {
      data = await client.request({
        query: doc,
        variables: vars,
      });
    } catch (e) {
      // swallow errors related to document creation
      console.warn("Warning: There was an error when fetching data");
      console.warn(e);
    }

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql" }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

