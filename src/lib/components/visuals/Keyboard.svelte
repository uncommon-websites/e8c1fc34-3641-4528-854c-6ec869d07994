<script lang="ts">
    export let highlight = '';
</script>

<div class="grid gap-1.5 p-6 bg-[#111] rounded-xl border border-white/5 shadow-2xl">
    <!-- Keyboard Rows -->
    {#each [
        ['q','w','e','r','t','y','u','i','o','p', '[', ']'],
        ['a','s','d','f','g','h','j','k','l', ';', "'"],
        ['z','x','c','v','b','n','m', ',', '.', '/']
    ] as row, i}
        <div class="flex justify-center gap-1.5">
            {#each row as key}
                <div class="w-8 h-8 md:w-10 md:h-10 rounded bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-xs text-gray-600 uppercase font-medium shadow-sm transition-colors duration-300
                    {highlight === key ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110 z-10' : ''}">
                    {key}
                </div>
            {/each}
        </div>
    {/each}
    <div class="flex justify-center mt-4">
         <div class="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-white/5 text-[10px] text-gray-500 font-medium tracking-wide uppercase">Keyboard shortcuts</div>
    </div>
    
    {#if highlight === 'c'}
    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-lg text-sm text-white shadow-xl flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0">
        <span class="w-5 h-5 rounded bg-white text-black flex items-center justify-center text-xs font-bold">C</span>
        Compose
    </div>
    {/if}
</div>
