<script lang="ts">
  // Shortcuts Visual
</script>

<div class="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a]">
  <div class="grid gap-1.5 p-4 bg-[#111] rounded-xl border border-[#222]">
    <!-- Row 1 -->
    <div class="flex gap-1.5">
      {#each Array(14) as _, i}
        <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {/each}
    </div>
    <!-- Row 2 -->
    <div class="flex gap-1.5">
      <div class="w-12 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {#each Array(12) as _, i}
        <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {/each}
      <div class="w-10 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
    </div>
    <!-- Row 3 -->
    <div class="flex gap-1.5">
      <div class="w-14 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {#each Array(11) as _, i}
        <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {/each}
      <div class="w-16 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
    </div>
    <!-- Row 4 -->
    <div class="flex gap-1.5">
      <div class="w-20 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {#each Array(10) as _, i}
        <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      {/each}
      <div class="w-20 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
    </div>
    <!-- Row 5 -->
    <div class="flex gap-1.5 justify-center">
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-48 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
      <div class="w-8 h-8 bg-[#1a1a1a] rounded border border-[#2a2a2a]"></div>
    </div>
  </div>

  <div class="mt-6 bg-[#1a1a1a] border border-[#333] px-3 py-1.5 rounded text-xs text-gray-400 font-medium">
    Keyboard shortcuts
  </div>
</div>
