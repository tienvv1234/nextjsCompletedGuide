import { ApiHooks } from '@common/types/api';
import { MutationHook } from '@common/types/hooks';
// import { useApiProvider } from '@framework';
import { useApiProvider } from "@common";
export const useHook = (fn: (apiHooks: ApiHooks) => MutationHook) => {
    const { hooks } = useApiProvider();
    // hooke 
    // cart: { useAddItem: {fetch, useHook}}
    const result = fn(hooks);
    //result = {fetch, useHook} of handler: MutationHook
    return result;
}

export const useMutationHook = (hook: MutationHook) => {
    const { fetcher } = useApiProvider();

    const result = hook.useHook({
        fetch: (input:any) => {
            return hook.fetcher({
                input,
                fetch: fetcher,
                options: hook.fetcherOptions,
            });
        }
    });
    return result;
}