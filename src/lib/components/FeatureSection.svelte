<script lang="ts">
  export let label: string;
  export let title: string;
  export let description: string;
</script>

<section class="py-24 px-4 max-w-5xl mx-auto">
  <div class="mb-8 text-left">
    <div class="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">{label}</div>
    <h2 class="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl">
      <span class="text-white font-medium">{title}</span> {description}
    </h2>
  </div>
  
  <div class="bg-[#0A0A0A] border border-white/5 rounded-xl w-full h-[400px] md:h-[500px] flex items-center justify-center relative overflow-hidden shadow-2xl">
    <slot />
  </div>
</section>
