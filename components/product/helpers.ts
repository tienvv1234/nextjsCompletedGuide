import { Product } from "@common/types/product";


type AvailableOptions = 'size' | 'color' | string;

export type Choices = {
    [P in AvailableOptions]: string;
}

export const getVariant = (product: Product, choices: Choices) => {
    const variant = product.variants.find((variant) => {
        const isMatchingChoice = variant.options.every((variantOption) => {
            const optionName = variantOption.displayName.toLowerCase()
            if (optionName in choices) {
                if (choices[optionName] === variantOption.values[0].label) {
                    return true;
                }
            }
            return false;
        });
        return isMatchingChoice;
    })
    return variant;
}
