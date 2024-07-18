## App

Sistema de gerenciamento de transfusão de sangue

## RFs (Requisitos funcionais)

- [x] Deve ser possível se autenticar;
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível obter o perfil do usuário logado;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não deve poder se cadastrar com um cpf duplicado;

## RNFs

- [x] A senha do usuário precisa ser criptografada;
- [x] Quando autenticado o token e os dados do usuário deve ser salvo em memória.
- [ ] Quando a página for recarregada, deve-se carregar os dados da memoría e validar se são válidos.
- [ ] Se o token do usuário for inválido, o usuário tem que ser redirecionado para a página de login.
- [ ] O usuário deve se autenticar utilizando também um segundo fator de autenticação.
- [x] Os dados da aplicação devem ser persistidos em um banco de dados;
- [ ] Todas as listas precisam estar paginadas com 25 items por página;
- [ ] O usuário deve ser identificado por um (JSON Web token);
