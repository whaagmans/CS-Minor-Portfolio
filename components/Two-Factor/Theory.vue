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
		<software-tokens />
		<h4 class="text-h6 mb-1">One Time Passwords</h4>
		<h5 class="text-subtitle-1 font-weight-bold">What is an OTP</h5>
		<p>
			A one-time password (OTP) is similar to a password, however, it can only
			be used once. It is frequently used in conjunction with a conventional
			password as a secondary authentication mechanism to provide additional
			protection.
		</p>
		<p>
			One-time passwords are exactly what they sound like one-time passwords.
			Once you've used a password, it's dumped, and you'll have to enter a
			different one the next time you need to access that application. This
			improves security and makes it far more difficult for undesirable actors
			to gain access to private accounts.
		</p>
		<p>
			An OTP for a certain application or website can be accessed via smartphone
			apps, text messages, or a proprietary token (such as a key fob). OneLogin
			Protect is an example of an OTP generator that can be downloaded as a
			mobile app. You're utilizing an OTP when you get an SMS text with a code
			to assist you to log into a website or application.
		</p>
		<p>
			OTPs are generated using a number of industry-standard methods, such as
			SHA-1. To produce the OTP code, all of these methods require two inputs: a
			seed and a moving factor. When you create a new account on the
			authentication server, the seed is a static value (secret key).
		</p>
		<p>
			The movement factor changes each time a new OTP is required, although the
			seed does not. The method by which the moving factor is formed is a
			significant difference between HOTP and TOTP.
		</p>
		<h5 class="text-subtitle-1 font-weight-bold">HOTP</h5>
		<p>
			HOTP stands for Hash-based Message Authentication Code, and the “H” in
			HOTP stands for Hash-based Message Authentication Code (HMAC). In layman's
			words, the HMAC-based One-time Password algorithm (HOTP) is an event-based
			OTP with a counter as the moving factor in each code.
		</p>
		<p>
			The movement factor is incremented based on a counter each time the HOTP
			is requested and validated. The generated code is valid until you actively
			request another one and the authentication server validates it. Each time
			the code is validated and the user is granted access, the OTP generator
			and the server are synchronized. Yubikey is an example of a HOTP-based OTP
			generator.
		</p>
		<v-container class="d-flex justify-center">
			<v-img
				max-width="800px"
				height="100%"
				width="100%"
				src="/image/article_img/hotp.png"
			>
			</v-img>
		</v-container>
		<h5 class="text-subtitle-1 font-weight-bold">TOTP</h5>
		<p>
			TOTP (Time-based One-time Password) is a time-based one-time password.
			TOTP uses a static seed, similar to HOTP, but the movement factor is
			time-based rather than counter-based.
		</p>
		<p>
			A timestep refers to the length of time that each password is valid.
			Timesteps are usually 30 seconds or 60 seconds in length. If you haven't
			used your password within that time frame, it will expire, and you'll need
			to request a new one in order to access your application.
		</p>
		<h3 class="text-h4 mb-4">Push Notification</h3>
		<p>
			Instead of relying on the user receiving and entering a 2FA token,
			websites and applications can now send a push notification to the user
			when an authentication attempt is made. The owner of the device simply
			views the information and can authorize or refuse access with a simple
			tap. It's a passwordless authentication system that doesn't require any
			codes or additional interaction.
		</p>
		<p>
			Push notification removes phishing, man-in-the-middle attacks, and
			unauthorized access by establishing a direct and secure connection between
			the store, the 2FA service, and the device. However, it can only be used
			with an internet-connected device that can run apps. SMS-based 2FA may
			also be a preferable fallback in places where smartphone penetration is
			low or the internet is intermittent. Push notifications, on the other
			hand, are a more user-friendly and secure type of security when it is
			available.
		</p>
		<v-container class="d-flex justify-center">
			<v-img
				max-width="800px"
				height="100%"
				width="100%"
				src="/image/article_img/totp.png"
			>
			</v-img>
		</v-container>
	</v-container>
</template>

<script>
import HardwareTokens from './article/HardwareTokens.vue';
import ProsCons from './article/ProsCons.vue';
import SmsTokens from './article/SmsTokens.vue';
import SoftwareTokens from './article/SoftwareTokens.vue';
export default {
	components: {ProsCons, HardwareTokens, SmsTokens, SoftwareTokens },
};
</script>


<style>
</style>
