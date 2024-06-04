# E-commerce com Twilio

Este projeto utiliza o Twilio para desenvolver uma plataforma de e-commerce e gerenciar pedidos de clientes. O objetivo é permitir que os pedidos realizados pelos clientes sejam enviados diretamente para o administrador.

## Objetivos

- Implementar uma plataforma de e-commerce funcional.
- Integrar o Twilio para comunicação e gestão de pedidos.
- Automatizar o envio de notificações de pedidos para o administrador.

 ## Tecnologias Utilizadas
 
- **Twilio:** Serviço de comunicação para envio de SMS e outras notificações.
- **Linguagem de Programação:**  JavaScript, Nodejs.

## Lista de Tarefas

### A Fazer

- [X] Implementar o cadastro de produtos.
- [X] Desenvolver a funcionalidade de carrinho de compras.
- [X] Configurar o processo de checkout.
- [X] Integrar o Twilio para notificações de pedidos.
- [ ] Criar interface de administração para gestão de pedidos.

### Concluídas

- [x] Configurar ambiente de desenvolvimento.
- [x] Instalar dependências necessárias.
- [x] Criar estrutura inicial do projeto.
- [x] Configurar variáveis de ambiente para o Twilio.

1. Clone o repositório:
   ```bash
   git clone https://github.com/Venoshk/Twilio-API.git

## Configuração 

  - Crie uma conta no Twilio.
  - Obtenha suas credenciais da API do Twilio (Account SID e Auth Token).
  - Configure suas variáveis de ambiente:
  ```bash
export TWILIO_ACCOUNT_SID=your_account_sid
export TWILIO_AUTH_TOKEN=your_auth_token
export TWILIO_PHONE_NUMBER=your_twilio_phone_number
export ADMIN_PHONE_NUMBER=admin_phone_number
