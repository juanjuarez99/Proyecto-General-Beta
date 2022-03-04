<template>
	<div class="card shadow">
		<img :src="imagen" :alt="nombre" class="card-img-top" />
		<div class="card-body">
			<h5 class="card-title">
				{{ nombre }}
			</h5>
		</div>
	</div>
</template>

<script>
export default {
	name: "TarjetaCategoria",
	props: {
		imagen: String,
		nombre: String,
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
