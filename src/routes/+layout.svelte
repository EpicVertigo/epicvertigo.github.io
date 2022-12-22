<script>
	import '../app.css';
	import Header from '../ui/Header.svelte';
	import Footer from '../ui/Footer.svelte';
</script>

<main class="flex flex-col h-screen">
	<Header />
	<div class="flex grow">
		<slot />
	</div>
	<Footer />
</main>
