create database petshop;
drop database petshop;
use petshop;
desc cliente;
select * from cliente;
insert into cliente (id, nome, telefone) values (null, "Ana Maria", "21 99999-999");
insert into cliente (id, nome, telefone) values (null, "Marcia Silva", "21 99999-999");
insert into cliente (id, nome, telefone) values (null, "Larissa Sousa", "21 99999-999");
insert into cliente (id, nome, telefone) values (null, "Mauro Lopes", "21 99999-999");
insert into cliente (id, nome, telefone) values (null, "Felipe Costa", "21 99999-999");

desc animal;
select * from animal;
insert into animal (id, idade, nome, peso, cliente_id) values (null, 5, "Belinha", 8, 1);
insert into animal (id, idade, nome, peso, cliente_id) values (null, 2, "Thor", 15, 2);
insert into animal (id, idade, nome, peso, cliente_id) values (null, 1, "Hulk", 10, 3);
insert into animal (id, idade, nome, peso, cliente_id) values (null, 8, "Pretinho", 4, 4);

desc ordem_servico;
select * from ordem_servico;
insert into ordem_servico (codigo, data, descricao, hora_entrada, hora_retirada, valor, animal_id, cliente_id) 
values 
(null, "26-08-2022", "Banho e tosa completa", "15:30", "17:00", 35.00, 1, 1); 
 
insert into ordem_servico (codigo, data, descricao, hora_entrada, hora_retirada, valor, animal_id, cliente_id) 
values 
(null, "26-08-2022", "Banho", "11:30", "13:00", 20.00, 2, 2); 

insert into ordem_servico (codigo, data, descricao, hora_entrada, hora_retirada, valor, animal_id, cliente_id) 
values 
(null, "26-08-2022", "Banho e tosa higiênica", "12:30", "14:00", 30.00, 3, 3); 

insert into ordem_servico (codigo, data, descricao, hora_entrada, hora_retirada, valor, animal_id, cliente_id) 
values 
(null, "26-08-2022", "Corte de unhas", "15:30", "16:00", 15.00, 4, 4); 


