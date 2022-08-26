package com.br.petshop.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.petshop.Model.Animal;
import com.br.petshop.Repository.AnimalRepository;

@Service
public class AnimalServiceImpl implements IAnimalService {

	@Autowired
	private AnimalRepository repo;
	
	@Override
	public Animal salvar(Animal novo) {
		// TODO Auto-generated method stub
		return repo.save(novo);
	}

	@Override
	public Animal buscar(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public ArrayList<Animal> listar() {
		// TODO Auto-generated method stub
		return (ArrayList<Animal>)repo.findAll();
	}

	@Override
	public void excluir(Integer id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}
	
}
