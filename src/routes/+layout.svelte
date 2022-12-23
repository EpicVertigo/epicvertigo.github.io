<script>
	import '../app.css';
	import Header from '../ui/Header.svelte';
	import Footer from '../ui/Footer.svelte';
</script>

<svelte:head>
	<title>Vertig's Small Projects</title>
</svelte:head>

<main class="flex flex-col h-screen">
	<Header />
	<div class="flex flex-col grow">
		<slot />
	</div>
	<Footer />
</main>
