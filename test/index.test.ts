import { test, expect } from 'vitest';
import { createFlexomClient } from '../src';

test('Create Flexom v3 client', () => {
    const client = createFlexomClient(
        process.env.FLEXOM_USERNAME!,
        process.env.FLEXOM_PASSWORD!
    );
    expect(client).toBeTruthy();
});