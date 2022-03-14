# Comportamento de cada arquivo

## Estrutura de pastas de um server

<h3 align="center">Server</h3>

- service = tudo que é regra de negócio ou processamento

- controller = intermediar a camada de apresentação e a camada de neǵocio

- routes = camada de apresentação (NUNCA deve chamar a service diretamente)

- server = responsável por criar o servidor (mas não instancia)

- index = instancia o servidor e expõe para a web (lado da infra)

- config = tudo que for estático no projeto
