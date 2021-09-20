<template>
	<div>
		<h1 class="text-h2 text-center">Two Factor Authentication</h1>
		<Theorie />
		<v-divider class="my-12"></v-divider>
		<v-lazy>
			<tfaDemo />
		</v-lazy>
	</div>
</template>

<script>
import tfaDemo from '~/components/Two-Factor/tfaDemo.vue';
import Theorie from '~/components/Two-Factor/Theory.vue';
export default {
	components: { tfaDemo, Theorie },
};
</script>

<style>
</style>