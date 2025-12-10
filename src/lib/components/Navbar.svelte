<script lang="ts">
  export let transparent = false;
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-colors duration-300 {transparent ? 'bg-transparent' : 'bg-tatem-bg/80 backdrop-blur-md'}">
  <div class="flex-1"></div>
  
  <div class="hidden md:block text-xs font-medium text-white/60 tracking-wide absolute left-1/2 transform -translate-x-1/2">
    Join 10,000+ rethinking their email.
  </div>

  <div class="flex items-center gap-6 text-xs font-medium text-white/70">
    <a href="#pricing" class="hover:text-white transition-colors">Pricing</a>
    <a href="#changelog" class="hover:text-white transition-colors">Changelog</a>
    <a href="#signin" class="hover:text-white transition-colors">Sign in</a>
    <a href="#get-started" class="text-white hover:text-white transition-colors">Get started</a>
  </div>
</nav>
