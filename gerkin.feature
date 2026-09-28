Scenario: Usuario introduce un número válido y gana
Given el usuario introduce el número 7
When el sistema genera el número aleatorio 7
Then se muestra "Ganaste"

Scenario: Usuario introduce un número válido y pierde
Given el usuario introduce el número 4
When el sistema genera el número aleatorio 8
Then se muestra "Perdiste"

Scenario: Entrada no numérica
Given el usuario introduce "Hola"
When el usuario pulsa "Jugar"
Then se muestra un mensaje de error

Scenario: Número fuera de rango
Given el usuario introduce el número 20
When el usuario pulsa "Jugar"
Then se muestra un mensaje indicando que el número debe estar entre 1 y 10

Scenario: Historial de jugadas
Given el usuario realiza las jugadas con los números 3 y 8
When ambas jugadas terminan
Then el historial muestra ambas jugadas con el número introducido, el número generado y el resultado correspondient
