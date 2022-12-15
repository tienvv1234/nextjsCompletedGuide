import { useHook, useMutationHook } from '@common/utils/use-hook'
const useAddItem = () => {
    // useHook callback function
    const hook = useHook((hooks) => {
        return hooks.cart.useAddItem
    });
    //hook = {fetch, useHook} handler: MutationHook
    return useMutationHook({...hook});
}

export default useAddItem;