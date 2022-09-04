# Petshop
Projeto desenvolvido durante o Bootcamp **If Black, Then Code (IBM & Gama Academy)**, com a finalidade de testar a habilidade no uso dos verbos e retornos de uma API Rest.

## Desafio

Criar uma API com Spring Boot para a empresa Pet(banho&tosa). Nessa aplicação teremos as seguintes entidades:

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
  
## Documentação
A documentação dos endpoints da API pode ser visualizada <a target="_blank" href="https://documenter.getpostman.com/view/21287524/VUxNSTdJ"> aqui </a>.

## Estrutura do banco de dados
A imagem abaixo ilustra os relacionamentos entre as três tabelas do database.

![dt_petshop](https://user-images.githubusercontent.com/93226440/187004819-cc08ccfc-fb4d-4a26-a11f-6d4df29142aa.png)


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


