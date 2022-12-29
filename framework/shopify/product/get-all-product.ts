import { normalizeProduct, getAllProductsQuery } from '../utils';
import { ProductConnection } from '../schema';
import { Product } from '@common/types/product';
import { ApiConfig } from '@common/types/api';

type ReturnType = {
    products: ProductConnection;
}

const getAllProduct = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await config.fetch<ReturnType>({ 
        query: getAllProductsQuery
    });
    // normalize and return new data!
    const products = data.products.edges.map(({ node: product }) =>  // we can alias the node to product
        normalizeProduct(product)
    ) ?? [];
    return products;
};

export default getAllProduct;