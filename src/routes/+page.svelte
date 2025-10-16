<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";

	// Icons
	import IconSparkles from "~icons/lucide/sparkles";
	import IconBrain from "~icons/lucide/brain";
	import IconClock from "~icons/lucide/clock";
	import IconTarget from "~icons/lucide/target";
	import IconLayers from "~icons/lucide/layers";
	import IconTrendingUp from "~icons/lucide/trending-up";
</script>

<CenteredTextOnlyHero
	title="Software that feels like hospitality"
	subtitle="Lobby learns your work patterns and handles routine tasks proactively, so you can focus on what brought you here."
	imageSrc="/generated/image-a-cozy-coffee-shop-interior-with-warm-be.webp"
/>
<LogoScroller
	label="Trusted by executives at leading companies"
	logoUrls={[
		'https://cdn.brandfetch.io/stripe.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/notion.so/w/400/h/400/logo',
		'https://cdn.brandfetch.io/figma.com/w/400/h/400/logo',
		'https://cdn.brandfetch.io/linear.app/w/400/h/400/logo'
	]}
/>

<Summary
	title="Your work, effortlessly managed"
	text="Lobby is a proactive workflow assistant built for executives at high-growth companies. Starting with email, we learn your unique work patterns and handle routine tasks autonomously—giving you back 2-3 hours each day to focus on strategic decisions that matter."
/>

<Testimonials
	testimonials={[
		{
			name: "Maya Patel",
			position: "Chief of Staff",
			company: "Vertex Growth Partners",
			quote:
				"Lobby has given me back 12 hours a week. It handles email triage, meeting prep, and follow-ups before I even think about them. I finally have time for the strategic work I was hired to do.",
			image: "/generated/image-a-confident-asian-woman-executive-stands.webp"
		},
		{
			name: "Marcus Thompson",
			position: "VP of Operations",
			company: "Cascade Ventures",
			quote:
				"The difference is night and day. Our CEO used to spend three hours daily on inbox management. Now Lobby handles routine responses and surfaces only what truly needs attention. It's like having an executive assistant who never sleeps.",
			image: "/generated/image-an-approachable-black-male-executive-in-.webp"
		},
		{
			name: "Elena Westwood",
			position: "Executive Assistant",
			company: "Meridian Capital",
			quote:
				"I was skeptical at first, but Lobby learned our executive's communication style in just two weeks. Now it drafts responses that sound exactly like him, and we've cut meeting coordination time by 80%.",
			image: "/generated/image-a-satisfied-professional-woman-with-brow.webp"
		}
	]}
/>

<Features
	title="How Lobby takes care of you"
	subtitle="Anticipatory service that handles everything you didn't know you needed"
	features={[
		{
			title: "Proactive email management",
			description:
				"Lobby learns your communication patterns and handles routine emails before they pile up. Your inbox becomes a place of calm, not chaos.",
			icon: IconSparkles,
			imageSrc: "/generated/image-close-up-of-executive-hands-neatly-arran.webp"
		},
		{
			title: "Pattern learning",
			description:
				"Like a concierge who remembers your preferences, Lobby studies how you work and adapts to your unique style without requiring configuration.",
			icon: IconBrain,
			imageSrc: "/generated/image-person-sitting-at-a-clean-minimal-worksp.webp"
		},
		{
			title: "Anticipatory task handling",
			description:
				"Lobby completes routine tasks before you realize they need doing, giving you back hours every week to focus on strategic work that matters.",
			icon: IconClock,
			imageSrc: "/generated/image-professional-deeply-focused-on-their-wor.webp"
		},
		{
			title: "Context-aware prioritization",
			description:
				"Lobby understands what's urgent and what can wait, surfacing what needs your attention while quietly managing everything else.",
			icon: IconTarget,
			imageSrc: "/generated/image-wide-shot-of-a-calm-organized-workspace-.webp"
		},
		{
			title: "Seamless workflow integration",
			description:
				"From email to calendar to follow-ups, Lobby handles end-to-end workflows so nothing slips through the cracks.",
			icon: IconLayers,
			imageSrc: "/generated/image-executive-thoughtfully-reviewing-paper-d.webp"
		},
		{
			title: "Always learning, always improving",
			description:
				"The more you work with Lobby, the better it gets at anticipating your needs and adapting to how your work evolves.",
			icon: IconTrendingUp,
			imageSrc: "/generated/image-professional-sitting-at-a-minimal-desk-w.webp"
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="Ready to reclaim your time?"
	subtitle="Join Lobby today"
	description="We're accepting a limited number of new members for white-glove onboarding. Lobby learns your preferences first, then handles your routine workflows with the precision of a personal concierge. No risk to your inbox, just results."
	imageSrc="/generated/image-a-confident-executive-woman-stands-in-an.webp"
	callsToAction={[
		{
			href: "/",
			label: "Join Lobby",
			variant: "primary"
		}
	]}
/>
