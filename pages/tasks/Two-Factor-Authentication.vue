<template>
	<v-container>
		<h1 class="text-h1">{{ article.title }}</h1>
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
.nuxt-content h1 {
	font-weight: 300;
	font-size: 6rem;
	letter-spacing: 0.015625em;
}

.nuxt-content h2 {
	font-weight: 300;
	font-size: 3.75rem;
	letter-spacing: 0.0083333333em;
}

.nuxt-content h3 {
	font-weight: 400;
	font-size: 3rem;
	letter-spacing: normal;
}

.nuxt-content h4 {
	font-weight: 400;
	font-size: 2.125rem;
	letter-spacing: .0073529412em;
}

.nuxt-content h5 {
	font-weight: 400;
	font-size: 1.5rem;
	letter-spacing: normal;
}

.nuxt-content h6 {
	font-weight: 500;
	font-size: 1.25rem;
	letter-spacing: 0.0125em;
}

.nuxt-content p {
	font-weight: 400;
	font-size: 1rem;
	letter-spacing: 0.03125em;
}

img {
	max-width: 800px;
	width: 100%;
	height: 100%;
	border-radius: 8px;
}
</style>