/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation INSERT_BULK_POSTS($data: NyhedCreateInput!) {\n        createNyhed(data: $data){\n        id,\n        title,\n        slug,\n        indhold,\n        createdAt,\n        }\n    }\n": types.Insert_Bulk_PostsDocument,
    "\n    query GET_USER_BY_EMAIL($email: String!) {\n        bruger(where: {email: $email}) {\n        id\n        email\n        password\n        }\n    }  \n": types.Get_User_By_EmailDocument,
    "\n    query GET_ONE_NEWS($slug: String!) {\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }\n": types.Get_One_NewsDocument,
    "\n    query GET_ONE_NEWS_POST($slug: String!){\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter {\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail {\n            url\n        }\n        }\n    }  \n": types.Get_One_News_PostDocument,
    "\n    query GETNEWS {\n        nyheder(first: 27) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }  \n": types.GetnewsDocument,
    "\n    query getByCategory($id:ID!) {\n        kategori(where: {id: $id}) {\n        id\n        category\n        nyheds {\n            createdAt\n            dato\n            id\n            indhold\n            publishedAt\n            slug\n            title\n            updatedAt\n            forfatter{\n                id\n                navn\n                billedet {\n                id\n                url\n                }\n            }\n            thumbnail{\n                url\n            }\n            }\n        }\n    }  \n": types.GetByCategoryDocument,
    "\n    query MyQuery {\n        kategorier {\n        id\n        category\n        }\n    }  \n": types.MyQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation INSERT_BULK_POSTS($data: NyhedCreateInput!) {\n        createNyhed(data: $data){\n        id,\n        title,\n        slug,\n        indhold,\n        createdAt,\n        }\n    }\n"): (typeof documents)["\n    mutation INSERT_BULK_POSTS($data: NyhedCreateInput!) {\n        createNyhed(data: $data){\n        id,\n        title,\n        slug,\n        indhold,\n        createdAt,\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_USER_BY_EMAIL($email: String!) {\n        bruger(where: {email: $email}) {\n        id\n        email\n        password\n        }\n    }  \n"): (typeof documents)["\n    query GET_USER_BY_EMAIL($email: String!) {\n        bruger(where: {email: $email}) {\n        id\n        email\n        password\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ONE_NEWS($slug: String!) {\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }\n"): (typeof documents)["\n    query GET_ONE_NEWS($slug: String!) {\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GET_ONE_NEWS_POST($slug: String!){\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter {\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail {\n            url\n        }\n        }\n    }  \n"): (typeof documents)["\n    query GET_ONE_NEWS_POST($slug: String!){\n        nyhed(where: {slug: $slug}) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter {\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail {\n            url\n        }\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GETNEWS {\n        nyheder(first: 27) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }  \n"): (typeof documents)["\n    query GETNEWS {\n        nyheder(first: 27) {\n        createdAt\n        dato\n        id\n        indhold\n        publishedAt\n        slug\n        title\n        updatedAt\n        forfatter{\n            id\n            navn\n            billedet {\n            id\n            url\n            }\n        }\n        thumbnail{\n            url\n        }\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query getByCategory($id:ID!) {\n        kategori(where: {id: $id}) {\n        id\n        category\n        nyheds {\n            createdAt\n            dato\n            id\n            indhold\n            publishedAt\n            slug\n            title\n            updatedAt\n            forfatter{\n                id\n                navn\n                billedet {\n                id\n                url\n                }\n            }\n            thumbnail{\n                url\n            }\n            }\n        }\n    }  \n"): (typeof documents)["\n    query getByCategory($id:ID!) {\n        kategori(where: {id: $id}) {\n        id\n        category\n        nyheds {\n            createdAt\n            dato\n            id\n            indhold\n            publishedAt\n            slug\n            title\n            updatedAt\n            forfatter{\n                id\n                navn\n                billedet {\n                id\n                url\n                }\n            }\n            thumbnail{\n                url\n            }\n            }\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query MyQuery {\n        kategorier {\n        id\n        category\n        }\n    }  \n"): (typeof documents)["\n    query MyQuery {\n        kategorier {\n        id\n        category\n        }\n    }  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;