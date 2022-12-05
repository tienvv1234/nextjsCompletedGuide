import { useHook } from '@common/utils/use-hook'
const useAddItem = () => {
    // useHook callback function
    const hook = useHook((hooks) => {
        return hooks.cart.useAddItem
    });
    //hook = {fetch, useHook}
    return hook.useHook({
        fetch: hook.fetcher
    });
}

export default useAddItem;