import { Device } from './device';
import { Gateway } from './gateway';

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

export type Timezone = {
    hours: number;
    minutes: number;
    utc: number;
};

export type ThirdPartyActivated = {
    thirdPartyModelSetupUsers: any[];
    activatedModels: any[];
};
