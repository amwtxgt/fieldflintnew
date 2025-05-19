<script setup lang="ts">

	import {defineAsyncComponent} from "vue";
	const abc = defineAsyncComponent(() => import('./components/abc.vue'))

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