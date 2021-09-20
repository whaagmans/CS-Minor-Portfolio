<template>
	<v-container>
		<Theorie />
		<v-divider class="my-12"></v-divider>
		<v-lazy>
			<tfaDemo />
		</v-lazy>
	</v-container>
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