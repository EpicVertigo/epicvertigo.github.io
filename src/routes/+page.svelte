<script>
	let projects = ['Django Website', 'Discord Bot', 'PoE Ladder', 'OCR Heist'];
</script>

<div class="flex grow justify-center font-montserrat overflow-y-visible">
	<div class="flex flex-wrap w-5/6">
		<div class="basis-96 flex-grow">
			{#each projects as project}
				<div
					class="flex justify-center w-full border-gray-700 border-l-2 border-t-2 text-center items-center border-collapse h-16 text-lg "
				>
					{project}
				</div>
			{/each}
			<hr class="border-gray-700" />
		</div>
		<div class="basis-0 flex-grow-[999] min-w-[50] border-2 border-gray-700 p-4">
			<h1 class="text-3xl">Content Title</h1>
			<p class="text-xl mt-2">
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</p>
			<p class="text-xl mt-2">
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</p>
			<p class="text-xl mt-2">
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</p>
		</div>
	</div>
</div>
