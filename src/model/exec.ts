import { ActionGroup } from './account';

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

export type ExecSubType = 'MANUAL_CONTROL' | 'TIME_TRIGGER' | 'IFT_CONDITION';

export type Exec = {
    startTime: number;
    owner: string;
    id: string;
    description: string;
    actionGroup: ActionGroup;
    state: ExecState;
    executionType: string;
    executionSubType: ExecSubType;
};

export type ExecCommand = {
    name: string;
    parameters: string[];
};

export type ExecAction = {
    commands: ExecCommand[];
    deviceURL: string;
};

export type ExecApplyRequest = {
    label: string;
    actions: ExecAction[];
};
