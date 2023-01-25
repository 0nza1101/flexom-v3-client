export type Action = {
    deviceURL: string;
    commands: {
        type: string;
        name: string;
        parameters: string[];
    }[];
};

export type ActionGroup = {
    creationTime?: number;
    lastUpdateTime?: number;
    label: string;
    metadata: string;
    shortcut: boolean;
    notificationTypeMask?: number;
    notificationCondition: string;
    oid: string;
    actions: Action[];
};
