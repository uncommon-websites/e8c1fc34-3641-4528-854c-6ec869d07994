<script lang="ts">
    export let highlight = '';
</script>

<div class="relative w-full h-full flex items-center justify-center">
  <div class="flex flex-col items-center gap-8">
    <div class="text-center">
      <div class="text-white text-2xl font-bold mb-2">Executive Dashboard</div>
      <div class="text-gray-500 text-sm">Your command center</div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      {#each [
        { icon: '📧', label: 'Emails', count: '8' },
        { icon: '📅', label: 'Meetings', count: '3' },
        { icon: '✓', label: 'Tasks', count: '12' },
        { icon: '📊', label: 'Reports', count: '2' },
        { icon: '👥', label: 'Team', count: '5' },
        { icon: '⚡', label: 'Urgent', count: '1' }
      ] as item}
        <div class="flex flex-col items-center gap-2 p-4 bg-[#1a1a1a] rounded-lg border border-white/5 hover:border-white/20 transition-all cursor-pointer">
          <div class="text-2xl">{item.icon}</div>
          <div class="text-white text-xs font-medium">{item.label}</div>
          <div class="text-gray-500 text-xs">{item.count}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
