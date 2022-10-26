<template>
	<main class="form-signin w-100 m-auto">
		<form>
			<h1 class="h3 mb-3 fw-normal">Anmeldung</h1>
			<div class="form-floating mb-3">
				<input
					v-model="data.username"
					type="text"
					class="form-control"
					id="floatingInput"
					placeholder="Benutzername"
					autocomplete="off"
				/>
				<label for="floatingInput">Benutzername</label>
			</div>
			<div class="form-floating mb-3">
				<input
					v-model="data.password"
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Passwort"
					autocomplete="off"
				/>
				<label for="floatingPassword">Passwort</label>
			</div>
			<button class="w-100 btn btn-lg btn-primary" type="submit" @click="login">Sign in</button>
		</form>
	</main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Parse from 'parse/dist/parse.min.js';
Parse.initialize('8PzeU2cmYFKLbLnpHzZAfe');
Parse.serverURL = 'https://test.diabetesferien.de/parse';

const data = reactive({
	username: '',
	password: '',
});

async function login() {
	try {
		const user = await Parse.User.logIn(data.username, data.password);
		debugger;
	} catch (error) {
		debugger;
	}
}
</script>
