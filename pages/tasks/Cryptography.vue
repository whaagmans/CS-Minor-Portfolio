<template>
	<v-container>
		<article>
			<nuxt-content :document="article"></nuxt-content>
		</article>
		<v-divider class="my-12"></v-divider>
		<AESEncryption />
	</v-container>
</template>

<script>
import AESEncryption from '~/components/Cryptography/AESEncryption.vue';
export default {
	components: { AESEncryption },
	async asyncData({ $content, $sentry, error }) {
		const article = await $content('Cryptography')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Article not found!' });
				$sentry.captureException(err);
			});
		return { article };
	},
	head() {
		return {
			title: 'Cryptography',
		};
	},
};
</script>

<style>
img {
	max-width: 800px;
	width: 100%;
	height: 100%;
	border-radius: 8px;
}
</style>