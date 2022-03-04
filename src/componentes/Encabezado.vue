<template>
	<header class="bg-azul text-center p-2 text-white">
		<h1>{{ titulo }}</h1>
	</header>
</template>

<script>
export default {
	name: "VistaPuntoVenta",
	props: {
		titulo: String,
	},
};
</script>

<style scoped lang="scss"></style>
