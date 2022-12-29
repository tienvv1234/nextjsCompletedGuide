
import { ApiHooks } from "@common/types/hooks";
import { useHook } from "@common/utils/use-hook";

const useCard = () => {
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart);
    return hook.useHook({
        fetch: hook.fetcher
    });
}

export default useCard;
