package com.br.petshop.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.petshop.Model.Cliente;
import com.br.petshop.Model.OrdemServico;
import com.br.petshop.Service.IOrdemServicoService;

@RestController
@RequestMapping(path="/petshop")
public class OrdemServicoController {

	@Autowired
	private IOrdemServicoService service;
	
	@GetMapping("/ordemservico/{codigo}")
	public ResponseEntity<OrdemServico> buscar(@PathVariable("codigo") Integer codigo) {
		OrdemServico os = service.buscar(codigo);
		if (os != null) {
			return ResponseEntity.ok(os);
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping("/ordemservico")
	public ArrayList<OrdemServico> listar() {
		return (ArrayList<OrdemServico>) service.listar();
	}
	
	@PostMapping("/ordemservico")
	public ResponseEntity<OrdemServico> novo(@RequestBody OrdemServico ordemServico) {
		OrdemServico os = service.salvar(ordemServico);
		if (os != null) {
			return ResponseEntity.ok(os);
		}
		return ResponseEntity.badRequest().build();
	}
	
}
