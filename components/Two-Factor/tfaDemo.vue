<template>
	<v-container>
		<v-btn @click="createQR">create</v-btn>
		<v-btn @click="remove">remove</v-btn>
		<v-img :src="QRImg"></v-img>
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
		};
	},
	methods: {
		async createQR() {
			await this.$axios.$post('api/register').then((data) => {
				this.id = data.id;
				this.secret = data.secret;
			});
			if (this.secret === null) return;
			const optString = `otpauth://totp/CS-Minor-Portfolio:${this.id}?secret=${this.secret}&issuer=CS-Minor-Portfolio`;
			const code = await QRCode.toDataURL(optString);

			this.QRImg = code;
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