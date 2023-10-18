// @ts-nocheck
import { writable } from 'svelte/store';

const source = writable(
    {
        server_name: "",
        server_info: "",
        location_url: "",
        mode: "v1"
    }
)

export default source
