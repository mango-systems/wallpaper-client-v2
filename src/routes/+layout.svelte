<script>
    import "../app.css";

    import startup from '$lib/logic/startup'
	import { onMount } from "svelte";

    onMount(async () => {
      startup()
    })
</script>

<div class="w-screen h-screen dark:text-neutral-50 text-neutral-900">
  <div class="w-full h-full bg-AdwBackgroundPrimary dark:bg-AdwBackgroundPrimaryDark rounded-AdwWindow  ">
    <!-- <div id="grab-area" data-tauri-drag-region class="h-10  absolute top-0 w-screen"> -->
      <!-- grab area (debug in root layout) -->
    <!-- </div> -->

    <div class="dark:border-[#28292ec4] border-[#28292e5b] border-[1.5px] w-full h-full rounded-AdwWindow">
      <slot />
    </div>
  </div>
</div>