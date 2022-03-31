<template>
	<div class="container p-2">
		<div>
			<label>Fecha y Hora: </label>
			<input v-model="nombre" type="datetime-local" />
		</div>
		<div>
			<label>Usuario: </label>
			<input v-model="usuario" />
		</div>
		<div>
			<label>Productos: </label>
			<div>
				<div v-for="(i, producto) in productos" :key="i">
					<div>
						{{ productoActual(producto).nombre }}
					</div>
					<div>
						{{ productoActual(producto).precio }}
					</div>
					<button @click="borrar(i)">Borrar</button>
				</div>
			</div>
		</div>
		<button @click="editar">Editar</button>
		<button @click="cancelar">Cancelar</button>
	</div>
</template>

<script>
export default {
	name: "EditarVenta",
	data: () => ({
		usuario: "",
		fecha: "",
		productos: [],
		id: "",
		productosDisponibles: [],
	}),
	methods: {
		productoActual(p) {
			return this.productosDisponibles((pd) => pd.id === p)[0];
		},
		async editar() {
			const respuesta = await fetch(`/api/v1/ventas/${this.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: this.nombre,
					fecha: this.fecha,
					productos: this.productos,
					id: this.id,
				}),
			});
			if (respuesta.ok) {
				this.$router.push("/administracion/ventas");
			}
		},
		cancelar() {
			this.$router.push("/administracion/ventas");
		},
	},
	mounted,
};

async function mounted() {
	try {
		const respuesta = await fetch(`/api/v1/ventas/${this.$route.params.id}`);
		if (respuesta.ok) {
			const valores = await respuesta.json();
			this.id = valores.id;
			this.usuario = valores.usuario;
			const r2 = await fetch(`/api/v1/productos`);
			if (r2.ok) {
				this.productosDisponibles = await r2.json();
			}
		} else {
			this.mensaje = "Ocurrió un error al conectar con la base de datos";
			return;
		}
	} catch (_) {
		this.mensaje = "Ocurrió un error al conectar con la base de datos";
	}
}
</script>

<style lang="scss"></style>
<style lang="scss"></style>
