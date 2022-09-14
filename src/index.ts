import got from 'got';
import { FlexomService } from './model';
import { createFlexomService } from './service';

export type FlexomClient = Omit<FlexomService, 'logout' | 'login'> & {
    connect: () => ReturnType<FlexomService['login']>;
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
    password: string
): FlexomClient {
    const service = createFlexomService([
        async (response, retryWithMergedOptions) => {
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
        deletePlace: service.deletePlace,
        registerEvent: service.registerEvent,
        fetchEvent: service.fetchEvent,
        getCurrentExec: service.getCurrentExec,
        applyExec: service.applyExec,
        disconnect: service.logout,
    };
}

export * from './model';
