<script lang="ts">
  // Design Visual
</script>

<div class="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
  <div class="flex gap-6 items-center">
    {#each Array(8) as _, i}
      <div 
        class="rounded-full transition-all duration-500"
        style="
          width: {i === 7 ? '24px' : '20px'};
          height: {i === 7 ? '24px' : '20px'};
          background-color: {i === 7 ? 'white' : '#222'};
          opacity: {i === 7 ? '1' : 0.3 + (i * 0.05)};
        "
      ></div>
    {/each}
  </div>
</div>
