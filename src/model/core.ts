import {
    Account,
    Authorization,
    Preference,
    SecondaryAccount,
    History,
} from './account';
import { ActionGroup } from './action';
import { Device } from './device';
import { Event, EventRegister } from './event';
import { Exec, ExecApplyRequest } from './exec';
import { Gateway } from './gateway';
import { Place, CreatePlaceRequest } from './place';
import { Setup, ThirdPartyActivated, Timezone } from './setup';

export type FlexomService = {
    /**
     *  Login with an existing user.
     *  @param {string} username - Flexom v3 username
     *  @param {string} password - Flexom v3 password
     */
    login: (username: string, password: string) => Promise<Authorization>;

    /**
     *  Disconnect from Flexom v3
     */
    logout: () => Promise<{ logout: boolean }>;

    /**
     *  Get the main account informations
     */
    getMainAccount: () => Promise<Account>;

    /**
     *  Retreive all secondary accounts
     */
    getSecondaryAccounts: () => Promise<SecondaryAccount>;

    /**
     *  Retreive account preferences
     */
    getPreferences: () => Promise<Preference[]>;

    /**
     *  Retrieve all ActionGroup
     */
    getActionGroups: () => Promise<ActionGroup[]>;

    /**
     *  Retreive a specific ActionGroup
     *  @param {string} oid - ActionGroup oid
     */
    getActionGroup: (actionGroupId: string) => Promise<ActionGroup>;

    /**
     * 	Update a specific ActionGroup
     *  @param {ActionGroup} actionGroup - ActionGroup object
     */
    updateActionGroup: (actionGroup: ActionGroup) => Promise<void>;

    /**
     *  Retreive executions history
     */
    getHistory: () => Promise<{ execution: History[] }>;

    /**
     *  Retreive your whole setup (gateways, places, devices...)
     */
    getSetup: () => Promise<Setup>;

    /**
     *  Gets all gateways informations
     */
    getGateways: () => Promise<Gateway[]>;

    /**
     *  Get a specific gateway version
     *  @param {string} gatewayId - Gateway ID
     */
    getGatewayVersion: (gatewayId: string) => Promise<string>;

    /**
     *  Retreive all places
     */
    getPlaces: () => Promise<Place>;

    /**
     *  Given a rootPlaceId, a type & label it create a subplace
     *  @param {string} rootPlaceId - Root place ID
     *  @param {string} type - Type of the place @see
     *  @param {string} label - Name of the sub place
     */
    createPlace: (request: CreatePlaceRequest) => Promise<{ placeOID: string }>;

    /**
     *  Delete a subplace
     *  @param {string} placedId - place ID
     */
    deletePlace: (placeOID: string) => Promise<void>;

    /**
     * Get all devices
     */
    getDevices: () => Promise<Device[]>;

    /**
     *  Get a specific device
     *  @param {string} deviceURL
     */
    getDevice: (deviceURL: string) => Promise<Device>;

    /**
     *  Rename a specific device
     *  @param {string} deviceURL
     *  @param {string} name - New device name
     */
    renameDevice: (deviceURL: string, name: string) => Promise<void>;

    /**
     *  Relocate a device to a specific place
     *  @param {string} deviceURL
     *  @param {string} placeId
     */
    relocateDevice: (deviceURL: string, placedId: string) => Promise<void>;

    /**
     *  Get dusk time
     */
    getDuskTime: () => Promise<Timezone>;

    /**
     *  Get dawn time
     */
    getDawnTime: () => Promise<Timezone>;

    /**
     *  Check if your setup is ThirdpartyActivated
     */
    getThirdpartyActivated: () => Promise<ThirdPartyActivated>;

    /**
     *  Retreive the current commands execution
     */
    getCurrentExec: () => Promise<Exec[]>;

    /**
     *  Execute commands
     *  @param {ExecApplyRequest} request
     */
    applyExec: (request: ExecApplyRequest) => Promise<void>;

    /**
     *  Register an event
     */
    registerEvent: () => Promise<EventRegister>;

    /**
     *  Listen to a registred event
     *  @param {string} eventId - Event ID
     */
    fetchEvent: (eventId: string) => Promise<Event[]>;
};

export class FlexomApiClientError extends Error {
    constructor(msg: string) {
        super(`[flexom-api-client] ERROR: (${msg})`);
    }
}
