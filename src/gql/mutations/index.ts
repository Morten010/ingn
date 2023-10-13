import { gql } from "../../__generated__";

export const insertBulkPosts = gql(`
    mutation INSERT_BULK_POSTS($data: NyhedCreateInput!) {
        createNyhed(data: $data){
        id,
        title,
        slug,
        indhold,
        createdAt,
        }
    }
`)

export const getUserByEmail = gql(`
    query GET_USER_BY_EMAIL($email: String!) {
        bruger(where: {email: $email}) {
        id
        email
        password
        }
    }  
`)