export type Place = {
    creationTime: number;
    lastUpdateTime: number;
    label: string;
    type: number;
    oid: string;
    subPlaces: Place[];
};

export type CreatePlaceRequest = {
    rootPlaceId: string;
    type: string;
    label: string;
};
