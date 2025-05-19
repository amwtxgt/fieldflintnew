<script setup lang="ts">

	import {defineAsyncComponent} from "vue";
	const abc = defineAsyncComponent(() => import('./components/abc.vue'))
	console.log(import.meta.env.DEV);
	console.log(import.meta.env.PROD);
	console.log(import.meta.env.SSR);
	console.log(import.meta.env.BASE_URL);
	console.log(import.meta.env.MODE);
</script>

<template>
	<div class="main">
		我是首页
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