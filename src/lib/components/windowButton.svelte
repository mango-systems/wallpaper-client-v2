<script>
    /**
	 * @type {() => void}
	 */
    export let windowButtonEvent;
    function handleChildClick() {
        windowButtonEvent();
    }

</script>

<button class="w-[28px] aspect-square p-[5px] hover:bg-[#b9b9b9] rounded-full bg-[#d9d9d9] dark:bg-[#444444] hover:dark:bg-neutral-600" on:click={handleChildClick}>
    <div class="dark:fill-[#d4d4d4] fill-[#1d1d1d]">
        <slot />
    </div>
</button>