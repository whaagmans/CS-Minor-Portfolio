<template>
	<v-container
		><h1 class="text-h1">{{ article.title }}</h1>
		<br />
		<article>
			<nuxt-content :document="article"></nuxt-content>
		</article>
	</v-container>
</template>

<script>
export default {
	async asyncData({ $content, $sentry, error }) {
		const article = await $content('ThreatAnalysis')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Article not found!' });
				$sentry.captureException(err);
			});
		return { article };
	},
	head() {
		return {
			title: 'Threat Analysis',
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

table,
th,
td {
	border: 1px solid;
}

table {
	border-collapse: collapse;
}

td {
	padding: 5px;
}
</style>