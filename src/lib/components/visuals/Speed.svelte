<div class="w-full h-full flex items-center justify-center">
  <div class="flex gap-3">
    {#each Array(12) as _, i}
      <div 
        class="w-4 h-24 bg-[#1a1a1a] transform -skew-x-12 rounded-sm"
        style="opacity: {i < 8 ? 0.2 + (i * 0.1) : 0.2}"
      ></div>
    {/each}
  </div>
</div>
