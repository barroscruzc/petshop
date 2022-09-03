curl --location --request POST 'localhost:8080/petshop/animais' \
--data-raw '{
    "nome": "Paçoca",
    "idade": 3,
    "peso": 5,
    "cliente": {
        "id": 1
        }
}'

curl --location --request POST 'localhost:8080/petshop/clientes' \
--data-raw '{
    "nome": "Joana D'\''Arc",
    "telefone": "21 99999-999",
    "animais": [
    ]
}'

curl --location --request POST 'localhost:8080/petshop/ordemservico' \
--data-raw '{
    "cliente": {
            "id": 6
        },
        "valor": 35.00,
        "data": "26-08-2022",
        "descricao": "Banho e tosa completa",
        "hora_entrada": "15:30",
        "hora_retirada": "17:00"
    }'


