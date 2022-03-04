<template>
	<div class="card shadow">
		<img :src="imagen" :alt="nombre" class="card-img-top" />
		<div class="card-body">
			<h5 class="card-title">
				{{ nombre }}
			</h5>
			<p v-if="precio" class="card-text">${{ precio }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "TarjetaProducto",
	props: {
		imagen: String,
		nombre: String,
		precio: Number,
	},
};
</script>

<style scoped lang="scss">
.card {
	cursor: pointer;
}

.card:hover {
	transform: translateY(-5px);
}
</style>
