<script>
	import { faGun, faPlus, faShield } from '@fortawesome/free-solid-svg-icons';
	import { fade, fly } from 'svelte/transition';
	import { selectedHero, setActiveHero } from '../../lib/overwatch';
	import ClassIcon from '../../ui/ow/ClassIcon.svelte';
	import HeroSection from '../../ui/ow/HeroSection.svelte';
</script>

<h1 class="text-xl px-10 font-mono">OW Style Hero Picker</h1>

<section>
	<div class="flex grow flex-col justify-center items-center">
		<div class="flex flex-row h-96 w-3/5 gap-10">
			{#if $selectedHero}
				{#key $selectedHero}
					<img
						src="images/ow/{$selectedHero.image}"
						class="h-96 grow w-1/2 object-contain"
						alt="selected hero"
						in:fly={{ x: -100, duration: 1000 }}
						out:fade={{ duration: 0 }}
					/>
					<div class="grow w-2/4" in:fly={{ x: 100, duration: 1000 }} out:fade={{ duration: 0 }}>
						<h1 class="text-6xl font-bignoodle">{$selectedHero.name}</h1>
						<p class="text-xl font-montserrat">{$selectedHero.description}</p>
					</div>
				{/key}
			{/if}
		</div>

		<h3 class="text-4xl font-bignoodle my-5">
			{$selectedHero ? 'Selected hero: ' + $selectedHero.name : 'Please select your hero'}
		</h3>

		<section class="flex flex-row flex-wrap gap-5">
			<HeroSection sectionType="tank">
				<ClassIcon slot="class-icon" icon={faShield} tooltip="Tanks" />
			</HeroSection>
			<HeroSection sectionType="dps">
				<ClassIcon slot="class-icon" icon={faGun} size="1.5x" tooltip="DPS" />
			</HeroSection>
			<HeroSection sectionType="support">
				<ClassIcon slot="class-icon" icon={faPlus} tooltip="Supports" />
			</HeroSection>
		</section>

		<div>
			<button on:click={setActiveHero} class="bg-orange-500 text-2xl p-1 w-32 font-bignoodle mt-5"
				>Select</button
			>
		</div>
		<!-- {$selectedHeroIndex}
		{$selectedHero ? $selectedHero.name : ''} -->
	</div>
</section>
