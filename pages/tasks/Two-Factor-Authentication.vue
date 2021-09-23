<template>
	<v-container>
		<Theory />
		<v-divider class="my-12"></v-divider>
		<v-lazy>
			<TfaDemo />
		</v-lazy>
	</v-container>
</template>

<script>
import TfaDemo from '~/components/Two-Factor/TfaDemo.vue';
import Theory from '~/components/Two-Factor/Theory.vue';
export default {
	components: { TfaDemo, Theory },
	head() {
		return {
			title: '2FA',
		};
	},
};
</script>

<style>
</style>