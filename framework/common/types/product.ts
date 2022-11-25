export interface ProductImage {
    url: string;
    alt?: string;
}

export interface ProductPrice {
    value: number;
    currencyCode: 'USB' | 'EUR' | string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string;
    path: string;
    images: ProductImage[];
    price: ProductPrice;
}