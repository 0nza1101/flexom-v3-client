/** TODO Find all place type numbers **/


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
    type: number;

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
     * Place type number reference the icon in the app. TODO : List all possible place type
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
    placeOID: string;

    /**
    * The updated label of the place
    */
    label: string;

    /**
     * Place type number reference the icon in the app. TODO : List all possible place type
     */
    type: string;
}
