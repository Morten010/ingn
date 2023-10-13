export type NyhederProps = {
    __typename?: "Nyhed" | undefined;
    createdAt: any;
    dato: any;
    id: string;
    indhold: string;
    publishedAt?: any;
    slug: string;
    title: string;
    updatedAt: any;
    forfatter?: {
        __typename?: "Forfatter" | undefined;
        id: string;
        navn: string;
        billedet: {
            __typename?: "Asset" | undefined;
            id: string;
            url: string;
        };
    } | null | undefined
    thumbnail: {
        __typename?: "Asset" | undefined;
        url: string;
    }
}[]