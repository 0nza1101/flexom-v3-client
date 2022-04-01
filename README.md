<p align="center">
  <img src="https://user-images.githubusercontent.com/13056641/161330088-e22c3b0a-c43f-429d-9bd9-cf55d9006e07.png" width="200px" height="100px">
</p>
  
<h1 align="center">
Flexom v3 API Client
</h1>
<br>
This library allows you to interact with the Flexom v3 API from Overkizz.

To be able to learn more about the Flexom v3 API model I used Poxyman to capture, inspect, and manipulate HTTP(s) requests/responses as well as decompiling the application APK.

| Method                   | Endpoint                                                                           | Description                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `login`                  | `POST enduser-mobile-web/enduserAPI/login`                                         | Login with an existing user.                                                                                                 |
| `disconnect`             | `POST enduser-mobile-web/enduserAPI/logout`                                        | Disconnect from Flexom v3                                                                                                    |
| `getActionGroups`        | `GET enduser-mobile-web/enduserAPI/actionGroups`                                   | Retreive all your own scenarios                                                                                              |
| `getActionGroup`         | `GET enduser-mobile-web/enduserAPI/getActionGroup`                                 | Retreive a specific scenario                                                                                                 |
| `updateActionGroup`      | `PUT enduser-mobile-web/enduserAPI/updateActionGroup`                              | Update a specific scenario                                                                                                   |
| `getHistory`             | `GET enduser-mobile-web/enduserAPI/history`                                        | Retreive all of your Flexom v3 history                                                                                       |
| `getMainAccount`         | `GET enduser-mobile-web/enduserAPI/enduser/mainAccount`                            | Get the main account informations                                                                                            |
| `getSecondaryAccounts`   | `GET enduser-mobile-web/enduserAPI/enduser/secondaryAccounts`                      | Retreive all secondary accounts                                                                                              |
| `getPreferences`         | `GET enduser-mobile-web/enduserAPI/enduser/preferences`                            | Retreive account preferences                                                                                                 |
| `getSetup`               | `GET enduser-mobile-web/enduserAPI/setup`                                          | Retreive your whole setup (gateways, places, devices...)                                                                     |
| `getGateways`            | `GET enduser-mobile-web/enduserAPI/setup/gateways`                                 | Get all gateways informations                                                                                                |
| `getGatewayVersion`      | `GET enduser-mobile-web/enduserAPI/setup/gateway/${gatewayId}/version`             | Get a gateway specific version                                                                                               |
| `getPlaces`              | `GET enduser-mobile-web/enduserAPI/setup/places`                                   | Retreive all places                                                                                                          |
| `createPlace`            | `GET enduser-mobile-web/enduserAPI/setup/places/${rootPlaceId}/subPlaces`          | Given a rootPlaceId it create a subplace                                                                                     |
| `deletePlace`            | `DELETE enduser-mobile-web/enduserAPI/setup/places/${placedId}`                    | Delete a subplace                                                                                                            |
| `getDevices`             | `GET enduser-mobile-web/enduserAPI/setup/devices`                                  | Get all devices                                                                                                              |
| `getDevice`              | `GET enduser-mobile-web/enduserAPI/setup/devices/${deviceURL}`                     | Get a specific device                                                                                                        |
| `relocateDevice`         | `PUT enduser-mobile-web/enduserAPI/setup/devices/${deviceURL}/relocate/${placeId}` | Relocate a device to a specific place                                                                                        |
| `renameDevice`           | `PUT enduser-mobile-web/enduserAPI/setup/devices/${deviceURL}/${name}`             | Rename the device                                                                                                            |
| `getDuskTime`            | `GET enduser-mobile-web/enduserAPI/setup/duskTime`                                 | Get dusk time                                                                                                                |
| `getDawnTime`            | `GET enduser-mobile-web/enduserAPI/setup/dawnTime`                                 | Get dusk time                                                                                                                |
| `getThirdpartyActivated` | `GET enduser-mobile-web/enduserAPI/setup/thirdparty/activated`                     | ?                                                                                                                            |
| `getCurrentExec`         | `GET enduser-mobile-web/enduserAPI/exec/current`                                   | Retreive the current commands execution                                                                                      |
| `applyExec`              | `POST enduser-mobile-web/enduserAPI/exec/apply`                                    | Execute commands                                                                                                             |
| `registerEvent`          | `POST enduser-mobile-web/enduserAPI/events/register`                               | Register an event                                                                                                            |
| `fetchEvent`             | `POST enduser-mobile-web/enduserAPI/events/${eventId}/fetch`                       | Listen to a registred event see [Event model](https://github.com/0nza1101/flexom-v3-api-client/blob/main/src/model/event.ts) |
