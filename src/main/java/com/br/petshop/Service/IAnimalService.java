package com.br.petshop.Service;

import java.util.ArrayList;

import com.br.petshop.Model.Animal;

public interface IAnimalService {

	public Animal salvar(Animal animal);
	public Animal buscar(Integer id);
	public ArrayList<Animal> listar();
	public void excluir(Integer id);
}
