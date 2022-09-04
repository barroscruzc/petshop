package com.br.petshop.Products;

import com.br.petshop.Model.Animal;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AnimalProduct {

    @JsonProperty("id")
    private Integer id;
    
    @JsonProperty("nome")
    private String nome;
    
    @JsonProperty("idade")
    private Integer idade;
    
    @JsonProperty("peso")
    private Integer peso;
    
    @JsonProperty("cliente")
    private ClienteProduct cliente;

    public AnimalProduct(Animal animal) {
        this.id = animal.getId();
        this.nome = animal.getNome();
        this.idade = animal.getIdade();
        this.peso = animal.getPeso();
        this.cliente = new ClienteProduct(animal.getCliente());
    }
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public ClienteProduct getCliente() {
        return cliente;
    }

    public void setCliente(ClienteProduct cliente) {
        this.cliente = cliente;
    }

}
