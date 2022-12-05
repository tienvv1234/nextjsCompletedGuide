import { useHook } from '@common/utils/use-hook'
const useAddItem = () => {
    debugger
    // useHook callback function
    const hook = useHook((hooks) => {
        debugger
        return hooks.cart.useAddItem
    });
    debugger
    //hook = {fetch, useHook}
    return hook.useHook();
}

export default useAddItem;