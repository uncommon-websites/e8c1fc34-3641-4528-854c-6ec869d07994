<script lang="ts">
  export let title: string;
  export let headline: string;
  export let description: string;
</script>

<div class="py-24 px-4 md:px-8 max-w-6xl mx-auto">
  <div class="mb-8">
    <h3 class="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-2">{title}</h3>
    <h2 class="text-xl md:text-2xl font-medium text-white mb-1">
      <span class="font-bold">{headline}</span> <span class="text-gray-400">{description}</span>
    </h2>
  </div>
  
  <div class="w-full bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center relative">
    <slot />
  </div>
</div>
