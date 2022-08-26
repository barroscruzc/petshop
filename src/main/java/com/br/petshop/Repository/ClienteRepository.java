package com.br.petshop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.petshop.Model.Cliente;

public interface ClienteRepository extends JpaRepository <Cliente, Integer>{

}
