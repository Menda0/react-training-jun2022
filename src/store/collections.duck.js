import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const {reducer, middleware, useGetCollectionsQuery, useGetCollectionQuery} = createApi({
    reducerPath: "collections",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.opensea.io/api/v1/"}),
    endpoints:builder => {
        return {
            getCollection: builder.query(
                {
                    query: (name) => `collection/${name}` 
                }
            ),
            getCollections: builder.query(
                {
                    query: (offset=0, limit=10) => `collections?offset=${offset}&limit=${limit}`
                }
            )
        }
    }
})