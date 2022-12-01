export interface ProductImage {
    url: string;
    alt?: string;
}

export interface ProductPrice {
    value: number;
    currencyCode: 'USB' | 'EUR' | string;
}

export interface ProductOptionValues {
    label: string;
    hexColor?: string;
}

export interface ProductOption {
    id: string;
    displayName: string;
    values: ProductOptionValues[];
}

export interface ProductVariant {
    id: string;
    name: string;
    // sku: string;
    // price: number;
    // listPrice?: number;
    // requiresShipping: boolean;
    options: ProductOption[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string;
    path: string;
    images: ProductImage[];
    price: ProductPrice;
    options: ProductOption[];
    variants: ProductVariant[];
}