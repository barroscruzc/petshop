package com.br.petshop.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.petshop.Model.Animal;
import com.br.petshop.Service.IAnimalService;

@RestController
@RequestMapping(path="/petshop")
public class AnimalController {

	@Autowired
	private IAnimalService service;
	
	@GetMapping("/animais/{id}")
	public ResponseEntity<Animal> buscar(@PathVariable("id") Integer id){
		Animal animal = service.buscar(id);
		if (animal != null) {
			return ResponseEntity.ok(animal);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/animais")
	public ArrayList<Animal> listar(){
		return (ArrayList<Animal>) service.listar();
	}
	
	@PostMapping("/animais")
	public ResponseEntity<Animal> novo(@RequestBody Animal animal){
		Animal pet = service.salvar(animal);
		if(pet != null) {
			return ResponseEntity.ok(pet);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/animais/{id}")
	public ResponseEntity<Animal> atualizado(@PathVariable("id") Integer id, @RequestBody Animal animal){
		Animal pet = service.buscar(id);
		if(pet != null) {
			pet.setCliente(animal.getCliente());
			pet.setIdade(animal.getIdade());
			pet.setNome(animal.getNome());
			pet.setPeso(animal.getPeso());
			service.salvar(pet);
			return ResponseEntity.ok(pet);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/animais/{id}")
	public void excluir(@PathVariable("id") Integer id){
		Animal pet = service.buscar(id);
		if (pet != null) {
			service.excluir(id);
		}
	}
	
}
