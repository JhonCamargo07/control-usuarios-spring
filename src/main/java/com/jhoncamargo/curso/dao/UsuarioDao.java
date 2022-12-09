package com.jhoncamargo.curso.dao;

import com.jhoncamargo.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();


    void eliminarUsuario(Long id);
}
