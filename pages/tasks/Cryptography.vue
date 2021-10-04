<template>
	<v-container>
		<Theory></Theory>
	</v-container>
</template>

<script>
import Theory from '~/components/Cryptography/Theory.vue';
export default {
	components: { Theory },
	head() {
		return {
			title: 'Cryptography',
		};
	},
};
</script>

<style>
</style>