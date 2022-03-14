export interface ShoppingBasketInterface {
    basket_uuid: string;
    basket_items_number: number;
    basket_items_value: number;
    basket_vat: number;
    basket_delivery_cost: number;
    basket_total_value: number;
    basket_created_datetime: Date;
    basket_updated_datetime: Date;
    basket_user_uuid: string;
}