package com.br.petshop.Service;

import java.util.List;

import com.br.petshop.Model.OrdemServico;

public interface IOrdemServicoService {

	public OrdemServico salvar(OrdemServico novo);
	public OrdemServico buscar(Integer id);
	public List<OrdemServico> listar();
}
