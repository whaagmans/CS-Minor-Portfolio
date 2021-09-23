<template>
	<v-container>
		<h3 class="text-h5 mb-4">SMS Text-Message and Voice-based</h3>
		<p>
			SMS-based 2FA communicates with a user's phone directly. The site provides
			the user a one-time passcode (OTP) through a text message after obtaining
			their login and password. After that, much like with the hardware token,
			the user must re-enter the OTP into the application to gain access.
			Voice-based 2FA works similarly, automatically dialing a user and audibly
			delivering the 2FA code. It is still used in nations where cellphones are
			expensive or where cell connection is inadequate, despite its rarity.
		</p>
		<p>
			For a low-risk online activity, text or voice authentication may be
			sufficient. However, this degree of 2FA may not be sufficient for websites
			that retain your personal information, such as utility providers, banks,
			or email accounts. SMS is widely regarded as the least secure method of
			user authentication. As a result, many businesses are strengthening their
			security by shifting away from SMS-based two-factor authentication.
		</p>
	</v-container>
</template>

<script>
export default {};
</script>

<style>
</style>