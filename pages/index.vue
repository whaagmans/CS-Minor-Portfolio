<template>
	<v-row>
		<v-col
			v-for="(item, i) in items"
			:key="i"
			class="d-flex justify-space-around"
			cols="12"
			xs="12"
			sm="8"
			md="6"
			lg="4"
		>
			<v-hover v-slot="{ hover }" close-delay="50">
				<v-card
					height="250px"
					width="350px"
					max-width="calc(100% - 40px)"
					:to="item.to"
					router
					exact
					class="ma-5"
					:elevation="hover ? 12 : 2"
					:class="{ 'on-hover': hover }"
				>
					<v-card-title class="text-break">{{ item.title }}</v-card-title>
					<v-img
						height="160px"
						contain
						:src="item.background"
						dark
						class="pb-3"
					>
					</v-img>
				</v-card>
			</v-hover>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: 'Two Factor Authentication',
					to: 'tasks/two-factor-authentication',
					background: require('~/assets/img/undraw_two_factor_authentication.svg'),
				},
				{
					title: 'Technology Impact Cycle Tool',
					to: 'tasks/tict',
					background: require('~/assets/img/undraw_Sorting_thoughts.svg'),
				},
				{
					title: 'Threat analysis',
					to: 'tasks/threat-analysis',
					background: require('~/assets/img/undraw_file_analysis.svg'),
				},
				{
					title: 'Cryptography',
					to: 'tasks/cryptography',
					background: require('~/assets/img/undraw_mathematics.svg'),
				}
			],
		};
	},
};
</script>

<style scoped>
.v-card {
	transition: opacity 0.15s ease-in-out;
}

.v-card:not(.on-hover) {
	opacity: 0.75;
}
</style>