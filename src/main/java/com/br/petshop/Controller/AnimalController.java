package com.br.petshop.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.petshop.Model.Animal;
import com.br.petshop.Products.AnimalProduct;
import com.br.petshop.Service.IAnimalService;

@RestController
@RequestMapping(path="/petshop")
@CrossOrigin(origins = "*")
public class AnimalController {

	@Autowired
	private IAnimalService service;
	
	@GetMapping("/animais/{id}")
	public ResponseEntity<AnimalProduct> buscar(@PathVariable("id") Integer id){
		Animal animal = service.buscar(id);
		AnimalProduct animalProduct = new AnimalProduct(animal);
        return ResponseEntity.ok().body(animalProduct);
	}
	
	@GetMapping("/animais")
	public ArrayList<AnimalProduct> listar(){
		ArrayList<Animal> animais = service.listar();
        ArrayList<AnimalProduct> animaisProduct = new ArrayList<AnimalProduct>();
        animais.forEach(animal -> {
            animaisProduct.add(new AnimalProduct(animal));
        });
        return animaisProduct;
	}
	
	@PostMapping("/animais")
	public ResponseEntity<AnimalProduct> novo(@RequestBody Animal animal){
		Animal animalSalvo = service.salvar(animal);
        AnimalProduct animalProduct = new AnimalProduct(animalSalvo);
        return ResponseEntity.ok().body(animalProduct);
	}
	
	@PutMapping("/animais/{id}")
	public ResponseEntity<Animal> atualizado(@PathVariable("id") Integer id, @RequestBody Animal animal){
		Animal pet = service.buscar(id);
		if(pet != null) { // Novo animal
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
