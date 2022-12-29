import { ApiFetcher, ApiFetcherOptions } from './api'


export interface ApiHooks {
    cart: {
        useAddItem: MutationHook;
        useCart: any;
    }
}


export type MutationHookContext = {
    fetch: (input: any) => any
}

export type FetcherHookCentext = {
    input?: any,
    fetch: ApiFetcher,
    options: ApiFetcherOptions,
}

export type MutationHook = {
    fetcherOptions: ApiFetcherOptions;
    fetcher: (context: FetcherHookCentext) => any, // fetcher function param input and return any
    useHook(
        context: MutationHookContext
    ): (input: any) => any // useHook function param return function and that function return any
}