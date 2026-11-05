Projeto Portifolio - V2

## Desenvolvimento

Use sempre NVM. A versão do Node está fixada em `.nvmrc`:

```bash
nvm install
nvm use
npm ci
npm run dev
```

Validação: `npm run lint`, `npm run typecheck`, `npm run build` e
`npm audit --audit-level=moderate`. Para testar o build, execute `npm start`.
O CI usa a mesma versão do Node e verifica esses comandos em pushes e PRs.

## Atualização das dependências — novembro/2026

Migrado de Next 14/React 18 para Next 16/React 19 e de Tailwind 3 para 4.
A internacionalização usa configuração de request assíncrona e `src/proxy.ts`.
ESLint utiliza configuração flat e roda separadamente do build.

As versões diretas são fixadas e o `package-lock.json` deve ser versionado.
O override de `minimatch` em `@typescript-eslint/typescript-estree` resolve
GHSA-g3hv-75wg-m249; revisar sua necessidade ao atualizar typescript-eslint.

Node 26 LTS é exigido em desenvolvimento e CI; configure a mesma linha no
provedor de hospedagem antes de publicar. A atualização foi validada localmente
com lint, TypeScript, build e respostas HTTP das quatro páginas em ambos os
idiomas, além dos redirecionamentos. Revisão visual ainda é necessária.

## Objetivos
- Adicionar opção de tema escuro e tema claro
- Adicionar opção de idioma, inglês e português
- Simplicidade e direto ao ponto
- Seção para adicionar projetos, onde cada projeto deve ter:
    * Image ou Vídeo do projeto
    * Aba com link para projeto em execução
    * Aba com link para repositório do projeto

## Tecnologias Utilizadas
- TypeScript
- Next
- Tailwind CSS
- MongoDb

## Fontes
Icones em icons8: https://icons8.com.br/
