<div class="relative w-full h-full flex items-center justify-center">
  <div class="flex flex-col items-center gap-6">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-400 animate-pulse"></div>
      <div class="text-white text-lg font-medium">AI analyzing patterns...</div>
    </div>
    <div class="flex gap-2">
      {#each Array(5) as _, i}
        <div 
          class="w-2 h-2 rounded-full bg-white/30"
          style="animation: pulse 1.5s ease-in-out {i * 0.2}s infinite"
        ></div>
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
</style>
