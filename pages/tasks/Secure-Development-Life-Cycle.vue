<template>
	<v-container>
		<article>
			<nuxt-content :document="article"></nuxt-content>
		</article>
	</v-container>
</template>

<script>
export default {
	async asyncData({ $content, $sentry, error }) {
		const article = await $content('SDLC')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Article not found!' });
				$sentry.captureException(err);
			});
		return { article };
	},
	head() {
		return {
			title: 'GDPR',
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
