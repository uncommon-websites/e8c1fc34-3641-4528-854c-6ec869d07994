<div class="w-full h-full flex items-center justify-center">
  <div class="flex gap-3">
    {#each Array(12) as _, i}
      <div 
        class="w-4 h-24 bg-gradient-to-t from-[#1a1a1a] to-white transform -skew-x-12 rounded-sm transition-all duration-500"
        style="opacity: {i < 8 ? 0.2 + (i * 0.1) : 0.2}; height: {i < 8 ? (i + 1) * 12 : 24}px"
      ></div>
    {/each}
  </div>
</div>
