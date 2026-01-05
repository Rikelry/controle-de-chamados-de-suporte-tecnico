# Atividade em Sala – Modelagem Orientada a Objetos

## Cenário: Sistema de Controle de Chamados de Suporte Técnico

Imagine o setor de Tecnologia da Informação (TI) de uma instituição que recebe, diariamente, diversas solicitações de suporte técnico feitas por professores, alunos e servidores administrativos. Essas solicitações podem envolver problemas com computadores, falhas na conexão com a internet, instalação de softwares ou dúvidas sobre o uso de sistemas.

Atualmente, essas solicitações são feitas de forma informal, o que dificulta o controle do atendimento. Para melhorar essa organização, o setor de TI decidiu criar um sistema simples de controle de chamados, permitindo registrar, acompanhar e finalizar cada solicitação de forma estruturada.

---

## Descrição Geral do Sistema

O sistema de controle de chamados permitirá que um usuário registre um problema técnico por meio de um menu simples. Cada solicitação registrada será chamada de **Chamado**. Um chamado representa um pedido de suporte que pode estar **aberto** ou **resolvido**.

O sistema não utilizará banco de dados nem interface gráfica avançada. Todas as interações ocorrerão por meio de mensagens de texto, utilizando as funções `prompt()` para entrada de dados e `alert()` para exibição de informações.

---

## Funcionalidades do Sistema

- **Abrir um chamado**: o usuário informa seu nome e descreve o problema encontrado.
- **Listar chamados**: o sistema exibe todos os chamados cadastrados, mostrando o solicitante, a descrição do problema e o status do atendimento.
- **Atender (ou fechar) chamado**: o usuário seleciona um chamado e o marca como resolvido.
- **Encerrar o sistema**: finaliza a execução do programa.

---

## Exemplos de Interação com o Usuário

### Exemplo 1 – Abertura de chamado
Ao iniciar o sistema, o usuário escolhe a opção de abrir um chamado. O sistema solicita o nome do solicitante e, em seguida, pede a descrição do problema. Após o cadastro, uma mensagem informa que o chamado foi registrado com sucesso.

### Exemplo 2 – Listagem de chamados
Ao escolher a opção de listagem, o sistema exibe todos os chamados já registrados, mostrando quais ainda estão abertos e quais já foram resolvidos.

### Exemplo 3 – Atendimento de chamado
O usuário seleciona um chamado específico e indica que o problema foi resolvido. O sistema atualiza o status do chamado e informa que ele foi encerrado.

---

## Objetivo da Atividade

Com base nesse cenário, os alunos irão modelar o sistema utilizando os conceitos de **Programação Orientada a Objetos**, organizando o código em camadas (**UI**, **Funcionalidades** e **Modelo**). O foco principal da atividade é a identificação das classes, definição de responsabilidades e uso de abstrações, como **interfaces**, para representar as regras de negócio do sistema.
