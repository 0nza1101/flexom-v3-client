export type Authorization = {
    success: boolean;
    roles: {
        name: string;
    }[];
};

export type BaseAccount = {
    creationTime: number;
    lastUpdateTime: number;
    userId: string;
    title: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    locale: string;
    commercialMailAgreement: boolean;
    technicalAccount: boolean;
};

export interface Account extends BaseAccount {
    emailValidated: boolean;
}

export interface SecondaryAccount extends BaseAccount {
    label: string;
    templateName: string;
}

export type Preference = {
    name: string;
    value: string;
    oid: string;
};

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

export type History = {
    eventTime: number;
    owner: string;
    source: string;
    endTime: number;
    effectiveStartTime: number;
    duration: number;
    id: string;
    label: string;
    type: string;
    state: string;
    failureType: string;
    commands: {
        deviceURL: string;
        command: string;
        parameters: string[];
        rank: number;
        dynamic: false;
        state: string;
        failureType: string;
    }[];
    executionType: string;
    executionSubType: string;
};
