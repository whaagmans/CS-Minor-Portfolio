<template>
	<v-row>
		<v-col
			v-for="(item, i) in references"
			:key="i"
			class="d-flex justify-start"
            cols="12"
			xs="10"
			sm="8"
			md="6"
			lg="4"
			:to="item.link"
		>
			<p>{{ item.apa }}</p>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			references: [
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
				{ apa: 'test', link: 'https://test.nl' },
			],
		};
	},
};
</script>

<style>
</style>