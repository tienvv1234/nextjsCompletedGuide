
import { ApiHooks, MutationHook } from '@common/types/hooks';
// import { useApiProvider } from '@framework';
import { useApiProvider } from "@common";
import { useState } from 'react';
import { ApiFetcher } from '@common/types/api';
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

const useData = (hook: any, fetcher: ApiFetcher) => {
    const [data, setData] = useState(null);

    const hookFetcher = async () => {
        try {
            return await hook.fetcher({
                fetch: fetcher,
                options: hook.fetcherOptions,
                input: {}
            });
        } catch (error) {
            throw error;
        }
    };

    if (!data) {
        hookFetcher().then((data) => {
            setData(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return data;
}

export const useSWRHook = (hook: any) => {
    const { fetcher } = useApiProvider();

    return hook.useHook({
        useData() {
            const data = useData(hook, fetcher);

            return data;
        }
    });
}