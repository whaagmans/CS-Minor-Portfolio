<template>
	<v-container>
		<h3 class="text-h5 mb-4">Software Tokens</h3>
		<p>
			A software-generated time-based, one-time passcode (also known as TOTP, or
			"soft-token") is the most popular kind of two-factor authentication (and a
			preferred alternative to SMS and voice).
		</p>
		<p>
			A user must first download and install a free two-factor authentication
			program on their smartphone or computer. The app can then be used with any
			site that accepts this type of authentication. The user first enters a
			login and password, and then, when prompted, the code displayed on the app
			is entered. Soft tokens, like hardware tokens, are often valid for less
			than a minute. Soft-tokens further eliminate the possibility of hacker
			eavesdropping because the code is created and shown on the same device.
			With SMS or voice transmission techniques, this is a major worry.
		</p>
	</v-container>
</template>

<script>
export default {};
</script>

<style>
</style>