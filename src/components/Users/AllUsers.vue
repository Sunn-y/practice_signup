<template>
<div>
	<h1>All Users</h1>
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
import {
	EventBus
} from '@/main.js'

export default {
	data() {
		return {
			allUsers: [{
					userId: 'mike00',
					password: '123',
					name: 'Mike',
					address: 'France',
					src: 'https://www.flaticon.com/svg/static/icons/svg/145/145867.svg'
				},
				{
					userId: 'jane00',
					password: '456',
					name: 'Jane',
					address: 'Spain',
					src: 'https://www.flaticon.com/svg/static/icons/svg/145/145866.svg'
				},
				{
					userId: 'alice00',
					password: '789',
					name: 'Alice',
					address: 'Portugal',
					src: 'https://www.flaticon.com/svg/static/icons/svg/145/145852.svg'
				}
			]
		}
	},
	mounted() {
		EventBus.$on('signUp', users => {
			this.allUsers.push(users)
		})
	}
}
</script>
