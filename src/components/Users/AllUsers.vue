<template>
<div>
	<h1>All Users({{allUsersCount}})</h1>
	<h3>👉count France : {{allUsersCount}}({{percentFrance}})</h3>
	<v-list two-line>
		<v-list-tile v-for="(user, index) in allUsers" :key="index" avatar>
			<v-list-tile-avatar color="grey lighten-3">
				<v-img v-bind:src="user.src"></v-img>
			</v-list-tile-avatar>

			<v-list-tile-content>
				<v-list-tile-title v-html="user.name"></v-list-tile-title>
				<v-list-tile-sub-title>id:#{{index}} / From {{user.address}}</v-list-tile-sub-title>
			</v-list-tile-content>
		</v-list-tile>
	</v-list>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import { EventBus } from '@/main.js'
export default {
	data() {
		return {

		}
	},
	computed: {
		...mapGetters(['allUsersCount', 'countFrance', 'percentFrance']),
		...mapState(['allUsers'])
	},
	mounted() {
		EventBus.$on('signUp', users => {
			this.$store.state.allUsers.push(users)
		})
	}
}
</script>
