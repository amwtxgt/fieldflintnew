<script setup lang="ts">

	import {defineAsyncComponent} from "vue";
	const abc = defineAsyncComponent(() => import('./components/abc.vue'))
	console.log(import.meta.env.VITE_HOME)
</script>

<template>
	<div class="main">
		mail
		<h1>Vite is running in %MODE%</h1>
		<p>Using data from %VITE_API_URL%</p>
		<abc></abc>
	</div>
</template>

<style scoped>
	.main{
		width: 100%;
		height: 100%;
		display: flex;
	}

</style>