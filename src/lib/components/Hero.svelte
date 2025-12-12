<script>
    import Navbar from './Navbar.svelte';
</script>

<section class="relative min-h-screen flex flex-col items-center pt-32 overflow-hidden bg-[#050505]">
    <!-- Gradient overlay to fade to black at bottom -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#5c7c8a] via-[#1a202c] to-[#050505] pointer-events-none opacity-80"></div>
    
    <Navbar transparent={true} />
    
    <div class="text-center z-10 px-4 max-w-4xl mx-auto mt-10">
        <div class="mb-6 text-white/80 text-sm font-medium tracking-wide">Now available for executives.</div>
        <h1 class="text-5xl md:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
            Your AI workflow manager.<br />
            Always one step ahead.
        </h1>
        
        <div class="flex items-center justify-center gap-6 mb-20">
            <a href="#get-started" class="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Get started</a>
            <span class="text-white/70 text-sm font-medium">Proactive. Intelligent. Anticipatory.</span>
        </div>
    </div>

    <!-- Hero Image Placeholder / Mockup -->
    <div class="relative w-full max-w-7xl mx-auto perspective-2000 z-10">
        <div class="transform rotate-x-20 rotate-y-minus-10 rotate-z-10 scale-90 translate-y-20 origin-top">
            <!-- Glassmorphism Card simulating the interface -->
            <div class="bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-white/10 relative">
                <!-- Header -->
                <div class="h-12 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-4">
                     <div class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                        <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div class="flex-1"></div>
                    <div class="text-xs text-gray-500">Inbox</div>
                </div>
                
                <!-- Email List -->
                <div class="bg-[#0f0f0f] p-0">
                    {#each Array(12) as _, i}
                        <div class="flex items-center gap-4 px-6 py-3 border-b border-white/5 hover:bg-white/5 group">
                            <div class="w-4 h-4 border border-gray-700 rounded-sm group-hover:border-gray-500"></div>
                            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex-shrink-0"></div>
                            <div class="w-32 h-2 bg-gray-800 rounded flex-shrink-0"></div>
                            <div class="flex-1 h-2 bg-gray-800/50 rounded"></div>
                            <div class="w-16 h-2 bg-gray-800/30 rounded flex-shrink-0"></div>
                        </div>
                    {/each}
                </div>
                
                <!-- Fade out at bottom of card -->
                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"></div>
            </div>
        </div>
    </div>
</section>

<style>
    .perspective-2000 {
        perspective: 2000px;
    }
    .rotate-x-20 {
        transform: rotateX(20deg) rotateY(-10deg) rotateZ(5deg);
    }
</style>
