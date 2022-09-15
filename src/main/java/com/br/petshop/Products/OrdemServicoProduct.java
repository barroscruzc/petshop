package com.br.petshop.Products;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

import com.br.petshop.Model.OrdemServico;
import com.br.petshop.Model.Animal;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

public class OrdemServicoProduct {

    @JsonProperty("codigo")
    private Integer codigo;

    @JsonProperty("cliente")
    private ClienteProduct cliente;

    @JsonProperty("valor")
    private BigDecimal valor;

    @JsonProperty("data")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "GMT")
    private LocalDate data;

    @JsonProperty("descricao")
    private String descricao;

    @JsonProperty("hora_entrada")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT")
    private LocalTime hora_entrada;

    @JsonProperty("hora_retirada")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm", timezone = "GMT")
    private LocalTime hora_retirada;

    @JsonProperty("animal")
    private Animal animal;

    public OrdemServicoProduct(OrdemServico ordemS) {
        this.codigo = ordemS.getCodigo();
        this.cliente = new ClienteProduct(ordemS.getCliente());
        this.valor = ordemS.getValor();
        this.data = ordemS.getData();
        this.descricao = ordemS.getDescricao();
        this.hora_entrada = ordemS.getHora_entrada();
        this.hora_retirada = ordemS.getHora_retirada();
        this.animal = ordemS.getAnimal();
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public ClienteProduct getCliente() {
        return cliente;
    }

    public void setCliente(ClienteProduct cliente) {
        this.cliente = cliente;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public LocalTime getHora_entrada() {
        return hora_entrada;
    }

    public void setHora_entrada(LocalTime hora_entrada) {
        this.hora_entrada = hora_entrada;
    }

    public LocalTime getHora_retirada() {
        return hora_retirada;
    }

    public void setHora_retirada(LocalTime hora_retirada) {
        this.hora_retirada = hora_retirada;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
