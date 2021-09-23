<template>
	<v-container>
		<iframe
			title="TICT PDF"
			style="aspect-ratio: 1/1"
			src="/TICT_Quickscan.pdf"
			width="100%"
		/>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			windowHeight: null,
		};
	},
	head() {
		return {
			title: 'TICT',
		};
	},
};
</script>

<style>
</style>