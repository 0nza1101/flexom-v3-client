import {
    Account,
    Authorization,
    Preference,
    SecondaryAccount,
    History,
} from './account';
import { ActionGroup, CreateActionGroupRequest } from './action';
import { Device } from './device';
import { Event, EventRegister } from './event';
import { Exec, ExecApplyRequest } from './exec';
import { Gateway } from './gateway';
import { Place, CreatePlaceRequest, UpdatePlaceRequest } from './place';
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
     *  Get the main account informations. \
     *  The main account is the account you currently use to request this ressource in case of a secondary account.
     */
    getMainAccount: () => Promise<Account>;

    /**
     *  Retreive all secondary accounts. \
     *  If you use this request with a secondary account you will get yours full detail and only others secondary accounts userIds
     */
    getSecondaryAccounts: () => Promise<SecondaryAccount[]>;

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
     *  @param {string} actionGroupId - Action group object identifier
     */
    getActionGroup: (actionGroupId: string) => Promise<ActionGroup>;

    /**
     * 	Create an ActionGroup
     *  @param {CreateActionGroupRequest} request - Create action group request
     */
    createActionGroup: (request: CreateActionGroupRequest) => Promise<{ actionGroupOID: string }>;

    /**
     * 	Update a specific ActionGroup
     *  @param {ActionGroup} actionGroup - ActionGroup object
     */
    updateActionGroup: (actionGroup: ActionGroup) => Promise<void>;

    /**
     * 	Create an ActionGroup
     *  @param {actionGroupId} actionGroupId - Action group object identifier
     */
    deleteActionGroup: (actionGroupId: string) => Promise<void>;

    /**
     *  Retreive executions history
     */
    getHistory: () => Promise<History[]>;

    /**
     *  Retreive your whole setup (gateways, places, devices...)
     */
    getSetup: () => Promise<Setup>;

    /**
     *  Gets all gateways informations
     */
    getGateways: () => Promise<Gateway[]>;

    /**
     *  Get a specific gateway detailed version
     *  @param {string} gatewayId - Gateway ID
     */
    getGatewayVersion: (gatewayId: string) => Promise<string>;

    /**
     *  Retreive all places
     */
    getPlaces: () => Promise<Place>;

    /**
     *  Given a rootPlaceId, a type & label it create a subplace
     *  @param {CreatePlaceRequest} request - create place request
     */
    createPlace: (request: CreatePlaceRequest) => Promise<{ placeOID: string }>;

    /**
     *  Update a place name and type
     *  @param {string} placeId - place object identifier
     *  @param {string} label - label
     *  @param {string} type - type
     */
    updatePlace: (updatePlaceRequest: UpdatePlaceRequest) => Promise<void>;

    /**
     *  Delete a subplace
     *  @param {string} placeOID - place object identifier
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
    relocateDevice: (deviceURL: string, placeId: string) => Promise<void>;

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
     *  Retrieves the current running commands
     */
    getCurrentExec: () => Promise<Exec[]>;

    /**
     *  Execute action group
     *  @param {string} actionGroupId
     */
    execActionGroup: (actionGroupId: string) => Promise<{ execId: string }>;

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
