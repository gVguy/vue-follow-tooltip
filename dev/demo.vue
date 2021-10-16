<template>
	<div id="app">
		<h1>vue-follow-tooltip</h1>
		<h3>
			<a
				class="docs-link"
				href="https://github.com/gVguy/vue-follow-tooltip#vue-follow-tooltip"
				v-tooltip="'View docs on github'"
				>Docs</a
			>
		</h3>
		<div v-tooltip="'This explains everyting'" class="text">
			This is some text that is hard to understand without some clarification
		</div>
	</div>
</template>

<script>
export default {
	name: 'Demo',
	components: {},
	data() {
		return {}
	},
	computed: {},
	methods: {},
	created() {},
	mounted() {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');
body {
	background: #fbfbfb;
}
#app {
	font-family: 'Montserrat', sans-serif;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
}
.text {
	text-decoration: underline dotted;
	cursor: default;
}
.tooltip {
	background: rgba(1, 1, 1, 0.7);
	padding: 10px;
	border-radius: 3px;
	color: #fbfbfb;
	font-family: 'Montserrat', sans-serif;
	transition: opacity 0.3s;
}
</style>
