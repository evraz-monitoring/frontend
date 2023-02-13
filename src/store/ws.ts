import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        getMessages: build.query<{ date: string }[], string>({
            query: () => `/`,
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) {
                // create a websocket connection when the cache subscription starts
                const ws = new WebSocket("ws://localhost:40510");
                console.log(ws);
                try {
                    // wait for the initial query to resolve before proceeding
                    await cacheDataLoaded;


                    const listener = (event: MessageEvent) => {
                        const data = JSON.parse(event.data);
                        updateCachedData((draft) => {
                            draft.push(data);
                        });
                    };

                    ws.addEventListener("message", listener);
                } catch (err) {
                    console.log(err);
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                ws.close();
            },
        }),
    }),
});

export const {
    useGetMessagesQuery,
    reducer: apiReducer,
    middleware: testMidd,
} = api;
