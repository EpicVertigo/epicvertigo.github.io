<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
	export let icon = faWheelchair;
	export let size = '2.5x';
	export let tooltip = 'Hero Class';
</script>

<div class="flex w-24 h-24 justify-center items-center group">
	<div class="flex justify-center items-center border-2 rounded-full w-16 h-16">
		<Fa {icon} {size} />
	</div>
	<span
		class="absolute mb-32 bg-black rounded-xl font-bignoodle text-xl p-3 scale-0 group-hover:scale-100"
		>{tooltip}</span
	>
</div>
