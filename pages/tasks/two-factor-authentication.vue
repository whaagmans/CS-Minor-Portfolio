<template>
	<div>
		<Theorie />
		<tfaDemo />
	</div>
</template>

<script>
import tfaDemo from '~/components/Two-Factor/tfaDemo.vue';
import Theorie from '~/components/Two-Factor/Theorie.vue';
export default {
	components: { tfaDemo, Theorie },
};
</script>

<style>
</style>