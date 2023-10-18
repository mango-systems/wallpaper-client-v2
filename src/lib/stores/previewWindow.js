// @ts-nocheck
import { writable } from 'svelte/store';

const previewWindow = writable(
    {
        isOpenWindow: false,
        selectedImgHighRes: "",
    }
)

export default previewWindow