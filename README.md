<p align="center">
  <img src="https://user-images.githubusercontent.com/13056641/161330088-e22c3b0a-c43f-429d-9bd9-cf55d9006e07.png" width="150px" height="150px">
</p>
  
<h2 align="center">
Flexom V3 API client
</h2>
<br>
This library allows you to interact with the Flexom V3 API from Overkizz.

To be able to learn more about the Flexom v3 API model I used Poxyman to capture, inspect, and manipulate HTTP(s) requests/responses as well as decompiling the application APK. If you find something missing, feel free to contribute.

| Method | Description |
|--------|-------------|
| `login` | Login with an existing user. |
| `disconnect` | Disconnect from Flexom v3 |
| `getActionGroups` | Retreive all your own scenarios |
| `getActionGroup` | Retreive a specific scenario |
| `updateActionGroup` | Update a specific scenario |
| `getHistory` | Retreive all of your Flexom v3 history |
| `getMainAccount` | Get the main account informations |
| `getSecondaryAccounts` | Retreive all secondary accounts |
| `getPreferences` | Retreive account preferences |
| `getSetup` | Retreive your whole setup (gateways, places, devices...) |
| `getGateways` | Get all gateways informations |
| `getGatewayVersion` | Get a gateway specific version |
| `getPlaces` | Retreive all places |
| `createPlace` | Given a rootPlaceId it create a subplace |
| `deletePlace` | Delete a subplace |
| `getDevices` | Get all devices |
| `getDevice` | Get a specific device |
| `relocateDevice` | Relocate a device to a specific place |
| `renameDevice` | Rename the device |
| `getDuskTime` | Get dusk time |
| `getDawnTime` | Get dusk time |
| `getCurrentExec` | Retreive the current commands execution |
| `applyExec` | Execute commands |
| `registerEvent` | Register an event |
| `fetchEvent` | Listen to a registred event see [Event model](https://github.com/0nza1101/flexom-v3-client/blob/main/src/model/event.ts) |