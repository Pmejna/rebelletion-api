export interface ProductInterface {
    product_uuid: string;
    product_name: string;
    product_slug: string;
    product_price: number;
    product_description: string;
    product_code: string;
    product_size: number;
    product_brand: string;
    product_color: string;
    product_image: string;
    basket_created_datetime: Date;
    basket_updated_datetime: Date;
};