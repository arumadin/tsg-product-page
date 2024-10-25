export interface ProductResponse {
    products: Product[];
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discount: number;
    label: string;
    images: string[];
    options: string[];
}