export type OfferFeature = {
    name: string;
    active: boolean;
};

export type Offer = {
    name: string;
    description: string;
    price?: [string, string]; // monthly, yearly
    features: OfferFeature[];
};
