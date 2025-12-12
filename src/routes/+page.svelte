<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Stats from "$lib/components/Stats.svelte";
	import HowItWorks from "$lib/components/HowItWorks.svelte";
	import FeatureSection from "$lib/components/FeatureSection.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import Footer from "$lib/components/Footer.svelte";
	
	import SplitInbox from "$lib/components/visuals/SplitInbox.svelte";
	import TextEditorSimple from "$lib/components/visuals/TextEditorSimple.svelte";
	import TextEditorToolbar from "$lib/components/visuals/TextEditorToolbar.svelte";
	import Speed from "$lib/components/visuals/Speed.svelte";
	import Design from "$lib/components/visuals/Design.svelte";
	import Keyboard from "$lib/components/visuals/Keyboard.svelte";
	import Security from "$lib/components/visuals/Security.svelte";
</script>

<main class="bg-lobby-bg min-h-screen text-white selection:bg-white/20">
	<Hero />
	
	<div class="mt-20 md:mt-40">
        <!-- Dark Mode Interface Section Divider -->
        <div class="px-4 max-w-6xl mx-auto mb-32 relative">
             <div class="aspect-video bg-[#0A0A0A] rounded-lg border border-white/5 flex flex-col justify-end p-6 md:p-10 relative overflow-hidden">
                 <!-- Simple representation of the dark UI screenshot from the middle of the page -->
                 <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                 <div class="relative z-10 flex justify-between items-end w-full">
                     <div class="flex items-center gap-2 text-white font-semibold">
                         <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12 2L13.2 9.92154L20.6603 7L14.4 12L20.6603 17L13.2 14.0785L12 22L10.8 14.0785L3.33975 17L9.6 12L3.33975 7L10.8 9.92154L12 2Z" fill="currentColor"/>
                         </svg>
                         Lobby
                     </div>
                 </div>
             </div>
             <div class="text-center mt-10 text-gray-500 text-sm flex flex-col items-center gap-2 cursor-pointer hover:text-white transition-colors">
                 <span class="transform rotate-90">›</span>
                 See what makes Lobby different.
             </div>
        </div>

		<Stats />

		<FeatureSection 
			label="PROACTIVE INTELLIGENCE"
			title="It knows what you need."
			description="Before you even realize it. Lobby learns your work patterns and handles routine tasks autonomously, saving you 2-3 hours every day."
		>
			<Speed />
		</FeatureSection>

		<FeatureSection 
			label="EMAIL AUTOMATION"
			title="Your inbox, managed."
			description="Stop drowning in hundreds of daily emails. Lobby prioritizes, drafts responses, and keeps you responsive without the overwhelm."
		>
			<SplitInbox />
		</FeatureSection>

		<FeatureSection 
			label="PATTERN LEARNING"
			title="Understands your style."
			description="Every executive works differently. Lobby adapts to your unique preferences, communication style, and priorities over time."
		>
			<Design />
		</FeatureSection>

		<FeatureSection 
			label="WHITE-GLOVE ONBOARDING"
			title="Trust from day one."
			description="We learn your executive's specific preferences before touching a single email. No surprises, no mistakes, just seamless support."
		>
			<Security />
		</FeatureSection>

        <FeatureSection 
			label="EXECUTIVE FOCUS"
			title="Built for leaders."
			description="Designed specifically for executives at high-growth companies who need to stay strategic, not stuck in their inbox."
		>
			<Keyboard highlight="" />
		</FeatureSection>

		<FeatureSection 
			label="ANTICIPATORY SERVICE"
			title="Hospitality-grade care."
			description="Like a world-class concierge, Lobby anticipates your needs and handles them before you ask. That's the power of true AI assistance."
		>
			<TextEditorSimple />
		</FeatureSection>
	</div>

	<HowItWorks />

	<Testimonials />

	<Footer />
</main>

