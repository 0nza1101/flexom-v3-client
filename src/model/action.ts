import { ExecCommand } from "./exec.js";

export interface ActionCommand extends ExecCommand {
    /**
     * Type of the command
     */
    type?: string;
}

export type Action = {
    /**
     * The device URL
     */
    deviceURL: string;

    /**
     * An array of the commands executed by the action
     */
    commands: ActionCommand[];
};

export type ActionGroup = {
    /**
     * Time the action group was created
     */
    creationTime?: number;

    /**
     * Last time the action group was updated
     */
    lastUpdateTime?: number;

    /**
     * The action group label
     */
    label: string;

    /**
     * Stringified JSON containing type for icon and is_favorite flag both used by the app
     */
    metadata: string;

    /**
     * Indicates if it's a shortcut
     */
    shortcut: boolean;

    /**
     * Notification type mask
     */
    notificationTypeMask?: number;

    /**
     * The notification condition
     */
    notificationCondition: string;

    /**
     * The action group object identifier
     */
    oid: string;

    /**
     * Array of the actions
     */
    actions: Action[];
};

export type CreateActionGroupRequest = {
    /**
     * The action group label
     */
    label: string;

    /**
     * Array of the actions
     */
    actions: Action[];

    /**
     * Stringified JSON containing type for icon and is_favorite flag both used by the app
     */
    metadata: string;

}
