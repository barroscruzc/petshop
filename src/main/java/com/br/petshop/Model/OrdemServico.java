package com.br.petshop.Model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="ordem_servico")
public class OrdemServico {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="codigo")
	private Integer codigo;
	
	@ManyToOne
	@JoinColumn(name="cliente_id")
	@JsonIgnoreProperties("animais")
	private Cliente cliente;
	
	@Column(name="valor")
	private BigDecimal valor;
	
	@Column(name="data")
	private String data;
	
	@Column(name="descricao")
	private String descricao;
	
	@Column(name="hora_entrada")
	private String hora_entrada;
	
	@Column(name="hora_retirada")
	private String hora_retirada;
	
	@ManyToOne
	@JoinColumn(name="animal_id")
	private Animal animal;

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHora_entrada() {
		return hora_entrada;
	}

	public void setHora_entrada(String hora_entrada) {
		this.hora_entrada = hora_entrada;
	}

	public String getHora_retirada() {
		return hora_retirada;
	}

	public void setHora_retirada(String hora_retirada) {
		this.hora_retirada = hora_retirada;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}
