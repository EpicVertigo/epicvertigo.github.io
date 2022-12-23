<script>
	import { heroList } from '../../lib/overwatch';
	import HeroIcon from './HeroIcon.svelte';
	export let sectionType = 'default';
</script>

<section id={sectionType}>
	<div class="flex flex-row flex-wrap gap-3 px-6 md:px-0">
		<slot name="class-icon" />
		{#each heroList.filter((hero) => hero.heroClass === sectionType) as hero}
			<HeroIcon {hero} />
		{/each}
	</div>
</section>
