import { test, beforeAll, expect } from 'vitest';
import { createFlexomService } from '../src/service.js';
import { FlexomService } from '../src/model/core.js';
import { PlaceType } from '../src/model/place.js';
import { CreateActionGroupRequest } from '../src/index.js';

let service!: FlexomService;

beforeAll(async () => {
    service = await createFlexomService();
});

test('does login', async () => {
    const auth = await service.login(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!,
    );
    expect(auth.success).toBeTruthy();
});

test('get flexom current setup', async () => {
    const setup = await service.getSetup();
    expect(setup).toBeTruthy();
});

test('get flexom current gateways', async () => {
    const gateways = await service.getGateways();
    expect(gateways).toBeTruthy();
});

test('get flexom places', async () => {
    const setup = await service.getSetup();
    const place = await service.getPlaces();
    expect(place).toBeTruthy();
    expect(place.oid).equal(setup.rootPlace.oid);
});

test('create a flexom place', async () => {
    let places = await service.getPlaces();
    const newPlaceId = (
        await service.createPlace({
            rootPlaceId: places.oid,
            type: '201',
            label: 'new place',
        })
    ).placeOID;
    places = await service.getPlaces();
    const newPlace = places.subPlaces.find((p) => p.oid === newPlaceId);
    await service.deletePlace(newPlaceId);
    expect(newPlaceId).lengthOf(36);
    expect(newPlace).toBeTruthy();
    expect(newPlace?.label).equals('new place');
});

test('update a flexom place', async () => {
    let places = await service.getPlaces();
    const newPlaceId = (
        await service.createPlace({
            rootPlaceId: places.oid,
            type: PlaceType.APARTMENT.toString(),
            label: 'new place',
        })
    ).placeOID;
    await service.updatePlace({
        placeId: newPlaceId,
        type: PlaceType.APARTMENT.toString(),
        label: 'new updated place',
    });
    places = await service.getPlaces();
    const updatedPlace = places.subPlaces.find((p) => p.oid === newPlaceId);
    await service.deletePlace(newPlaceId);
    expect(updatedPlace).toBeTruthy();
    expect(updatedPlace?.label).equals('new updated place');
});

test('delete a flexom place', async () => {
    let places = await service.getPlaces();
    const newPlaceId = (
        await service.createPlace({
            rootPlaceId: places.oid,
            type: PlaceType.MEETING_ROOM.toString(),
            label: 'new place',
        })
    ).placeOID;
    places = await service.getPlaces();
    let newPlace = places.subPlaces.find((p) => p.oid === newPlaceId);
    expect(newPlace).toBeTruthy();
    await service.deletePlace(newPlaceId);
    places = await service.getPlaces();
    newPlace = places.subPlaces.find((p) => p.oid === newPlaceId);
    expect(newPlace).toBeFalsy();
});

test('get flexom devices', async () => {
    const setup = await service.getSetup();
    const devices = await service.getDevices();
    expect(devices).toBeTruthy();
    expect(devices.length).equals(setup.devices.length);
});

test('get flexom device', async () => {
    const devices = await service.getDevices();
    const device = await service.getDevice(devices[0].deviceURL);
    expect(device).toBeTruthy();
    expect(device.deviceURL).equals(devices[0].deviceURL);
});

test('relocate flexom device', async () => {
    const devices = await service.getDevices();
    const deviceURL = devices[0].deviceURL;
    const places = await service.getPlaces();
    const newPlaceId = (
        await service.createPlace({
            rootPlaceId: places.oid,
            type: PlaceType.APARTMENT.toString(),
            label: 'relocate device new place',
        })
    ).placeOID;
    await service.relocateDevice(deviceURL, newPlaceId);
    const device = await service.getDevice(deviceURL);
    await service.deletePlace(newPlaceId);
    expect(device.placeOID).equals(newPlaceId);
});

test('rename flexom device', async () => {
    const devices = await service.getDevices();
    let device = await service.getDevice(devices[0].deviceURL);
    expect(devices[0].label).equal(device.label);
    const oldLabel = device.label;
    const label = 'new device label';
    await service.renameDevice(device.deviceURL, label);
    device = await service.getDevice(device.deviceURL);
    await service.renameDevice(device.deviceURL, oldLabel);
    expect(device.label).equals(label);
});

test('fetch flexom event', async () => {
    const eventId = (await service.registerEvent()).id;
    const event = await service.fetchEvent(eventId);
    expect(event).toBeTruthy();
});

test('get flexom main account', async () => {
    const account = await service.getMainAccount();
    expect(account).toBeTruthy();
});

test('get flexom secondary accounts', async () => {
    const account = await service.getSecondaryAccounts();
    expect(account).toBeTruthy();
});

test('get flexom action groups', async () => {
    const actionGroups = await service.getActionGroups();
    expect(actionGroups).toBeTruthy();
});

test('create a flexom action group', async () => {
    const devices = await service.getDevices();
    const firstLight = devices.find((d) =>
        d.controllableName.includes('SwitchOnOffType'),
    );
    if (firstLight) {
        const request: CreateActionGroupRequest = {
            label: `test ${firstLight.label}`,
            actions: [
                {
                    deviceURL: firstLight?.deviceURL,
                    commands: [
                        {
                            name: 'off',
                            parameters: [],
                        },
                    ],
                },
            ],
            metadata: '{"type":"lights_on","is_favorite":false}',
        };
        const { actionGroupOID } = await service.createActionGroup(request);
        const actionGroup = await service.getActionGroup(actionGroupOID);
        await service.deleteActionGroup(actionGroupOID);
        expect(actionGroup).toBeTruthy();
        expect(actionGroup.label).equals(request.label);
    }
});

test('delete flexom action group', async () => {
    const devices = await service.getDevices();
    const firstLight = devices.find((d) =>
        d.controllableName.includes('SwitchOnOffType'),
    );
    if (firstLight) {
        const request: CreateActionGroupRequest = {
            label: `test ${firstLight.label}`,
            actions: [
                {
                    deviceURL: firstLight?.deviceURL,
                    commands: [
                        {
                            name: 'off',
                            parameters: [],
                        },
                    ],
                },
            ],
            metadata: '{"type":"lights_on","is_favorite":false}',
        };
        const { actionGroupOID } = await service.createActionGroup(request);
        await service.deleteActionGroup(actionGroupOID);
        const actionGroups = await service.getActionGroups();
        const actionGroup = actionGroups.find((a) => a.oid === actionGroupOID);
        expect(actionGroup).toBeFalsy();
    }
});

test('execute flexom action group', async () => {
    const devices = await service.getDevices();
    const firstLight = devices.find((d) =>
        d.controllableName.includes('SwitchOnOffType'),
    );
    if (firstLight) {
        const request: CreateActionGroupRequest = {
            label: `test ${firstLight.label}`,
            actions: [
                {
                    deviceURL: firstLight?.deviceURL,
                    commands: [
                        {
                            name: 'off',
                            parameters: [],
                        },
                    ],
                },
            ],
            metadata: '{"type":"lights_on","is_favorite":false}',
        };
        const { actionGroupOID } = await service.createActionGroup(request);
        const { execId } = await service.execActionGroup(actionGroupOID);
        await service.deleteActionGroup(actionGroupOID);
        expect(execId).toBeTruthy();
    }
});

test('get flexom history', async () => {
    const history = await service.getHistory();
    expect(history).toBeTruthy();
});

test('get flexom current exec', async () => {
    const exec = await service.getCurrentExec();
    expect(exec).toBeTruthy();
});

test('register flexom event', async () => {
    const eventId = (await service.registerEvent()).id;
    expect(eventId).lengthOf(36);
});

test('fetch flexom event', async () => {
    const eventId = (await service.registerEvent()).id;
    const event = await service.fetchEvent(eventId);
    expect(event).toBeTruthy();
});

test('does logout', async () => {
    const auth = await service.logout();
    expect(auth.logout).toBeTruthy();
});
