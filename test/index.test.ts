import { test, expect } from 'vitest';
import { createFlexomClient } from '../src/index.js';

test('create Flexom v3 client', () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    expect(client).toBeTruthy();
});

test('create client and connect', async () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    const auth = await client.connect();
    expect(client).toBeTruthy();
    expect(auth.success).toBeTruthy();
});

test('create client and retreive setup', async () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    const setup = await client.getSetup();
    expect(client).toBeTruthy();
    expect(setup).toBeTruthy();
});
