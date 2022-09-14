import { test, expect } from 'vitest';
import { createFlexomClient } from '../src';

test('Create Flexom v3 client', () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    expect(client).toBeTruthy();
});

test('Create client and connect', async () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    const auth = await client.connect();
    expect(client).toBeTruthy();
    expect(auth.success).toBeTruthy();
});


test('Create client and retreive setup', async () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    const setup = await client.getSetup();
    expect(client).toBeTruthy();
    expect(setup).toBeTruthy();
});
