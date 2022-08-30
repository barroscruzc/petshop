package com.br.petshop.Repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.br.petshop.Model.OrdemServico;

public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Integer>{

    @Query(value="SELECT * FROM ordem_servico", nativeQuery=true)
    ArrayList<OrdemServico> listar();
}
