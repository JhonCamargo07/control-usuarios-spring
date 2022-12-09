$(document).ready(function () {
	cargarUsuarios();
	$('#usuarios').DataTable();
});

async function cargarUsuarios() {
	const response = await fetch('api/usuarios', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	const usuarios = await response.json();

	let usuariosHtml = '';
	usuarios.map((usuario, index) => {
		usuariosHtml += `<tr><td>${index + 1}</td><td>${usuario.nombre} ${usuario.apellido}</td><td>${usuario.email}</td><td>${
			usuario.telefono
		}</td><td><a onclick="deleteUser(${
			usuario.id
		})" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>`;
	});

	document.querySelector('#usuarios tbody').outerHTML = usuariosHtml;
}

async function deleteUser(id) {
	if (!confirm('¿Desea eliminar a este usuario?')) {
		return;
	}

	await fetch(`api/usuarios/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	cargarUsuarios();
}

setInterval(() => {
	cargarUsuarios();
}, 5000);
