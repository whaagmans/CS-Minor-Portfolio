<template>
	<v-app dark>
		<v-container fill-height fluid>
			<v-row align="center" justify="center">
				<v-col>
					<div class="d-flex justify-center flex-column">
						<v-img
							v-if="error.statusCode === 404"
							class="mx-auto"
							height="70%"
							width="70%"
							src="/undraw_page_not_found.svg"
							alt="404 image"
						/>
						<v-img
							v-else
							class="mx-auto"
							height="70%"
							width="70%"
							src="/undraw_bug_fixing.svg"
							alt="404 image"
						/>
						<h1 v-if="error.statusCode === 404" class="text-center">
							Whoops nothing to see here 😀
						</h1>

						<h1 v-else class="text-center">
							{{ otherError }}
						</h1>
						<div class="text-center">
							<v-btn elevation="10" r x-large class="back_btn mt-4" to="/" next>
								The way back to existence
							</v-btn>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
export default {
	layout: 'empty',
	props: {
		error: {
			type: Object,
			default: null,
		},
	},
	data() {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred',
		}
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError
		return {
			title,
		}
	},
}
</script>

<style scoped>
h1 {
	font-size: 40px;
	font-family: fantasy;
}
</style>
