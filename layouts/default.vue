<template>
	<v-app dark>
		<v-navigation-drawer v-model="drawer" fixed app>
			<v-list>
				<v-list-item
					v-for="(item, i) in items"
					:key="i"
					:to="item.to"
					router
					exact
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<template #append>
				<div class="ml-1">
					<blockquote class="trello-board-compact">
						<a
							href="https://trello.com/b/OMkGUS1N/personal-learning-plan-and-reporting"
							>Trello Board</a
						>
					</blockquote>
					<script src="https://p.trellocdn.com/embed.min.js"></script>
				</div>
			</template>
		</v-navigation-drawer>
		<v-app-bar elevate-on-scroll fixed app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title v-text="title" />
			<v-spacer />
			<v-btn
				id="btnThemeSwitch"
				class="mr-4"
				:ripple="false"
				icon
				@click="themeSwitch"
			>
				<v-icon>mdi-brightness-4</v-icon>
			</v-btn>
		</v-app-bar>
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
		<v-footer :absolute="!fixed" app>
			<span>{{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			fixed: true,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Home',
					to: '/',
				},
				{
					icon: 'mdi-book-open-page-variant-outline',
					title: '2FA',
					to: '/tasks/two-factor-authentication',
				},
				{
					icon: 'mdi-book-open-page-variant-outline',
					title: 'TICT',
					to: '/tasks/tict',
				},
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'CS Minor',
		};
	},
	methods: {
		themeSwitch() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
	},
};
</script>
