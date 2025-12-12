<script lang="ts">
  export let transparent = false;
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-colors duration-300 {transparent ? 'bg-transparent' : 'bg-lobby-bg/80 backdrop-blur-md'}">
  <a href="/" class="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.2 9.92154L20.6603 7L14.4 12L20.6603 17L13.2 14.0785L12 22L10.8 14.0785L3.33975 17L9.6 12L3.33975 7L10.8 9.92154L12 2Z" fill="currentColor"/>
    </svg>
    <span class="font-semibold text-sm">Lobby</span>
  </a>
  
  <div class="hidden md:block text-xs font-medium text-white/60 tracking-wide absolute left-1/2 transform -translate-x-1/2">
    Trusted by executives at high-growth companies.
  </div>

  <div class="flex items-center gap-6 text-xs font-medium text-white/70">
    <a href="#pricing" class="hover:text-white transition-colors">Pricing</a>
    <a href="#how-it-works" class="hover:text-white transition-colors">How it works</a>
    <a href="#signin" class="hover:text-white transition-colors">Sign in</a>
    <a href="#get-started" class="text-white hover:text-white transition-colors">Get started</a>
  </div>
</nav>
