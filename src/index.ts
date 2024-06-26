import got from 'got';
import { FlexomService } from './model/index.js';
import { createFlexomService } from './service.js';

export type FlexomClient = Omit<FlexomService, 'logout' | 'login'> & {
    /**
     *  Login with previously entered credentials
     */
    connect: () => ReturnType<FlexomService['login']>;

    /**
     * Disconnect
     */
    disconnect: FlexomService['logout'];
};

/*function catchError<T extends unknown[], U>(fn: (...args: T) => Promise<U>) {
    return (...args: T) =>
        fn(...args).catch(error => {
            throw new FlexomApiClientError(error);
        });
}*/

export function createFlexomClient(
    username: string,
    password: string,
): FlexomClient {
    const service = createFlexomService([
        async (
            response: { statusCode: number },
            retryWithMergedOptions: (arg0: any) => any,
        ) => {
            if (response.statusCode === 401) {
                await service.logout();
                await service.login(username, password);
                return retryWithMergedOptions(got.defaults.options);
            }
            return response;
        },
    ]);

    return {
        connect: () => service.login(username, password),
        getMainAccount: service.getMainAccount,
        getSecondaryAccounts: service.getSecondaryAccounts,
        getPreferences: service.getPreferences,
        getActionGroup: service.getActionGroup,
        getActionGroups: service.getActionGroups,
        updateActionGroup: service.updateActionGroup,
        createActionGroup: service.createActionGroup,
        deleteActionGroup: service.deleteActionGroup,
        getHistory: service.getHistory,
        getSetup: service.getSetup,
        getGateways: service.getGateways,
        getGatewayVersion: service.getGatewayVersion,
        getDawnTime: service.getDawnTime,
        getDuskTime: service.getDuskTime,
        getThirdpartyActivated: service.getThirdpartyActivated,
        getDevices: service.getDevices,
        getDevice: service.getDevice,
        renameDevice: service.renameDevice,
        relocateDevice: service.relocateDevice,
        getPlaces: service.getPlaces,
        createPlace: service.createPlace,
        updatePlace: service.updatePlace,
        deletePlace: service.deletePlace,
        registerEvent: service.registerEvent,
        fetchEvent: service.fetchEvent,
        getCurrentExec: service.getCurrentExec,
        applyExec: service.applyExec,
        execActionGroup: service.execActionGroup,
        disconnect: service.logout,
    };
}

export * from './model/index.js';
