<template>
	<v-container>
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
export default {};
</script>

<style>
</style>