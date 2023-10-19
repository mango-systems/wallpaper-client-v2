// @ts-nocheck
import { writable } from 'svelte/store';

const previewWindow = writable(
    {
        isOpenWindow: false,
        selectedImgHighRes: "",
        selectedImgThumbnail: "",
    }
)

export default previewWindow