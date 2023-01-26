import got, { AfterResponseHook } from 'got';
import { CookieJar } from 'tough-cookie';
import { FlexomService, ActionGroup, ExecApplyRequest } from './model';

/**
 * The API Client Service.
 * @constructor
 * @returns {FlexomService}
 */
export function createFlexomService(
    afterResponseHook?: AfterResponseHook[]
): FlexomService {
    const cookieJar = new CookieJar();
    const httpClient = got.extend({
        prefixUrl: 'https://ha108-1.overkiz.com/',
        headers: {
            'User-Agent': 'Flexom/139 CFNetwork/1312 Darwin/21.0.0',
        },
        cookieJar,
        hooks: {
            afterResponse: afterResponseHook,
        },
    });

    /**
     * Root endpoints
     * enduser-mobile-web/enduserAPI/
     */

    const login: FlexomService['login'] = async (
        username: string,
        password: string
    ) => {
        return await httpClient
            .post('enduser-mobile-web/enduserAPI/login', {
                form: {
                    userId: username,
                    userPassword: password,
                },
            })
            .json();
    };

    const logout: FlexomService['logout'] = async () => {
        return await httpClient
            .post('enduser-mobile-web/enduserAPI/logout')
            .json();
    };

    const getActionGroups: FlexomService['getActionGroups'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/actionGroups')
            .json();
    };

    const getActionGroup: FlexomService['getActionGroup'] = async (
        oid: string
    ) => {
        return await httpClient
            .get(`enduser-mobile-web/enduserAPI/actionGroups/${oid}`)
            .json();
    };

    const updateActionGroup: FlexomService['updateActionGroup'] = async (
        actionGroup: ActionGroup
    ) => {
        return await httpClient
            .put(`enduser-mobile-web/enduserAPI/actionGroups`, {
                json: actionGroup,
            })
            .json();
    };

    const getHistory: FlexomService['getHistory'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/history')
            .json();
    };

    /**
     * Enduser endpoints
     * enduser-mobile-web/enduserAPI/enduser/
     */

    const getMainAccount: FlexomService['getMainAccount'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/enduser/mainAccount')
            .json();
    };

    const getSecondaryAccounts: FlexomService['getSecondaryAccounts'] =
        async () => {
            return await httpClient
                .get('enduser-mobile-web/enduserAPI/enduser/secondaryAccounts')
                .json();
        };

    const getPreferences: FlexomService['getPreferences'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/enduser/preferences')
            .json();
    };

    /**
     * Enduser Setup endpoints
     * enduser-mobile-web/enduserAPI/enduser/setup/
     */

    const getSetup: FlexomService['getSetup'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup')
            .json();
    };

    const getGateways: FlexomService['getGateways'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup/gateways')
            .json();
    };

    const getGatewayVersion: FlexomService['getGatewayVersion'] = async (
        gatewayId: string
    ) => {
        return await httpClient
            .get(
                `enduser-mobile-web/enduserAPI/setup/gateway/${gatewayId}/version`
            )
            .json();
    };

    const getPlaces: FlexomService['getPlaces'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup/places')
            .json();
    };

    const createPlace: FlexomService['createPlace'] = async ({
        rootPlaceId,
        type,
        label,
    }) => {
        return await httpClient
            .post(
                `enduser-mobile-web/enduserAPI/setup/places/${rootPlaceId}/subPlaces`,
                { json: { type, label } }
            )
            .json();
    };

    const updatePlace: FlexomService['updatePlace'] = async ({
        placeOID,
        type,
        label,
    }) => {
        return await httpClient
            .put(
                `enduser-mobile-web/enduserAPI/setup/places/${placeOID}`,
                { json: { type, label } }
            )
            .json();
    };

    const deletePlace: FlexomService['deletePlace'] = async (
        placedId: string
    ) => {
        return await httpClient
            .delete(`enduser-mobile-web/enduserAPI/setup/places/${placedId}`)
            .json();
    };

    const getDevices: FlexomService['getDevices'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup/devices')
            .json();
    };

    const getDevice: FlexomService['getDevice'] = async (deviceURL: string) => {
        return await httpClient
            .get(
                `enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(
                    deviceURL
                )}`
            )
            .json();
    };

    const relocateDevice: FlexomService['relocateDevice'] = async (
        deviceURL: string,
        placeId: string
    ) => {
        return await httpClient
            .put(
                `enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(
                    deviceURL
                )}/relocate/${placeId}`
            )
            .json();
    };

    const renameDevice: FlexomService['renameDevice'] = async (
        deviceURL: string,
        name: string
    ) => {
        return await httpClient
            .put(
                `enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(
                    deviceURL
                )}/${name}`
            )
            .json();
    };

    const getDuskTime: FlexomService['getDuskTime'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup/duskTime')
            .json();
    };

    const getDawnTime: FlexomService['getDawnTime'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/setup/dawnTime')
            .json();
    };

    const getThirdpartyActivated: FlexomService['getThirdpartyActivated'] =
        async () => {
            return await httpClient
                .get('enduser-mobile-web/enduserAPI/setup/thirdparty/activated')
                .json();
        };

    /**
     * Exec endpoints
     * enduser-mobile-web/enduserAPI/exec/
     */

    const getCurrentExec: FlexomService['getCurrentExec'] = async () => {
        return await httpClient
            .get('enduser-mobile-web/enduserAPI/exec/current')
            .json();
    };

    const applyExec: FlexomService['applyExec'] = async (
        request: ExecApplyRequest
    ) => {
        return await httpClient
            .post('enduser-mobile-web/enduserAPI/exec/apply', { json: request })
            .json();
    };

    /**
     * Events endpoints
     * enduser-mobile-web/enduserAPI/events/
     */

    const registerEvent: FlexomService['registerEvent'] = async () => {
        return await httpClient
            .post('enduser-mobile-web/enduserAPI/events/register')
            .json();
    };

    const fetchEvent: FlexomService['fetchEvent'] = async (eventId: string) => {
        return await httpClient
            .post(`enduser-mobile-web/enduserAPI/events/${eventId}/fetch`)
            .json();
    };

    return {
        getSetup,
        getGateways,
        getGatewayVersion,
        getPlaces,
        getActionGroups,
        getActionGroup,
        getCurrentExec,
        getMainAccount,
        getSecondaryAccounts,
        getHistory,
        getPreferences,
        getDuskTime,
        getDawnTime,
        getThirdpartyActivated,
        getDevice,
        getDevices,
        renameDevice,
        relocateDevice,
        createPlace,
        updatePlace,
        deletePlace,
        login,
        logout,
        registerEvent,
        fetchEvent,
        updateActionGroup,
        applyExec,
    };
}
