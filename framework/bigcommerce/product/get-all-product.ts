import { fetchApi, normalizeProduct, getAllProductsQuery } from '../utils';

const getAllProduct = async (): Promise<any[]> => {
    const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
    // normalize and return new data!
    const products = data.products.edges.map(({ node: product }) =>  // we can alias the node to product
        normalizeProduct(product)
    ) ?? [];
    return products;
};

export default getAllProduct;