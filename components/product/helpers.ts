import { Product } from "@common/types/product";


type AvailableOptions = 'size' | 'color' | string;

export type Choices = {
    [P in AvailableOptions]: string;
}

export function getVariant(product: Product, choices: Choices) {
    const variant = product.variants.find((variant) => {
        return   
    })
    return variant;
}
