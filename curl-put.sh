curl --location --request PUT 'localhost:8080/petshop/animais/2' \
--data-raw ' {
    "id": 2,
    "nome": "Thor",
    "idade": 7,
    "peso": 12,
    "cliente": {
        "id": 2
    }
}'

curl --location --request PUT 'localhost:8080/petshop/clientes/6' \
--data-raw '{"id": 1,"nome": "Ana Maria", "telefone": "21 99999-999", "animais": [{"id": 1
        }
    ]
}'
