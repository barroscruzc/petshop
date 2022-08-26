package com.br.petshop.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.petshop.Model.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Integer>{

}
