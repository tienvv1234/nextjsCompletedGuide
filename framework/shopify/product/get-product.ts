import { ApiConfig } from '@common/types/api';

const getProduct = async (config: ApiConfig): Promise<any> => {

    return {
        product: {
            name: 'My super product',
            slug: 'my-super-product',
            description: 'This is a description',
        }
    }
};

export default getProduct;