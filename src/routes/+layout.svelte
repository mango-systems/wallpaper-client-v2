<script>
    import "../app.css";
</script>

<div class="w-screen h-screen">
  <div class="w-full h-full bg-AdwBackgroundPrimary rounded-AdwWindow">
    <div id="grab-area" data-tauri-drag-region class="h-10  absolute top-0 w-screen">
      <!-- grab area (debug in root layout) -->
    </div>

    <slot />
  </div>
</div>