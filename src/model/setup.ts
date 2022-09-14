export type Setup = {
    creationTime: number;
    lastUpdateTime: number;
    id: string;
    location: Location;
    gateways: Gateway[];
    devices: Device[];
    zones: any[];
    resellerDelegationType: string;
    metadata: string;
    oid: string;
    rootPlace: {
        creationTime: number;
        lastUpdateTime: number;
        label: string;
        type: number;
        oid: string;
        subPlaces: any[];
    };
    features: any[];
};

export type Location = {
    creationTime: number;
    lastUpdateTime: number;
    city: string;
    country: string;
    postalCode: number;
    addressLine1: string;
    addressLine2: string;
    timezone: string;
    longitude: number;
    latitude: number;
    twilightMode: number;
    twilightAngle: string;
    twilightCity: string;
    summerSolsticeDuskMinutes: number;
    winterSolsticeDuskMinutes: number;
    twilightOffsetEnabled: boolean;
    dawnOffset: number;
    duskOffset: number;
};

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

export type Timezone = {
    hours: number;
    minutes: number;
    utc: number;
};

export type ThirdPartyActivated = {
    thirdPartyModelSetupUsers: any[];
    activatedModels: any[];
};

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

export type DefinitionState = {
    type: 'DiscreteState' | 'ContinuousState';
    values: string[];
    qualifiedName: string;
};

export type DefinitionCommand = {
    commandName: string;
    nparams: number;
};

export type Definition = {
    commands: DefinitionCommand[];
    dataProperties: {
        value: string;
        qualifiedName: string;
    }[]; // TODO: check if this is a string[] or a string
    widgetName: string;
    uiProfiles: string[];
    uiClass: string;
    qualifiedName: string;
    type: string;
    states: DefinitionState[];
};

export type StateSource = {
    deviceURL: string;
    state: string;
    stateValue: string;
    profile: string;
};

export type StateTarget = {
    subSystem: number;
    actionCommand: {
        name: string;
    };
};

export type StateValue = {
    sources: StateSource[];
    targets: StateTarget[];
};

export type State = {
    name: string;
    type: number;
    value: string | number | boolean | StateValue[];
};

export type Device = {
    creationTime: number;
    lastUpdateTime: number;
    label: string;
    deviceURL: string;
    shortcut: boolean;
    controllableName: string;
    metadata: string;
    definition: Definition;
    states: State[];
    attributes: State[];
    available: boolean;
    enabled: boolean;
    placeOID: string;
    widget: string;
    type: number;
    oid: string;
    uiClass: string;
};
