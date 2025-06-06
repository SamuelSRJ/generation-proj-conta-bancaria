# Banco do Brazil com Z

Sistema de Gerenciamento de Contas Bancárias desenvolvido em TypeScript, com arquitetura orientada a objetos e interface de linha de comando. Permite a criação, consulta, atualização, exclusão e operações bancárias entre contas correntes e poupança.

## Funcionalidades

- **Cadastro de Contas**: Conta Corrente e Conta Poupança
- **Listagem de Contas**: Visualização de todas as contas cadastradas
- **Busca por Número**: Consulta detalhada de uma conta específica
- **Atualização de Dados**: Alteração de informações das contas
- **Exclusão de Contas**: Remoção de contas do sistema
- **Operações Bancárias**:
  - Saque
  - Depósito
  - Transferência entre contas

## Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [readline-sync](https://www.npmjs.com/package/readline-sync) (entrada de dados via CLI)

## Estrutura do Projeto
```
├── Menu.ts
├── package.json
├── tsconfig.json
└── src
    ├── controller
    │   └── ContaController.ts
    ├── model
    │   ├── Conta.ts
    │   ├── ContaCorrente.ts
    │   └── ContaPoupanca.ts
    ├── repository
    │   └── ContaRepository.ts
    └── util
        └── Colors.ts
```

## Como Executar

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/SamuelSRJ/generation-proj-conta-bancaria.git
   cd generation-proj-conta-bancaria
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Compile o projeto (se necessário):**
   ```sh
   npx tsc
   ```

4. **Execute o sistema:**
   ```sh
   ts-node Menu.js
   ```

## Sobre

Projeto desenvolvido por Samuel de Souza  
E-mail: samuelsouzarosajr@gmail.com  
GitHub: [SamuelSRJ](https://github.com/SamuelSRJ)

---
> **Observação:** Projeto para fins educacionais, demonstrando conceitos de orientação a objetos e manipulação de dados em TypeScript.
