import {
    ImageEdge,
    MoneyV2,
    Product as ShopifyProduct,
    ProductOption,
    ProductVariantConnection,
    SelectedOption,
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

const normalizeProductOption = ({id, name: displayName, values}: ProductOption ) => {
    return {
        id,
        displayName,
        values: values.map(value => {
            let output: any = {
                label: value
            }

            if (displayName.match(/colou?r/gi)) {
                output = {
                    ...output,
                    hexColor: value,
                };
            }
            return output;
        }),
    }
}

const normalizeProductVariants = ({edges}: ProductVariantConnection) => {
    return edges.map(({node: {id, title, sku, selectedOptions, priceV2, compareAtPriceV2}}) => {
        return {
            id,
            name: title,
            sku: sku || id,
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requiresShipping: true,
            options: selectedOptions.map(({name, value}: SelectedOption) => {
                const option = normalizeProductOption({id, name, values: [value]});
                return option;
            }),
        }
    });
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
        options,
        variants,
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
        options: options ? options.filter(o => o.name !== 'Title').map(o => normalizeProductOption(o)) : [],
        variants: variants ? normalizeProductVariants(variants) : [],
        ...rest,
    };

    return product;
}