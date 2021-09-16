<template>
	<v-row>
		<v-col
			v-for="(item, i) in items"
			:key="i"
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
					:to="item.to"
					router
					exact
					class="ma-5"
					:elevation="hover ? 12 : 2"
					:class="{ 'on-hover': hover }"
				>
					<v-card-title>{{ item.title }}</v-card-title>
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
					text: 'text',
					to: 'tasks/two-factor-authentication',
					background: require("~/assets/img/undraw_two_factor_authentication.svg"),
				},
				{
					title: 'title2',
					text: 'text2',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: '',
					background: '',
				},
			],
		}
	},
}
</script>

<style scoped>
.v-card {
	transition: opacity 0.15s ease-in-out;
}

.v-card:not(.on-hover) {
	opacity: 0.75;
}
</style>