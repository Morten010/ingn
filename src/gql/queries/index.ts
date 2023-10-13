import { gql } from "../../__generated__";

export const getOneNewsPost = gql(`
    query GET_ONE_NEWS_POST($slug: String!){
        nyhed(where: {slug: $slug}) {
        createdAt
        dato
        id
        indhold
        publishedAt
        slug
        title
        updatedAt
        forfatter {
            id
            navn
            billedet {
            id
            url
            }
        }
        thumbnail {
            url
        }
        }
    }  
`)

export const getAllNewsPosts = gql(`
    query GETNEWS {
        nyheder(first: 27) {
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

export const getNewsPostsByCategory = gql(`
    query getByCategory($id:ID!) {
        kategori(where: {id: $id}) {
        id
        category
        nyheds {
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
    }  
`)

export const getNav = gql(`
    query MyQuery {
        kategorier {
        id
        category
        }
    }  
`)
