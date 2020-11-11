<template>
<div>
	<h1>SignUp</h1>
	<v-text-field label="userID" v-model="userId"></v-text-field>
	<v-text-field label="password" type="password" v-model="password"></v-text-field>
	<v-text-field label="userName" v-model="name"></v-text-field>
	<v-text-field label="Address" v-model="address"></v-text-field>
	<v-text-field label="Avatar src" v-model="src"></v-text-field>
	<v-btn block color="cyan" @click="signUp">Sign Up</v-btn>
</div>
</template>

<script>
// import {
// 	mapMutations
// } from 'vuex'
import { mapActions} from 'vuex'

export default {
	data() {
		return {
			userId: null,
			password: null,
			name: null,
			address: null,
			src: null
		}
	},
	methods: {
		//...mapMutations(['addUsers']),
		...mapActions(['addUsers']),
		signUp() {
			let userObj = {
				userId: this.userId,
				password: this.password,
				name: this.name,
				address: this.address,
				src: this.src
			}
			//	this.addUsers(userObj);
			//this.$store.commit('addUsers', userObj);
			this.addUsers(userObj);
			this.clearForm();
		},
		clearForm() {
			this.userId = null,
				this.password = null,
				this.name = null,
				this.address = null,
				this.src = null
		}
	}
}
</script>
