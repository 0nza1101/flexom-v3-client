export enum PlaceType {
    LIVING_ROOM = 14,
    BATHROOM = 8,
    BEDROOM = 5,
    BABY_ROOM = 7,
    KITCHEN = 1,
    OFFICE = 16,
    MEETING_ROOM = 3,
    TOILET = 33,
    APARTMENT = 201,
}

export type Place = {
    /**
     * Time the place was created
     */
    creationTime: number;

    /**
     * Last time the place was updated
     */
    lastUpdateTime: number;

    /**
     * The place label
     */
    label: string;

    /**
     * Place type number
     */
    type: PlaceType;

    /**
     * The place object identifier
     */
    oid: string;

    /**
     * An array of the assigned sub places
     */
    subPlaces: Place[];
};

export type CreatePlaceRequest = {
    /**
     * The root place OID
     */
    rootPlaceId: string;

    /**
     * String representation of {@link PlaceType} value
     */
    type: string;

    /**
     * The label of the new place
     */
    label: string;
};

export type UpdatePlaceRequest = {
    /**
     * Place object identifier
     */
    placeId: string;

    /**
     * The updated label of the place
     */
    label: string;

    /**
     * String representation of {@link PlaceType} value
     */
    type: string;
};
