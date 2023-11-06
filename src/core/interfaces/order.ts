export interface Order {
    _id?: string;
    userId: string;
    products: Object[];
    usedDiscountCode: boolean;
    address: string;
    orderDate: string;
    isCompleted?: boolean;
}