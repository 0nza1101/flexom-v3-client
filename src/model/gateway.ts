export type GatewayUpdateSatus =
    | 'UP_TO_DATE'
    | 'NOT_UPDATABLE'
    | 'READY_TO_UPDATE'
    | 'READY_TO_BE_UPDATED_BY_SERVER'
    | 'READY_TO_UPDATE_LOCALLY';

export type GatewayFunctions =
    | 'INTERNET_AUTHORIZATION'
    | 'SCENARIO_DOWNLOAD'
    | 'SCENARIO_AUTO_LAUNCHING'
    | 'SCENARIO_TELECO_LAUNCHING'
    | 'INTERNET_UPLOAD'
    | 'INTERNET_UPDATE'
    | 'TRIGGERS_SENSORS';

export type Connectivity = {
    /**
     * The connectivity status most likely 'OK'
     */
    status: 'OK';

    /**
     * The protocol version
     */
    protocolVersion: string;
}

export type Partner = {
    /**
     * Is the partneship is activated ?
     */
    activated: true;

    /**
     * Partner name
     */
    name: string;

    /**
     * The partner ID
     */
    id: string;

    /**
     * Partner status
     */
    status: string;
}

export type Gateway = {
    /**
     * An array of the partners
     */
    partners?: Partner[];

    /**
     * The gateway ID
     */
    gatewayId: string;

    /**
     * The gateway type number
     */
    type: number;

    /**
     * The gateway subtype number
     */
    subType: number;

    /**
     * The gateway assigned place object identifier
     */
    placeOID: string;

    /**
     * Indicates if the gateway alive
     */
    alive: boolean;

    /**
     * Indicates if the gateway is time reliable
     */
    timeReliable: boolean;

    /**
     * The gateway connectivity object
     */
    connectivity: Connectivity;

    /**
     * Indicates if the gateway is up to date
     */
    upToDate: boolean;

    /**
     * The gateway update status
     */
    updateStatus: GatewayUpdateSatus;

    /**
     * Indicates if the gateway is syncing
     */
    syncInProgress: boolean;

    /**
     * The gateway mode
     */
    mode: string;

    /**
     * All the gateway functions separated with a comma see {@link GatewayFunctions}
     */
    functions: string;
};
