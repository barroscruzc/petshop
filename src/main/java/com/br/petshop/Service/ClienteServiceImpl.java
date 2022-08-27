package com.br.petshop.Service;import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.petshop.Model.Cliente;
import com.br.petshop.Repository.ClienteRepository;

@Service
public class ClienteServiceImpl implements IClienteService{

	@Autowired
	private ClienteRepository repo;
	
	@Override
	public Cliente salvar(Cliente novo) {
		return repo.save(novo);
	}
	
	@Override
	public Cliente buscar(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	@Override
	public List<Cliente> listar(){
		return (ArrayList<Cliente>)repo.findAll();
	}
	
	@Override
	public void excluir(Integer id) {
		repo.deleteById(id);
	}
}
