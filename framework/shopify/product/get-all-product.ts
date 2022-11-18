import getAllProductQuery from "../utils/queries/get-all-products";
import fetchApi from '../utils/fetch-api';
import { ProductConnection } from '../schema';

type ReturnType = {
    products: ProductConnection;
}

const getAllProduct = async (): Promise<ProductConnection> => {
    const { data } = await fetchApi<ReturnType>({ query: getAllProductQuery });
    // normalize and return new data!
    return data.products;
};

export default getAllProduct;