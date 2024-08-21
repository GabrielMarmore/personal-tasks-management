# Personal Tasks Management

## Visão Geral
Este projeto é um front-end simples desenvolvido com TypeScript e React, configurado para ser servido localmente e construído utilizando o Vite. Toda a aplicação está contida em um contêiner Docker, com um ambiente de desenvolvimento configurado utilizando `.devcontainer`, facilitando a consistência e portabilidade do ambiente de desenvolvimento.

## Requisitos
- Docker Desktop instalado e em execução.

## Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento Vite. Use este comando para desenvolver o projeto localmente. A aplicação estará disponível em `http://localhost:3000`.

### `npm run build`
Compila o TypeScript e gera os arquivos otimizados para produção, que são colocados na pasta `dist`.

### `npm run preview`
Serve o build de produção gerado pelo Vite para pré-visualização. Use este comando para verificar a versão final do projeto antes da implantação.

### `npm run tailwind:build`
Compila o CSS utilizando o Tailwind CSS e gera o arquivo `output.css` a partir de `main.css`. Este comando é executado em modo de observação para aplicar alterações em tempo real durante o desenvolvimento.

### `npm run start`
Inicia o processo de construção do Tailwind CSS e o servidor de desenvolvimento Vite simultaneamente. Use este comando para desenvolver e estilizar a aplicação localmente.

## Uso com Docker

### Build do Contêiner Docker
```bash
docker-compose build
```

### Iniciar o Contêiner
```bash
docker-compose up
```
A aplicação será servida em http://localhost:3000.

## Licença
Este projeto é licenciado sob a licença MIT.
