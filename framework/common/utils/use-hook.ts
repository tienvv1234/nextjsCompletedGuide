import { ApiFetcher, ApiHooks } from '@common/types/api';
import { FetcherHookCentext, MutationHook } from '@common/types/hook';
import { useApiProvider } from '@framework';

export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    const { hooks } = useApiProvider();
    // hooke 
    // cart: { useAddItem: {fetch, useHook}}
    const result = fn(hooks);
    //result = {fetch, useHook} of handler: MutationHook
    return result;
}

export const useMutationHook = (hook: MutationHook) => {
    const result = hook.useHook({
        fetch: (input123:any) => {
            console.log('input', input123)
            return hook.fetcher({
                input123,
                fetch: async (input123: any) => {
                    return {
                        data: JSON.stringify(input123) + "_MODIFIED"
                    };
                }
            });
        }
    });
    console.log('use mutation', result)
    return result;
}