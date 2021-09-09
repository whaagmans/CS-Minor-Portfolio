<template>
	<v-row>
		<v-col v-for="(item, i) in items" :key="i" cols="12" xs="12" sm="8" md="6" lg="4">
			<v-card
				height="250px"
				width="350px"
				:to="item.to"
				elevation="5"
				router
				exact
				class="ma-5"
			>
				<v-card-title>{{ item.title }}</v-card-title>
				<v-img height="160px" contain :src="item.background" dark class="pb-3">
				</v-img>
			</v-card>
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
					background: '/undraw_two_factor_authentication.svg',
				},
				{
					title: 'title2',
					text: 'text2',
					to: 'page2',
					background: '',
				},
				{
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
        {
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
        {
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
        {
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
        {
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
        {
					title: 'title3',
					text: 'text3',
					to: 'page3',
					background: '',
				},
			],
		}
	},
}
</script>
