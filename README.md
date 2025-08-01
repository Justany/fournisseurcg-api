# API Fournisseur CG

API REST pour la gestion des fournisseurs au Congo.

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
NODE_ENV=development
PORT=3333
APP_KEY=your-app-key-here
HOST=localhost
LOG_LEVEL=info

# Database configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=fournisseurcg_dev
```

### URLs d'accès

- **Développement** : `http://localhost:3333/v3`
- **Production** : `https://api.fournisseur.cg/v3`

## Installation

```bash
# Installer les dépendances
pnpm install

# Créer le fichier .env
cp .env.example .env

# Configurer la base de données
pnpm migration:run

# Démarrer le serveur de développement
pnpm dev
```

## Routes disponibles

### API v3

- `GET /v3` - Informations sur l'API
- `GET /v3/health` - Statut de santé de l'API
- `POST /v3/auth/register` - Inscription utilisateur
- `POST /v3/auth/login` - Connexion utilisateur
- `POST /v3/auth/logout` - Déconnexion utilisateur
- `GET /v3/api/profile` - Profil utilisateur (protégé)

### Route de fallback

- `GET /` - Informations générales sur l'API

## Scripts disponibles

- `pnpm dev` - Démarre le serveur de développement
- `pnpm build` - Compile l'application pour la production
- `pnpm start` - Démarre le serveur de production
- `pnpm test` - Lance les tests
- `pnpm lint` - Vérifie le code avec ESLint
- `pnpm format` - Formate le code avec Prettier
