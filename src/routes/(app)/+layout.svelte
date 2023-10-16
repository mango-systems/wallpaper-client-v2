<div class="w-full h-full flex flex-row">
    <div class="hidden md:block">
        <div id="sidebar" class="h-full bg-AdwBackgroundSidebar w-[25%] md:max-w-[255px] lg:max-w-[270px] rounded-l-AdwWindow min-w-[240px] flex-grow">
            <h1 class="text-lg">HELLO SIDEBAR</h1>
            <!-- named slot: sidebar -->
        </div>
    </div>
    <div id="seperator" class="h-full py-1">
        <div class="h-full w-[2px] bg-AdwBorder"></div>
    </div>
    <div id="main-area" class="w-full bg-AdwBackground rounded-r-AdwWindow">
        <!-- named slot: mainarea -->
        <slot />
    </div>
</div>