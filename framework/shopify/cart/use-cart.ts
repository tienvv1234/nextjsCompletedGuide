import useCart from '@common/cart/use-cart';


export const handler = {
    fetcherOptions: {
        query: '',
    },
    fetcher(){
        return {
            data: 'cart ready!!!'
        }
    },
    useHook: ({fetch}: any) => {
        const data = fetch();
        return {
            data
        }
    },
}

export default useCart;