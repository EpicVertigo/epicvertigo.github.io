<script>
	import { fly, fade } from 'svelte/transition';
	import { heroList, selectedHero, selectedHeroIndex, setActiveHero } from '../../lib/overwatch';
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

		<section class="flex flex-row flex-wrap gap-2">
			<div id="tanks" />
			<div id="dps">
				<div class="flex flex-row flex-wrap gap-3 px-6 md:px-0">
					{#each heroList as hero, index}
						<button
							on:click={() => selectedHeroIndex.set(index)}
							class="flex flex-col flex-wrap hover:scale-110"
						>
							<button
								class="{$selectedHeroIndex === index
									? 'grayscale-0  border-yellow-500 shadow-yellow-600 shadow-xl'
									: ''} w-24 h-24 grayscale hover:grayscale-0 border-4
									  hover:border-yellow-500  -skew-x-12"
							>
								<img
									class="w-full h-full object-cover"
									src="images/ow/{hero.image}"
									alt={hero.name}
								/>
							</button>
							<p class="grow-0 font-bignoodle text-3xl -skew-x-6 text-left -ml-3">{hero.name}</p>
						</button>
					{/each}
				</div>
			</div>
			<div id="supports" />
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
