`# React Component Genie CLI

React Component Genie CLI é uma ferramenta poderosa para gerar componentes React de forma automatizada. Ela facilita a criação de componentes com diferentes estilos e configurações de teste, permitindo que você escolha entre Tailwind, Styled Components, CSS, Jest, e Playwright.

## Instalação

Primeiro, instale a CLI globalmente usando npm:

```sh
npm install -g react-component-genie-cli `

Uso
---

Para usar a CLI, navegue até o diretório raiz do seu projeto React e execute o comando:

sh

Copiar código

`react-component-genie`

A CLI fará uma série de perguntas para configurar seu componente:

1.  Nome do Componente: O nome do componente que você deseja criar.
2.  Diretório: O diretório onde o componente será criado.
3.  Estilo: Escolha entre Tailwind, Styled Components, ou CSS.
4.  Testes: Escolha entre Jest, Playwright, ou Nenhum.
5.  TypeScript: Escolha se deseja usar TypeScript.
6.  Variante: Escolha uma variante de componente (Padrão, Primário, Secundário, Nenhum).

### Exemplos

Criar um componente básico com CSS:

sh

Copiar código

`react-component-genie`

Responda às perguntas da CLI:

-   Nome do Componente: `Button`
-   Diretório: `src/components`
-   Estilo: `CSS`
-   Testes: `Jest`
-   TypeScript: `Sim`
-   Variante: `Nenhum`

A CLI criará a estrutura do componente no diretório especificado, incluindo arquivos de estilo e testes.

Estrutura do Projeto
--------------------

Após gerar um componente, a estrutura do projeto será semelhante a esta:

plaintext

Copiar código

`src/
  components/
    Button/
      Button.tsx
      Button.module.css
      Button.test.tsx
      README.md`

Configuração de Estilo e Teste
------------------------------

### Estilos

-   Tailwind: O arquivo de estilo não será criado. Assuma que a configuração do Tailwind já está presente no projeto.
-   CSS: Um arquivo `.module.css` será criado.
-   Styled Components: Um arquivo `.styled.ts` será criado para estilos com styled-components.

### Testes

-   Jest: Um arquivo de teste utilizando Jest e React Testing Library será criado.
-   Playwright: Um arquivo de teste utilizando Playwright será criado.

Contribuição
------------

Contribuições são bem-vindas! Siga estas etapas para contribuir:

1.  Fork o repositório
2.  Crie sua feature branch (`git checkout -b feature/sua-feature`)
3.  Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4.  Faça push para a branch (`git push origin feature/sua-feature`)
5.  Abra um Pull Request

Licença
-------

Este projeto está licenciado sob a licença MIT.