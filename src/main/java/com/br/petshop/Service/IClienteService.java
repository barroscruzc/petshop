package com.br.petshop.Service;

import java.util.List;

import com.br.petshop.Model.Cliente;

public interface IClienteService {

	public Cliente salvar(Cliente novo);
	public Cliente buscar(Integer id);
	public List<Cliente> listar();
	public void excluir(Integer id);
}
