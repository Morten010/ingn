import { gql } from "../../__generated__";

export const getOneNews = gql(`
    query GET_ONE_NEWS($slug: String!) {
        nyhed(where: {slug: $slug}) {
        createdAt
        dato
        id
        indhold
        publishedAt
        slug
        title
        updatedAt
        forfatter{
            id
            navn
            billedet {
            id
            url
            }
        }
        thumbnail{
            url
        }
        }
    }
`)