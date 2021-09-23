<template>
	<v-container class="text-body-1 text-break">
		<h2 class="text-h4 mb-5">What is Two-Factor Authentication?</h2>
		<p>
			Two-factor authentication (also known as 2FA) is a security mechanism that
			needs two different forms of identification to gain access to something.
		</p>
		<p>
			Two-factor authentication can be used to make an online account, a
			smartphone, or even a door more secure. Before anything that is being
			secured may be accessed, 2FA requires two forms of information from the
			user—a password or personal identification number (PIN), a code given to
			the user's smartphone, or a fingerprint.
		</p>
		<ProsCons />
		<h2 class="text-h4 mb-5">Types of 2FA</h2>
		<HardwareTokens />
		<SmsTokens />
		<SoftwareTokens />
		<OneTimePasswords />
		<PushNotications />
	</v-container>
</template>

<script>
import HardwareTokens from './article/HardwareTokens.vue';
import OneTimePasswords from './article/OneTimePasswords.vue';
import ProsCons from './article/ProsCons.vue';
import PushNotications from './article/PushNotications.vue';
import SmsTokens from './article/SmsTokens.vue';
import SoftwareTokens from './article/SoftwareTokens.vue';
export default {
	components: {
		ProsCons,
		HardwareTokens,
		SmsTokens,
		SoftwareTokens,
		OneTimePasswords,
		PushNotications,
	},
};
</script>


<s,
PushNoticationstyle>
</style>
