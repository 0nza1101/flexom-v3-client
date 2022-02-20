import {
    Account,
    ActionGroup,
    Authorization,
    Preference,
    SecondaryAccount,
    History
} from './account';
import { Event, EventRegister } from './event';
import { Exec, ExecApplyRequest } from './exec';
import {
    CreatePlaceRequest,
    Device,
    Gateway,
    Place,
    Setup,
    ThirdPartyActivated,
    Timezone,
} from './setup';

export type FlexomService = {
    login: (username: string, password: string) => Promise<Authorization>;
    logout: () => Promise<{ logout: boolean }>;
    getMainAccount: () => Promise<Account>;
    getSecondaryAccounts: () => Promise<SecondaryAccount>;
    getPreferences: () => Promise<Preference[]>;
    getActionGroups: () => Promise<ActionGroup[]>;
    getActionGroup: (actionGroupId: string) => Promise<ActionGroup>;
    updateActionGroup: (actionGroup: ActionGroup) => Promise<void>;
    getHistory: () => Promise<{ execution: History[] }>;
    getSetup: () => Promise<Setup>;
    getGateways: () => Promise<Gateway[]>;
    getGatewayVersion: (gatewayId: string) => Promise<string>;
    getPlaces: () => Promise<Place>;
    createPlace: (request: CreatePlaceRequest) => Promise<{ placeOID: string }>;
    deletePlace: (placeOID: string) => Promise<void>;
    getDevices: () => Promise<Device[]>;
    getDevice: (deviceURL: string) => Promise<Device>;
    renameDevice: (deviceURL: string, name: string) => Promise<void>;
    relocateDevice: (deviceURL: string, placedId: string) => Promise<void>;
    getDuskTime: () => Promise<Timezone>;
    getDawnTime: () => Promise<Timezone>;
    getThirdpartyActivated: () => Promise<ThirdPartyActivated>;
    getCurrentExec: () => Promise<Exec[]>;
    applyExec: (request: ExecApplyRequest) => Promise<void>;
    registerEvent: () => Promise<EventRegister>;
    fetchEvent: (eventId: string) => Promise<Event[]>;
};

export interface FlexomApiError extends Error {
    errorCode: string;
    error: string;
}
