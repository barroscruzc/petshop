# Petshop
Projeto desenvolvido durante o Bootcamp **If Black, Then Code (IBM & Gama Academy)**, com a finalidade de testar a habilidade no uso dos verbos e retornos de uma API Rest.

## Desafio

Criar uma API com Spring Boot para uma empresa de Banho&Tosa com as seguintes entidades:

1. Cliente - atributos mínimos: 
  - nome
  - telefone
  
2. Animal - atributos mínimos: 
  - nome 
  - idade
  - peso 
  - id_cliente
  
3. OrdemServico – atributos mínimos: 
  - id_cliente 
  - valor 
  - hora_entrada
  - hora_retirada
  
Após a conclusão do desafio proposto, foi implementado o front-end da aplicação em React.
  
## **Como rodar o projeto**
### **Preparando o ambiente**
Crie um banco de dados no MySQL chamado **petshop** na porta **3306**.
no **localhost**, com o usuário **root** e senha **root**.

Com o docker instalado é possível criar o banco de dados com o seguinte comando:
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=petshop -p 3306:3306 -d mysql:latest
```

Inicialize o banco de dados com o seguinte comando:
```bash
docker start mysql
```

### **Rodando o projeto**
Observação, em sistemas unix-like, é necessários tonar o `mvnw` executável, para isso, execute o comando `chmod +x mvnw` no terminal.

No windows, basta executar os comandos com o `mvnw.cmd` pelo terminal.

baixe as dependências do projeto com o comando `./mvnw clean install`

Para rodar o projeto, execute o comando `./mvnw spring-boot:run` no terminal.

### **Eclipse** ou **IntelliJ**
Para usar o o projeto no Eclipse ou IntelliJ, basta importar o projeto como um projeto Maven. As dependências serão baixadas automaticamente.

## Documentação
A documentação dos endpoints da API pode ser visualizada <a target="_blank" href="https://documenter.getpostman.com/view/21287524/VUxNSTdJ"> aqui </a>.

## Estrutura do banco de dados
A imagem abaixo ilustra os relacionamentos entre as três tabelas do database.

![dt_petshop](https://user-images.githubusercontent.com/93226440/187004819-cc08ccfc-fb4d-4a26-a11f-6d4df29142aa.png)

## Prévia das Telas da Aplicação

![image](https://user-images.githubusercontent.com/93226440/190518237-534c5eda-3ba5-4d2f-b29e-89b7e9f3feca.png)

![image](https://user-images.githubusercontent.com/93226440/190518353-737b7077-165f-4736-81d0-01c68b31e2e3.png)

![image](https://user-images.githubusercontent.com/93226440/190518597-e532d658-019d-407c-8430-2daf2f03b2d4.png)

![image](https://user-images.githubusercontent.com/93226440/190518746-65c7b4c4-57d2-4937-b268-faafba16af89.png)

![image](https://user-images.githubusercontent.com/93226440/190518850-763389ec-a965-44a7-92e1-5e8ae43ff847.png)

![image](https://user-images.githubusercontent.com/93226440/190518899-e0e9e201-48cb-44a1-b4d7-f546f32edb09.png)


## Autores

**Cristhiane Barros da Cruz** - `Back-end`

<a href="https://www.linkedin.com/in/barroscruzc" target="_blank"> LinkedIn </a> | <a href="https://www.github.com/barroscruzc" target="_blank"> GitHub </a>



**Nicolas da Nery** - `Front-end`

<a href="https://www.linkedin.com/in/nicolas-vycas/" target="_blank"> LinkedIn </a> | <a href="https://github.com/tomast1337" target="_blank"> GitHub </a>


## Stacks

**Back-end**: 
- Java
- Spring
- MySQL

**Front-end**:
- React
- TypeScript
- HTML 
- CSS







