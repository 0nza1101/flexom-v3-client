import { Device } from './device.js';
import { Gateway } from './gateway.js';
import { Place } from './place.js';

export type Setup = {
    /**
     * Time the setup was created
     */
    creationTime: number;

    /**
     * Last time the setup was updated
     */
    lastUpdateTime: number;

    /**
     * The setup ID
     */
    id: string;

    /**
     * The setup location object
     */
    location: Location;

    /**
     * An array of gateways
     */
    gateways: Gateway[];

    /**
     * An array of available devices
     */
    devices: Device[];

    /**
     * An array of zones
     */
    zones: any[];

    /**
     * The reseller delegation type
     */
    resellerDelegationType: string;

    /**
     * The metadata
     */
    metadata: string;

    /**
     * The setup object identifier
     */
    oid: string;

    /**
     * The root place object
     */
    rootPlace: Place;

    /**
     * An array of available features
     */
    features: any[];
};

export type Location = {
    /**
     * Time the location was created
     */
    creationTime: number;

    /**
     * Last time the location was updated
     */
    lastUpdateTime: number;

    city: string;

    country: string;

    postalCode: number;

    addressLine1: string;

    addressLine2: string;

    timezone: string;

    longitude: number;

    latitude: number;

    /**
     * Unknown
     */
    twilightMode: number;

    twilightAngle: TwilightAngle;

    twilightCity: string;

    summerSolsticeDuskMinutes: number;

    winterSolsticeDuskMinutes: number;

    twilightOffsetEnabled: boolean;

    dawnOffset: number;

    duskOffset: number;
};

export type TwilightAngle = 'CIVIL' | 'NAUTICAL' | 'ASTRONOMICAL';

export type Timezone = {
    hours: number;
    minutes: number;
    utc: number;
};

export type ThirdPartyActivated = {
    thirdPartyModelSetupUsers: any[];
    activatedModels: any[];
};
