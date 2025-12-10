<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import FeatureSection from "$lib/components/FeatureSection.svelte";
	import Footer from "$lib/components/Footer.svelte";
	
	import SplitInbox from "$lib/components/visuals/SplitInbox.svelte";
	import TextEditorSimple from "$lib/components/visuals/TextEditorSimple.svelte";
	import TextEditorToolbar from "$lib/components/visuals/TextEditorToolbar.svelte";
	import Speed from "$lib/components/visuals/Speed.svelte";
	import Design from "$lib/components/visuals/Design.svelte";
	import Keyboard from "$lib/components/visuals/Keyboard.svelte";
	import Security from "$lib/components/visuals/Security.svelte";
</script>

<main class="bg-tatem-bg min-h-screen text-white selection:bg-white/20">
	<Hero />
	
	<div class="mt-20 md:mt-40">
        <!-- Dark Mode Interface Section Divider -->
        <div class="px-4 max-w-6xl mx-auto mb-32 relative">
             <div class="aspect-video bg-[#0A0A0A] rounded-lg border border-white/5 flex flex-col justify-end p-6 md:p-10 relative overflow-hidden">
                 <!-- Simple representation of the dark UI screenshot from the middle of the page -->
                 <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                 <div class="relative z-10 flex justify-between items-end w-full">
                     <div class="flex items-center gap-2 text-white font-semibold">
                         <div class="w-4 h-4 bg-white rounded-full"></div> tatem
                     </div>
                 </div>
             </div>
             <div class="text-center mt-10 text-gray-500 text-sm flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
                 <span class="transform rotate-90">›</span>
                 See what makes Tatem different.
             </div>
        </div>

		<FeatureSection 
			label="SPLIT INBOX"
			title="Prioritize what's important."
			description="Split your inbox so you can focus on what matters, when it matters. Never miss an urgent email again."
		>
			<SplitInbox />
		</FeatureSection>

		<FeatureSection 
			label="MODERN TEXT EDITOR"
			title="Write faster."
			description="The text editor you love in your docs, now in your email. Typing has never felt this good before."
		>
			<TextEditorSimple />
		</FeatureSection>

		<FeatureSection 
			label="MODERN TEXT EDITOR"
			title="Write faster."
			description="The text editor you love in your docs, now in your email. Typing has never felt this good before."
		>
			<TextEditorToolbar />
		</FeatureSection>

		<FeatureSection 
			label="SPEED"
			title="Say goodbye to lag."
			description="With <50ms interactions, Tatem delivers unmatched speed. Reach new heights with a new standard for responsiveness."
		>
			<Speed />
		</FeatureSection>

        <!-- Duplicate Speed section as per screenshot showing multiple similar blocks or just emphasis -->
        <FeatureSection 
			label="SPEED"
			title="Say goodbye to lag."
			description="With <50ms interactions, Tatem delivers unmatched speed. Reach new heights with a new standard for responsiveness."
		>
			<Speed />
		</FeatureSection>

		<FeatureSection 
			label="SEAMLESS DESIGN"
			title="Make it your own."
			description="Light mode. Dark mode. Elegant transitions. Minimal, yet stunning. Designed to be beautiful. Designed to inspire."
		>
			<Design />
		</FeatureSection>
        
        <!-- Duplicate Design section as per screenshot -->
        <FeatureSection 
			label="SEAMLESS DESIGN"
			title="Make it your own."
			description="Light mode. Dark mode. Elegant transitions. Minimal, yet stunning. Designed to be beautiful. Designed to inspire."
		>
			<Design />
		</FeatureSection>
        
        <!-- Another Design section? The screenshot has 3 dots sections. -->
         <FeatureSection 
			label=""
			title=""
			description=""
		>
            <!-- Just the visual for the third one -->
			<Design />
		</FeatureSection>


		<FeatureSection 
			label="SHORTCUTS"
			title="Built for your keyboard."
			description="Fly through your inbox with rapid-fire shortcuts for every action. Don't worry, you already know our keystrokes."
		>
			<!-- Empty keyboard placeholder as per first keyboard screenshot -->
            <div class="w-3/4 h-10 bg-[#1a1a1a] rounded-full"></div>
		</FeatureSection>

		<FeatureSection 
			label="SHORTCUTS"
			title="Built for your keyboard."
			description="Fly through your inbox with rapid-fire shortcuts for every action. Don't worry, you already know our keystrokes."
		>
			<Keyboard highlight="" />
		</FeatureSection>
        
        <FeatureSection 
			label="SHORTCUTS"
			title="Built for your keyboard."
			description="Fly through your inbox with rapid-fire shortcuts for every action. Don't worry, you already know our keystrokes."
		>
			<Keyboard highlight="c" />
		</FeatureSection>

		<FeatureSection 
			label="SECURITY"
			title="Enterprise-grade security and privacy."
			description="We don't store any of your emails, passwords, or payment information in our database. Ever."
		>
			<Security />
		</FeatureSection>
        
        <FeatureSection 
			label="SECURITY"
			title="Enterprise-grade security and privacy."
			description="We don't store any of your emails, passwords, or payment information in our database. Ever."
		>
			<Security />
		</FeatureSection>
	</div>

	<Footer />
</main>

