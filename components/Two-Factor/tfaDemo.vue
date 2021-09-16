<template>
	<v-container>
		<v-text-field v-model="token" label="Token"></v-text-field>
		<v-btn color="green" @click="createUser">Create user</v-btn>
		<v-btn :disabled="noUser" color="blue" @click="verify">Verify</v-btn>
		<v-btn :disabled="noUser" color="blue" @click="validate">Validate</v-btn>
		<v-btn color="red" @click="remove">remove</v-btn>
		<v-img height="300" width="300" :src="QRImg"></v-img>
	</v-container>
</template>

<script>
import QRCode from 'qrcode';
export default {
	data() {
		return {
			QRImg: null,
			id: null,
			secret: null,
			noUser: true,
			token: null,
		};
	},
	watch: {
		token() {
			if (this.secret !== null && this.token !== '') this.noUser = false;
			else this.noUser = true;
		},
	},
	methods: {
		async createUser() {
			await this.$axios.$post(window.location.origin + '/api/register').then((data) => {
				this.id = data.id;
				this.secret = data.secret;
			});
			if (this.secret === null) return;
			const optString = `otpauth://totp/CS-Minor-Portfolio:${this.id}?secret=${this.secret}&issuer=CS-Minor-Portfolio`;
			const code = await QRCode.toDataURL(optString);

			this.QRImg = code;
		},
		verify() {
			this.$axios
				.$post(window.location.origin + '/api/verify', {
					userId: this.id,
					token: this.token,
				})
				.then((data) => console.log(data));
		},
		validate() {
			this.$axios
				.$post(window.location.origin + '/api/validate', {
					userId: this.id,
					token: this.token,
				})
				.then((data) => console.log(data));
		},
		remove() {
			this.id = null;
			this.secret = null;
			this.QRImg = null;
		},
	},
};
</script>

<style>
</style>