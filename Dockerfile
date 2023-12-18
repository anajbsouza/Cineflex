# Seleciona a imagem base
FROM node:alpine AS build

# Seleciona a pasta de trabalho
WORKDIR /app

# Copie o arquivos para dentro do WORKDIR
COPY . .

# Baixa as dependências
RUN npm install

# Constroi o aplicativo Vite para produção
RUN npm run build

# Seleciona a imagem base do nginx
FROM nginx:alpine

# Copie os arquivos de construção do Vite para o diretório de publicação do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80 (opcional)
EXPOSE 80

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]