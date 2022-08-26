package com.br.petshop.Service;

import java.util.List;

import com.br.petshop.Model.Animal;

public interface IAnimalService {

	public Animal salvar(Animal animal);
	public Animal buscar(Integer id);
	public List<Animal> listar();
	public void excluir(Integer id);
}
