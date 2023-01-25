export type Device = {
    creationTime: number;
    lastUpdateTime: number;
    label: string;
    deviceURL: string;
    shortcut: boolean;
    controllableName: string;
    metadata: string;
    definition: Definition;
    states: State[];
    attributes: State[];
    available: boolean;
    enabled: boolean;
    placeOID: string;
    widget: string;
    type: number;
    oid: string;
    uiClass: string;
};

export type StateSource = {
    deviceURL: string;
    state: string;
    stateValue: string;
    profile: string;
};

export type StateTarget = {
    subSystem: number;
    actionCommand: {
        name: string;
    };
};

export type StateValue = {
    sources: StateSource[];
    targets: StateTarget[];
};

export type State = {
    name: string;
    type: number;
    value: string | number | boolean | StateValue[];
};

export type DefinitionState = {
    type: 'DiscreteState' | 'ContinuousState';
    values: string[];
    qualifiedName: string;
};

export type DefinitionCommand = {
    commandName: string;
    nparams: number;
};

export type Definition = {
    commands: DefinitionCommand[];
    dataProperties: {
        value: string;
        qualifiedName: string;
    }[]; // TODO: check if this is a string[] or a string
    widgetName: string;
    uiProfiles: string[];
    uiClass: string;
    qualifiedName: string;
    type: string;
    states: DefinitionState[];
};
