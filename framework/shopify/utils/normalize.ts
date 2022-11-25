import {
    ImageEdge,
    MoneyV2,
    Product as ShopifyProduct,
} from '../schema';
import { Product } from '@common/types/product';

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) => {
    return edges.map(({node: {originalSrc: url, ...rest}}) => {
        return {
            url: `/images/${url}`,
            ...rest,
        }
    });
}

const normalizeProductPrice = ({amount, currencyCode}: MoneyV2) => {
    return {
        value: +amount,
        currencyCode,
    }
}

export function normalizeProduct(productionNode: ShopifyProduct): Product {
    const {
        id,
        title: name,
        handle,
        description,
        vendor,
        images: imagesConnection,
        priceRange,
        ...rest
    } = productionNode;

    const product = {
        id,
        name,
        description,
        vendor,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ''), // remove leading and trailing slashes
        images: normalizeProductImages(imagesConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...rest,
    };

    return product;
}