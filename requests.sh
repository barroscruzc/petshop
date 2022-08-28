#POST sem atributo 'nome'
#curl -d '{ "telefone": "21 99999-999", "animais": [ ] }' -H "Content-Type: application/json" -X POST localhost:8080/petshop/clientes

#POST cliente
#curl -d '{ "nome": "Tiago Silva", "telefone": "21 99999-999", "animais": [ ] }' -H "Content-Type: application/json" -X POST localhost:8080/petshop/clientes

#GET clientes
#curl localhost:8080/petshop/clientes