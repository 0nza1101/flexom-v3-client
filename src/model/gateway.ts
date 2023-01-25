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

export type Gateway = {
    partners?: {
        activated: true;
        name: string;
        id: string;
        status: string;
    }[];
    gatewayId: string;
    type: number;
    subType: number;
    placeOID: string;
    alive: boolean;
    timeReliable: boolean;
    connectivity: {
        status: 'OK';
        protocolVersion: string;
    };
    upToDate: boolean;
    updateStatus: GatewayUpdateSatus;
    syncInProgress: boolean;
    mode: string;
    functions: string;
};
