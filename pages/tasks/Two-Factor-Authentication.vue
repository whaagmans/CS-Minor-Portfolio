<template>
	<v-container>
		<h1 class="text-h2">{{ article.title }}</h1>
		<br />
		<article>
			<nuxt-content :document="article"></nuxt-content>
		</article>
		<v-divider class="my-12"></v-divider>
		<v-lazy>
			<TfaDemo />
		</v-lazy>
	</v-container>
</template>

<script>
import TfaDemo from '~/components/Two-Factor/TfaDemo.vue';
export default {
	components: { TfaDemo },
	async asyncData({ $content, $sentry, error }) {
		const article = await $content('Two-Factor')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Article not found!' });
				$sentry.captureException(err);
			});
		return { article };
	},
	head() {
		return {
			title: '2FA',
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