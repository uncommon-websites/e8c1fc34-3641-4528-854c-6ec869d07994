<div class="w-full h-full flex items-center justify-center">
  <div class="flex gap-6 items-center">
    {#each Array(8) as _, i}
      <div 
        class="rounded-full transition-all duration-500"
        style="
          width: {i === 7 ? '24px' : '20px'};
          height: {i === 7 ? '24px' : '20px'};
          background-color: {i === 7 ? 'white' : '#222'};
          opacity: {i === 7 ? '1' : 0.3 + (i * 0.05)};
          box-shadow: {i === 7 ? '0 0 15px rgba(255,255,255,0.5)' : 'none'};
        "
      ></div>
    {/each}
  </div>
</div>
