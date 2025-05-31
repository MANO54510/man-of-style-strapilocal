#!/bin/bash

echo "🚀 Déploiement Strapi sur OVH Cloud Web"

# 1. Installation des dépendances
echo "📦 Installation des dépendances..."
npm ci --production

# 2. Build de l'application
echo "🔨 Build de l'application..."
NODE_ENV=production npm run build

# 3. Démarrage de l'application
echo "▶️ Démarrage de Strapi..."
NODE_ENV=production npm start