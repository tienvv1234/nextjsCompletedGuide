import useCart from '@common/cart/use-cart';


export const handler = {
    fetcherOptions: {
        query: 'query { hello }',
    },
    async fetcher({ 
        fetch,
        options,
        input: { checkoutId } }: any) {
        const data = await fetch({...options})
        // we need checkout id
        
        // get checkout


        // if there is no checkout then create checkout
        return {
            data
        }
    },
    useHook: ({useData}: any) => {
        const data = useData();
        return {
            data
        }
    },
}

export default useCart;