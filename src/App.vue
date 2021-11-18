<template>
	<div id="app">
		<profile-menu
			ref="profileMenu"
			@showCover="showCover"
			@goMenu="goMenu"
		/>
		<div class="bodywrap">
			<div class="router-container">
				<transition name="fade" mode="out-in">
					<router-view/>
				</transition>
			</div>
		</div>
		<transition name="fade">
			<wall-container
				ref="wall"
				v-if="$route.path == '/'"
				@goMenu="goMenu"
			/>
		</transition>
		<footer-area/>
	</div>
</template>

<script>
import ProfileMenu from './views/ProfileMenu.vue'
import FooterArea from './views/FooterArea.vue'
import WallContainer from './views/WallContainer.vue'

export default {
	name: 'App',

	components: {
		ProfileMenu,
		FooterArea,
		WallContainer,
	},

	methods: {
		showCover() {
			this.$refs.wall.showCover()
		},

		goMenu() {
			this.$refs.profileMenu.goMenu()
		},
	},
}
</script>

<style>
@import url('/static/css/common.css');

#app {
	min-width: 1280px;
	width: 100%;
	height: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
