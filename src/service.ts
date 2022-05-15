import axios, { AxiosInstance } from 'axios';
import * as retryAxios from 'retry-axios';
import NodeFormData from 'form-data';
import { isNode } from "browser-or-node";
import { FlexomService, ActionGroup, ExecApplyRequest, Authorization } from './model';

/**
 * The API Client Service.
 * @constructor
 * @returns {FlexomService}
 */
export function createFlexomService(
    retry?: () => Promise<void>
): FlexomService {
    const client: AxiosInstance = axios.create({
        baseURL: 'https://ha108-1.overkiz.com/',
        headers: {
            'User-Agent': 'Flexom/139 CFNetwork/1312 Darwin/21.0.0',
        },
        withCredentials: true,
    });
    client.defaults.raxConfig = {
        retry: 1,
        instance: client,
        statusCodesToRetry: [[401, 401]],
        onRetryAttempt: async err => {
            if (retry) {
                await retry();
            }
        }
    };
    retryAxios.attach(client);

    /**
     * Root endpoints
     * enduser-mobile-web/enduserAPI/
     */

    const login: FlexomService['login'] = async (
        username: string,
        password: string
    ) => {
        const formData = isNode ? new NodeFormData() : new FormData();
        formData.append("userId", username);
        formData.append("userPassword", password);
        const { data, headers } = await client
            .post<Authorization>('enduser-mobile-web/enduserAPI/login', formData);
        (client.defaults.headers as any).Cookie = headers['set-cookie']
        return data;
    };

    const logout: FlexomService['logout'] = async () => {
        const { data } = await client.post<{ logout: boolean }>('enduser-mobile-web/enduserAPI/logout');
        return data;
    };

    const getActionGroups: FlexomService['getActionGroups'] = async () => {
        const { data } = await client.get<ActionGroup[]>('enduser-mobile-web/enduserAPI/actionGroups')
        return data;
    };

    const getActionGroup: FlexomService['getActionGroup'] = async (
        oid: string
    ) => {
        const { data } = await client.get(`enduser-mobile-web/enduserAPI/actionGroups/${oid}`)
        return data;
    };

    const updateActionGroup: FlexomService['updateActionGroup'] = async (
        actionGroup: ActionGroup
    ) => {
        const { data } = await client.put(`enduser-mobile-web/enduserAPI/actionGroups`, actionGroup);
        return data;
    };

    const getHistory: FlexomService['getHistory'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/history');
        return data;
    };

    /**
     * Enduser endpoints
     * enduser-mobile-web/enduserAPI/enduser/
     */

    const getMainAccount: FlexomService['getMainAccount'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/enduser/mainAccount');
        return data;
    };

    const getSecondaryAccounts: FlexomService['getSecondaryAccounts'] =
        async () => {
            const { data } = await client.get('enduser-mobile-web/enduserAPI/enduser/secondaryAccounts');
            return data;
        };

    const getPreferences: FlexomService['getPreferences'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/enduser/preferences');
        return data;
    };

    /**
     * Enduser Setup endpoints
     * enduser-mobile-web/enduserAPI/enduser/setup/
     */

    const getSetup: FlexomService['getSetup'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup');
        return data;
    };

    const getGateways: FlexomService['getGateways'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/gateways');
        return data;
    };

    const getGatewayVersion: FlexomService['getGatewayVersion'] = async (
        gatewayId: string
    ) => {
        const { data } = await client.get(`enduser-mobile-web/enduserAPI/setup/gateway/${gatewayId}/version`);
        return data;
    };

    const getPlaces: FlexomService['getPlaces'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/places');
        return data;
    };

    const createPlace: FlexomService['createPlace'] = async ({
        rootPlaceId,
        type,
        label,
    }) => {
        const { data } = await client.post(`enduser-mobile-web/enduserAPI/setup/places/${rootPlaceId}/subPlaces`, { type, label })
        return data;
    };

    const deletePlace: FlexomService['deletePlace'] = async (
        placedId: string
    ) => {
        const { data } = await client.delete(`enduser-mobile-web/enduserAPI/setup/places/${placedId}`)
        return data;
    };

    const getDevices: FlexomService['getDevices'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/devices')
        return data
    };

    const getDevice: FlexomService['getDevice'] = async (deviceURL: string) => {
        const { data } = await client.get(`enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(deviceURL)}`)
        return data
    };

    const relocateDevice: FlexomService['relocateDevice'] = async (
        deviceURL: string,
        placeId: string
    ) => {
        const { data } = await client.put(`enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(deviceURL)}/relocate/${placeId}`);
        return data
    };

    const renameDevice: FlexomService['renameDevice'] = async (
        deviceURL: string,
        name: string
    ) => {
        const { data } = await client.put(`enduser-mobile-web/enduserAPI/setup/devices/${encodeURIComponent(deviceURL)}/${name}`)
        return data
    };

    const getDuskTime: FlexomService['getDuskTime'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/duskTime')
        return data
    };

    const getDawnTime: FlexomService['getDawnTime'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/dawnTime')
        return data
    };

    const getThirdpartyActivated: FlexomService['getThirdpartyActivated'] =
        async () => {
            const { data } = await client.get('enduser-mobile-web/enduserAPI/setup/thirdparty/activated')
            return data
        };

    /**
     * Exec endpoints
     * enduser-mobile-web/enduserAPI/exec/
     */

    const getCurrentExec: FlexomService['getCurrentExec'] = async () => {
        const { data } = await client.get('enduser-mobile-web/enduserAPI/exec/current')
        return data
    };

    const applyExec: FlexomService['applyExec'] = async (
        request: ExecApplyRequest
    ) => {
        const { data } = await client.post('enduser-mobile-web/enduserAPI/exec/apply', request)
        return data
    };

    /**
     * Events endpoints
     * enduser-mobile-web/enduserAPI/events/
     */

    const registerEvent: FlexomService['registerEvent'] = async () => {
        const { data } = await client.post('enduser-mobile-web/enduserAPI/events/register')
        return data
    };

    const fetchEvent: FlexomService['fetchEvent'] = async (eventId: string) => {
        const { data } = await client.post(`enduser-mobile-web/enduserAPI/events/${eventId}/fetch`)
        return data
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
        deletePlace,
        login,
        logout,
        registerEvent,
        fetchEvent,
        updateActionGroup,
        applyExec,
    };
}
