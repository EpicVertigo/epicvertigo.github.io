<script>
	import { selectedHeroIndex } from '../../lib/overwatch';
	export let hero;

	$: selected = $selectedHeroIndex === hero.id;
	$: selectedClasses = selected ? 'grayscale-0 border-yellow-500 shadow-yellow-600 shadow-xl' : '';
</script>

<button
	on:click={() => selectedHeroIndex.set(hero.id)}
	class="flex flex-col flex-wrap hover:scale-110 grayscale hover:grayscale-0 group"
	class:grayscale-0={selected}
>
	<button class="w-24 h-24 border-4 group-hover:border-yellow-500 -skew-x-12 {selectedClasses}">
		<img
			draggable="false"
			class="h-full object-cover"
			src="images/ow/{hero.image}"
			alt={hero.name}
		/>
	</button>
	<p class="font-bignoodle text-3xl -skew-x-6 text-left -ml-3">{hero.name}</p>
</button>
