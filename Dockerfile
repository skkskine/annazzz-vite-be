FROM node:20-alpine AS base

# Installa dipendenze necessarie
RUN apk add --no-cache libc6-compat

# Installa pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copia file di dipendenze
COPY package*.json pnpm-lock.yaml* ./

# Installa dipendenze con pnpm
RUN pnpm install --frozen-lockfile

# Copia tutto il codice
COPY . .

# Genera i tipi di Payload
RUN pnpm payload generate:types

# Build dell'applicazione
RUN pnpm build

# Esponi la porta
EXPOSE 3222

# Avvia l'applicazione
CMD ["pnpm", "start"]