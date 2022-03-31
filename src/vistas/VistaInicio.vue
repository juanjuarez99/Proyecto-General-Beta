<template>
	<div class="vista-inicio">
		<div class="container">
			<div class="row row-cols-md-2 p-5">
				<div class="vista-inicio__titulo">
					<h1>Bienvenidos a Coffe Galaxy</h1>
				</div>
				<div class="vista-inicio__titulo2 d-flex flex-column gap-1">
					<h5>A quien madruga, un buen café lo ayuda</h5>
					<div class="row row-cols-md-4 gap-3">
						<button
							class="p-2 text-white btn border border-secondary border-3 bg-secondary bg-opacity-25"
						>
							Contactanos
						</button>
						<button
							class="p-2 text-white btn border border-secondary border-3 bg-secondary bg-opacity-25"
						>
							Conoce nuestro Menú
						</button>
						<button
							class="p-2 text-white btn border border-secondary border-3 bg-secondary bg-opacity-25"
						>
							Galeria
						</button>
					</div>
				</div>
			</div>
			<div class="text-center p-4 bg-success text-white bg-opacity-75 mb-4">
				<h2>Logueate para Continuar</h2>
				<div v-if="mensaje" class="text-danger bg-white">{{ mensaje }}</div>
			</div>
			<form
				class="d-flex flex-column w-50 mx-auto"
				@submit="checarCredenciales"
			>
				<input
					v-model="usuario"
					class="mb-3 p-2"
					type="text"
					placeholder="Nombre de usuario"
				/>
				<input
					v-model="contrasena"
					class="mb-3 p-2"
					type="password"
					placeholder="Contraseña"
				/>
				<input
					type="submit"
					class="mb-3 p-2 btn btn-success"
					value="Iniciar sesión"
				/>
			</form>
		</div>
	</div>
</template>

<script>
import { store } from "@/store.js";

export default {
	name: "VistaInicio",
	data: () => ({
		usuario: "",
		contrasena: "",
		mensaje: "",
	}),
	methods: {
		async checarCredenciales(e) {
			e.preventDefault();
			try {
				const respuesta = await fetch("/api/v1/usuarios");
				if (respuesta.ok) {
					const usuarios = await respuesta.json();
					const usuario = usuarios.filter(
						(u) => u.nombre === this.usuario && u.contrasena === this.contrasena
					)[0];
					if (!usuario) {
						this.mensaje = "Usuario o contraseña incorrectos";
						return;
					}

					store.app.usuario.cambiarTipo(usuario.tipo);
					store.app.usuario.cambiarId(usuario.id);

					if (usuario.tipo === "Administrador") {
						this.$router.push("/administracion");
						return;
					}

					this.$router.push("/puntodeventa");
				} else {
					this.mensaje = "Ocurrió un error al conectar con la base de datos";
					return;
				}
			} catch (err) {
				this.mensaje = "Ocurrió un error al conectar con la base de datos";
				return;
			}
		},
	},
};
</script>

<style scoped lang="scss">
$color-fondo: rgba(80, 80, 80, 0.75);

.vista-inicio {
	background-image: linear-gradient($color-fondo, $color-fondo),
		url("https://images.unsplash.com/photo-1562815240-be666d2600ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80");
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;

	&__titulo {
		font-family: "Dancing Script", cursive;
		color: white;
	}

	&__titulo2 {
		font-family: "Open Sans", sans-serif;
		color: white;
	}
}
</style>
