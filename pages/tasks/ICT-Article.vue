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
		const article = await $content('ICT-Article')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Article not found!' });
				$sentry.captureException(err);
			});
		return { article };
	},
	head() {
		return {
			title: 'ICT-Article',
		};
	},
};
</script>

<style>
</style>
