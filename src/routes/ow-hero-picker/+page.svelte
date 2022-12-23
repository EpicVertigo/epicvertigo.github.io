<script>
	import { faGun, faPlus, faShield } from '@fortawesome/free-solid-svg-icons';
	import { fade, fly } from 'svelte/transition';
	import { resetPick, selectedHero, setActiveHero } from '../../lib/overwatch';
	import ClassIcon from '../../ui/ow/ClassIcon.svelte';
	import HeroSection from '../../ui/ow/HeroSection.svelte';
</script>

<svelte:head>
	<title>Hero Picker Example</title>
</svelte:head>

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

		<div class="flex flex-row w-full justify-center items-center">
			<div class="w-2/6" />
			<h3 class="w-2/6 text-4xl font-bignoodle my-5 grow text-center">
				{$selectedHero ? 'Selected hero: ' + $selectedHero.name : 'Please select your hero'}
			</h3>
			<div class="w-2/6 flex flex-row-reverse">
				<button
					on:click={resetPick}
					class="bg-red-600 hover:bg-red-400 font-bignoodle text-3xl py-1 px-5 mr-10"
				>
					Clear Selection
				</button>
			</div>
		</div>

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
			<button
				on:click={setActiveHero}
				class="bg-orange-500 hover:bg-orange-400 text-2xl p-1 w-36 h-14 font-bignoodle mt-5"
				>Select</button
			>
		</div>
	</div>
</section>
