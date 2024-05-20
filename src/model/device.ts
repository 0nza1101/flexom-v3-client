export type Device = {
    /**
     * Time the device was created
     */
    creationTime: number;

    /**
     * Last time the device was updated
     */
    lastUpdateTime: number;

    /**
     * The device label
     */
    label: string;

    /**
     * The device URL
     */
    deviceURL: string;

    /**
     * Indicates if it's a shortcut
     */
    shortcut: boolean;

    /**
     * Controllable name
     */
    controllableName: string;

    /**
     * Device metadata
     */
    metadata: string;

    /**
     * Device definition object
     */
    definition: Definition;

    /**
     * Array of the device main states
     */
    states: State[];

    /**
     * Array of the device main attributes
     */
    attributes: State[];

    /**
     * Indicates if the device is available
     */
    available: boolean;

    /**
     * Indicates if the device is enabled
     */
    enabled: boolean;

    /**
     * The device assigned place object identifier
     */
    placeOID: string;

    /**
     * Device widget name
     */
    widget: string;

    /**
     * Device type
     */
    type: number;

    /**
     * The device object identifier
     */
    oid: string;

    /**
     * The device ui class used by the app
     */
    uiClass: string;
};

export type StateSource = {
    /**
     * The deviceURL of the state source
     */
    deviceURL: string;

    /**
     * The state name of the state source
     */
    state: string;

    /**
     * The actual state value of the state source
     */
    stateValue: string;

    /**
     * Unknown
     */
    profile: number;
};

export type StateTarget = {
    /**
     * Unknown
     */
    subSystem: number;

    /**
     * The action command on the state target
     */
    actionCommand: {
        /**
         * Name of the action command
         */
        name: string;
    };
};

export type StateValue = {
    /**
     * Template used to create the secondary account
     */
    sources: StateSource[];

    /**
     * Template used to create the secondary account
     */
    targets: StateTarget[];
};

export type State = {
    /**
     * The state name
     */
    name: string;

    /**
     * The state type
     */
    type: number;

    /**
     * The actual value of the state
     */
    value: string | number | boolean | StateValue[];
};

export type DefinitionState = {
    /**
     * The definition state type
     */
    type: string; // 'DiscreteState' | 'ContinuousState' | 'DataState';

    /**
     * The definition state value
     */
    value?: string | string[];

    /**
     * The name of the definition state
     */
    qualifiedName: string;
};

export type DefinitionCommand = {
    /**
     * The definition command name
     */
    commandName: string;

    /**
     * The number of params the definiton command takes
     */
    nparams: number;
};

export type Definition = {
    /**
     * An array of the available commands for the definition
     */
    commands: DefinitionCommand[];

    /**
     * An array of the definition data properties
     */
    dataProperties: {
        value: string;
        qualifiedName: string;
    }[];

    /**
     * The definition widget name
     */
    widgetName: string;

    /**
     * An array of the definition ui profiles used by the app
     */
    uiProfiles: string[];

    /**
     * The definition ui class used by the app
     */
    uiClass: string;

    /**
     * The name of the definition
     */
    qualifiedName: string;

    /**
     * The defition type
     */
    type: string;

    /**
     * An array of the definition states
     */
    states: DefinitionState[];
};
