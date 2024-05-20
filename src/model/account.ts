import { ExecHistory } from './exec.js';

export type Role = {
    /**
     * The role name
     */
    name: string;
};

export type Authorization = {
    /**
     * Indicates if the sign in succeed
     */
    success: boolean;

    /**
     * An array of all available roles for the user
     */
    roles: Role[];
};

export type BaseAccount = {
    /**
     * Time the account was created
     */
    creationTime: number;

    /**
     * Last time the account was updated
     */
    lastUpdateTime: number;

    /**
     * The user ID
     */
    userId: string;

    /**
     * The user account title
     */
    title: number;

    /**
     * The user's first name
     */
    firstName: string;

    /**
     * The user's last name
     */
    lastName: string;

    /**
     * The user's email
     */
    email: string;

    /**
     * The user's phone number
     */
    phoneNumber: string;

    /**
     * The user's locale
     */
    locale: string;

    /**
     * If the user has accepted the commercial mail agreement
     */
    commercialMailAgreement: boolean;

    /**
     * If the user account is a technical account
     */
    technicalAccount: boolean;
};

export interface Account extends BaseAccount {
    /**
     * If the email has been validated
     */
    emailValidated: boolean;
}

export interface SecondaryAccount extends BaseAccount {
    /**
     * Label of the secondary account
     */
    label: string;

    /**
     * Template used to create the secondary account
     */
    templateName: string;
}

export type Preference = {
    name: string;
    value: string;
    oid: string;
};

export type History = {
    execution: ExecHistory;
};
