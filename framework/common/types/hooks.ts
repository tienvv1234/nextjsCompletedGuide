import { ApiFetcher } from './api'

export type MutationHookContext = {
    fetch: (input: any) => any
}

export type FetcherHookCentext = {
    input: any,
    fetch: ApiFetcher
}

export type MutationHook = {
    fetcher: (context: FetcherHookCentext) => any, // fetcher function param input and return any
    useHook(
        context: MutationHookContext
    ): (input: any) => any // useHook function param return function and that function return any
}