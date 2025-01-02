export interface Pricing {
    id: number;
    pricingType: string;
    cost: number;
    pricingDescription: string;
    features: string[];
    createdAt: string;
    updatedAt: string;
}

export interface PricingResponse {
    message: string;
    pricing: Pricing[];
}
