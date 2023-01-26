import { ActionGroup } from "./action";


export type ExecState =
    | 'INITIALIZED'
    | 'NOT_TRANSMITTED'
    | 'TRANSMITTED'
    | 'IN_PROGRESS'
    | 'COMPLETED'
    | 'FAILED'
    | 'QUEUED_SERVER_SIDE'
    | 'QUEUED_GATEWAY_SIDE'
    | 'UNKNOWN';

export type ExecSubType = 'MANUAL_CONTROL' | 'DISCRETE_TRIGGER_USER' | 'TIME_TRIGGER' | 'IFT_CONDITION';

export type Exec = {
    /**
    * The execution start time
    */
    startTime: number;

    /**
    * The execution owner
    */
    owner: string;

    /**
    * The execution ID
    */
    id: string;

    /**
    * The execution description
    */
    description: string;

    /**
    * The execution action group
    */
    actionGroup: ActionGroup;

    /**
    * The execution state
    */
    state: ExecState;

    /**
    * The execution type
    */
    executionType: string;

    /**
    * The execution sub type
    */
    executionSubType: ExecSubType;
};

export type ExecCommand = {
    /**
    * The execution command name
    */
    name: string;

    /**
    * The execution command parameters
    */
    parameters: string[];
};

export type ExecAction = {
    /**
    * An array of commands to execute
    */
    commands: ExecCommand[];

    /**
    * The deviceURL
    */
    deviceURL: string;
};

export type ExecApplyRequest = {
    /**
    * The label of the execution command
    */
    label: string;

    /**
    * An array of actions to execute
    */
    actions: ExecAction[];
};


export interface ExecHistory extends Omit<Exec, 'description' & 'actionGroup'> {
    /**
    * The time at which the execution occured
    */
    eventTime: number;

    /**
    * Action group object identifier
    */
    actionGroupOID: string;

    /**
    * The time at which the execution ended
    */
    endTime: number;

    /**
    * The effective time at which the execution occured
    */
    effectiveStartTime: number;

    /**
    * Duration of the execution
    */
    duration: number;

    /**
    * Label of the execution
    */
    label: string;

    /**
    * Type of the execution, concatenation of executionType and executionSubType
    */
    type: string;

    /**
    * The failure type  // TODO: More detailed type (NO_FAILURE)
    */
    failureType: string;

    /**
    * Metadata
    */
    metaData: string;

    /**
    * An array of the commands, basically the same as the commands array
    */
    commandLogs: ExecHistoryCommand[];

    /**
    * An array of the commands
    */
    commands: ExecHistoryCommand[];
};

export type ExecHistoryCommand = {
    /**
    * DeviceURL
    */
    deviceURL: string;

    /**
    * The command name
    */
    command: string;

    /**
    * An array of parameters
    */
    parameters: string[];

    /**
    * Unknown
    */
    rank: number;

    /**
    * Unknown
    */
    dynamic: false;

    /**
    * The execution command state
    */
    state: ExecState;

    /**
    * The failure type
    */
    failureType: string;
}
