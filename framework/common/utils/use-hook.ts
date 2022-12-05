import { ApiHooks } from '@common/types/api';
import { useApiProvider } from '@framework';

export const useHook = (fn: (apiHooks: ApiHooks) => any) => {
    debugger
    const { hooks } = useApiProvider();
    // hooke 
    // cart: { useAddItem: {fetch, useHook}}
    const result = fn(hooks);
    //result = {fetch, useHook}
    debugger
    return result;
}