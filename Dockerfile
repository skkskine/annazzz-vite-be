FROM node:20-alpine AS base

# Installa dipendenze necessarie
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Forza l'uso di npm
ENV PAYLOAD_PACKAGE_MANAGER=npm

# Copia file di dipendenze
COPY package*.json ./

# Installa dipendenze
RUN npm ci

# Copia tutto il codice
COPY . .

# Genera i tipi di Payload
RUN npm run payload generate:types

# Build dell'applicazione
RUN npm run build

# Esponi la porta
EXPOSE 3222

# Avvia l'applicazione
CMD ["npm", "run", "start"]