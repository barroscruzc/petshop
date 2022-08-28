package com.br.petshop.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.petshop.Model.OrdemServico;
import com.br.petshop.Repository.OrdemServicoRepository;

@Service
public class OrdemServicoServiceImpl implements IOrdemServicoService{

	@Autowired
	OrdemServicoRepository repo;
	
	@Override
	public OrdemServico salvar(OrdemServico novo) {
		// TODO Auto-generated method stub
		return repo.save(novo);
	}

	@Override
	public OrdemServico buscar(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public List<OrdemServico> listar() {
		// TODO Auto-generated method stub
		return (ArrayList<OrdemServico>)repo.findAll();
	}

}
