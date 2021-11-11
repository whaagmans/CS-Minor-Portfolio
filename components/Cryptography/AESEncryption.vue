<template>
	<v-container id="poc">
		<h2 class="mb-3 text-h3">POC AES encryption speed</h2>
		<v-card class="my-10" flat v-if="!disabled">
			<v-card-title>Time estimates based on encryption speed</v-card-title>
			<v-card-text class="text-h6"
				>Time it would take to brute force all AES combinations:
				{{ encryptionSpeedInYears }} years</v-card-text
			>
			<v-card-text class="text-h6"
				>Based on Moore's law it would take {{ mooresLawYears }} years before
				brute forcing takes less than one year</v-card-text
			>
		</v-card>
		<v-row>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="encryptedMessage"
					label="Encrypted message"
					:disabled="disabled"
					outlined
					readonly
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6">
				<v-text-field
					v-model="encryptionSpeed"
					label="Encryption time in seconds"
					:disabled="disabled"
					outlined
					readonly
				></v-text-field>
			</v-col>
		</v-row>
		<v-text-field v-model="message" label="Message to encrypt"></v-text-field>
		<v-btn x-large color="blue" @click="EncryptMessage()">Encrypt</v-btn>
	</v-container>
</template>

<script>
import aes from 'crypto-js/aes';
import { Duration } from 'luxon';
export default {
	data() {
		return {
			disabled: true,
			message: '',
			encryptionSpeed: '',
			encryptedMessage: '',
			encryptionSpeedInYears: '',
			mooresLawYears: '',
		};
	},
	methods: {
		EncryptMessage() {
			const startTime = performance.now();
			const message = aes.encrypt(this.message, 'SgVkYp3s6v9y$B&E');
			const endTime = performance.now();
			this.encryptedMessage = message.toString();
			const speedInMilis = this.getTimeDiff(startTime, endTime);
			this.encryptionSpeed = speedInMilis / 1000;
			this.disabled = false;
			const years = this.calculateBruteForceTimeInYears(speedInMilis);
			this.mooresLawYears = this.calculateMooresLaw(years);
		},
		getTimeDiff(startTime, endTime) {
			return endTime - startTime; // in ms
		},
		calculateBruteForceTimeInYears(milis) {
			// amount of possible combinations for aes keys based on 128 bits
			const aesCombinations = 340000000000000000000000000000000000000;
			const timeEstimateAllAESCombinations = milis * aesCombinations;
			this.encryptionSpeedInYears = BigInt(
				Duration.fromMillis(timeEstimateAllAESCombinations).as('years')
			);
			return this.encryptionSpeedInYears;
		},
		calculateMooresLaw(years) {
			let i = 1n;
			for (i; years >= 1n; i += 2n) {
				years /= i ^ 2n;
			}
			return i;
		},
	},
};
</script>

<style>
</style>