<template>
	<v-container>
		<Theorie />
		<v-divider class="my-12"></v-divider>
		<v-lazy>
			<TfaDemo />
		</v-lazy>
	</v-container>
</template>

<script>
import TfaDemo from '~/components/Two-Factor/TfaDemo.vue';
import Theorie from '~/components/Two-Factor/Theory.vue';
export default {
	components: { TfaDemo, Theorie },
	head() {
		return {
			title: '2FA',
		};
	},
};
</script>

<style>
</style>