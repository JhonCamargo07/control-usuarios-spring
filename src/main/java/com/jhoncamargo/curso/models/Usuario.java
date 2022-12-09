package com.jhoncamargo.curso.models;

import lombok.*;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Table(name = "usuario")
public class Usuario {

    @Id
    @Column(name = "id_usuario")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    private String email;

    private String telefono;

    private String password;

}
