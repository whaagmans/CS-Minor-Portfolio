<template>
	<v-container class="ml-3">
		<h2 class="text-h3 mb-3">POC</h2>
		<h3 class="text-h5">TOTP (Timed One Time Password)</h3>
		<v-container>
			<v-text-field v-model="token" label="Token"></v-text-field>
			<v-btn color="green" @click="createUser">Create user</v-btn>
			<v-btn :disabled="noUser" color="blue" @click="verify">Verify</v-btn>
			<v-btn color="red" @click="remove">remove</v-btn>
			<v-img class="mt-2" height="300" width="300" :src="QRImg"></v-img>
		</v-container>
	</v-container>
</template>

<script>
import QRCode from 'qrcode';
import { v4 } from 'uuid';
import speakeasy from 'speakeasy';

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
			this.id = v4();
			this.secret = await speakeasy.generateSecret({ window: 10 });
			const created = this.writeCreateUser(this.id, this.secret);
			if (this.secret === null && !created) return;
			const optString = `otpauth://totp/CS-Minor-Portfolio:${this.id}?secret=${this.secret.base32}&issuer=CS-Minor-Portfolio`;
			const code = await QRCode.toDataURL(optString);
			this.QRImg = code;
		},

		async verify() {
			const secret = await this.fetchUser();
			const token = this.token;
			const verified = speakeasy.totp.verify({
				secret: secret.ascii,
				encoding: 'ascii',
				token,
				window: 1,
			});
			if (verified) {
				this.$toast.success('Token correct!');
			} else this.$toast.error('Token incorrect!');
		},
		remove() {
			this.id = null;
			this.secret = null;
			this.QRImg = null;
		},
		async fetchUser() {
			const userRef = await this.$fire.firestore
				.collection('users')
				.doc(this.id);
			try {
				const userDoc = await userRef.get();
				return userDoc.data().secret;
			} catch (e) {
				return null;
			}
		},
		async writeCreateUser(id, _secret) {
			const userRef = this.$fire.firestore.collection('users').doc(id);
			try {
				await userRef.set({
					secret: _secret,
				});
				return true;
			} catch (e) {
				return false;
			}
		},
	},
};
</script>

<style>
</style>