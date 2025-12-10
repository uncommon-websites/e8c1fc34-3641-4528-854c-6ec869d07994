<script lang="ts">
  // Security Visual
</script>

<div class="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
  <div class="grid grid-cols-3 gap-8">
    {#each Array(3) as _, groupIndex}
      <div class="grid grid-cols-3 gap-1.5">
        {#each Array(9) as _, i}
          <div 
            class="w-6 h-6 rounded-sm transition-all duration-500"
            class:bg-white={i % 2 === 0 && groupIndex === 1}
            class:bg-[#333]={!(i % 2 === 0 && groupIndex === 1)}
            style="opacity: {Math.random() * 0.5 + 0.2}"
          ></div>
        {/each}
      </div>
    {/each}
  </div>
</div>
