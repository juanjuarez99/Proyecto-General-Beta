<template>
	<div class="container">
		<div class="row row-cols-3 p-3">
			<div>
				<TarjetaCategoria
					nombre="Usuarios"
					imagen="https://source.unsplash.com/random/100x101"
					@click="cambiarSeleccion('usuarios')"
				/>
			</div>
			<div>
				<TarjetaCategoria
					nombre="Productos"
					imagen="https://source.unsplash.com/random/101x101"
					@click="cambiarSeleccion('productos')"
				/>
			</div>
			<div>
				<TarjetaCategoria
					nombre="Categorias"
					imagen="https://source.unsplash.com/random/101x100"
					@click="cambiarSeleccion('categorias')"
				/>
			</div>
		</div>
		<div class="row row-cols-3 p-3">
			<div>
				<TarjetaCategoria
					nombre="Ventas"
					imagen="https://source.unsplash.com/random/102x101"
					@click="cambiarSeleccion('ventas')"
				/>
			</div>
			<div>
				<TarjetaCategoria
					nombre="Punto de venta"
					imagen="https://source.unsplash.com/random/101x102"
					@click="irAPuntoVenta"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import TarjetaCategoria from "./TarjetaCategoria";

export default {
	name: "PAInicio",
	components: {
		TarjetaCategoria,
	},
	methods: {
		irAPuntoVenta() {
			this.$router.push("/puntodeventa");
		},
		cambiarSeleccion(seleccion) {
			this.$router.push(`/administracion/${seleccion}`);
		},
	},
};
</script>

<style scoped lang="scss"></style>
