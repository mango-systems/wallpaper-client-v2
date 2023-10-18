// @ts-nocheck
import { writable } from 'svelte/store';

const source = writable(
    {
        url: "example.com",
        mode: "v1"
    }
)

export default source
