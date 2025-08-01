# 🚀 Setup des Packages AdonisJS

Ce document contient les instructions complètes pour installer et configurer tous les packages AdonisJS nécessaires pour l'API Fournisseur CG.

## 📦 Packages à installer

### 1. **@adonisjs/mail** - Service d'email
```bash
node ace add @adonisjs/mail
```

**Configuration :** ✅ Fichier `config/mail.ts` créé

### 2. **@adonisjs/transmit** - Server-Sent Events
```bash
node ace add @adonisjs/transmit
```

**Configuration :** ✅ Fichier `config/transmit.ts` créé

### 3. **adonis-autoswagger** - Documentation API automatique
```bash
pnpm i adonis-autoswagger
```

**Configuration :** ✅ Fichier `config/swagger.ts` créé

### 4. **@rlanz/bull-queue** - Gestion des queues
```bash
node ace add @rlanz/bull-queue
```

**Configuration :** ✅ Fichier `config/queue.ts` créé

### 5. **@adonisjs/scheduler** - Planification des tâches
```bash
node ace add @adonisjs/scheduler
```

**Configuration :** ✅ Fichier `config/scheduler.ts` créé

### 6. **@adonisjs/route-model-binding** - Binding automatique des modèles
```bash
node ace add @adonisjs/route-model-binding
```

**Configuration :** ✅ Prêt à utiliser

### 7. **@adonisjs/socket-io** - WebSockets
```bash
node ace add @adonisjs/socket-io
```

**Configuration :** ✅ Fichier `config/socket.ts` créé

### 8. **@code-syncr/adonisjs-whatsapp** - Intégration WhatsApp
```bash
node ace add @code-syncr/adonisjs-whatsapp
```

**Configuration :** ✅ Fichier `config/whatsapp.ts` créé

### 9. **@adonisjs/sail** - Docker pour AdonisJS
```bash
node ace add @adonisjs/sail
```

**Configuration :** ✅ Prêt à utiliser

### 10. **@adonisjs/fcm** - Firebase Cloud Messaging
```bash
node ace add @adonisjs/fcm
```

**Configuration :** ✅ Fichier `config/fcm.ts` créé

## 🔧 Variables d'environnement

Ajoutez ces variables à votre fichier `.env` :

```env
# Configuration de base
NODE_ENV=development
PORT=3333
APP_KEY=your-app-key-here
HOST=localhost
LOG_LEVEL=info

# Base de données
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=fournisseurcg_dev

# Appwrite
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your-project-id
APPWRITE_API_KEY=your-api-key
APPWRITE_DATABASE_ID=your-database-id
APPWRITE_SUPPLIERS_COLLECTION_ID=your-suppliers-collection-id
APPWRITE_USERS_COLLECTION_ID=your-users-collection-id

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=24h

# CORS
CORS_ORIGIN=*
CORS_METHODS=GET,POST,PUT,DELETE,PATCH
CORS_HEADERS=Content-Type,Authorization

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf,doc,docx

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@fournisseur.cg
SMTP_FROM_NAME=Fournisseur CG
SMTP_SECURE=false

# API
API_VERSION=v3
API_PREFIX=/api
API_TIMEOUT=30000

# Sécurité
SESSION_SECRET=your-session-secret
BCRYPT_ROUNDS=10
PASSWORD_MIN_LENGTH=8

# Redis (pour Transmit et Bull Queue)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# WhatsApp
WHATSAPP_API_KEY=your-whatsapp-api-key
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
WHATSAPP_BUSINESS_ACCOUNT_ID=your-business-account-id
WHATSAPP_VERIFY_TOKEN=your-verify-token

# Firebase Cloud Messaging
FCM_PROJECT_ID=your-fcm-project-id
FCM_PRIVATE_KEY_ID=your-private-key-id
FCM_PRIVATE_KEY=your-private-key
FCM_CLIENT_EMAIL=your-client-email
FCM_CLIENT_ID=your-client-id
FCM_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FCM_TOKEN_URI=https://oauth2.googleapis.com/token
FCM_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FCM_CLIENT_X509_CERT_URL=your-client-cert-url

# Socket.IO
SOCKET_CORS_ORIGIN=*
SOCKET_PING_TIMEOUT=60000
SOCKET_PING_INTERVAL=25000

# Swagger
SWAGGER_TITLE=API Fournisseur CG
SWAGGER_VERSION=1.0.0
SWAGGER_DESCRIPTION=API REST pour la gestion des fournisseurs au Congo
SWAGGER_PRODUCTION_ENV=production

# Scheduler
SCHEDULER_ENABLED=true
SCHEDULER_TIMEZONE=Africa/Brazzaville
```

## 🚀 Commandes utiles

### Générer la documentation Swagger
```bash
node ace docs:generate
```

### Démarrer le worker de queue
```bash
node ace queue:work
```

### Démarrer le scheduler
```bash
node ace scheduler:run
```

### Démarrer avec Sail (Docker)
```bash
node ace sail:up
```

## 📚 Documentation

- **Swagger UI :** `http://localhost:3333/docs`
- **Swagger YAML :** `http://localhost:3333/swagger`
- **API v3 :** `http://localhost:3333/v3`
- **Health Check :** `http://localhost:3333/v3/health`

## 🔄 Prochaines étapes

1. Installer tous les packages avec les commandes ci-dessus
2. Configurer les variables d'environnement dans `.env`
3. Démarrer Redis pour les queues et les SSE
4. Configurer les services externes (WhatsApp, Firebase, etc.)
5. Tester chaque service individuellement
6. Intégrer les services dans vos contrôleurs

## 📝 Notes importantes

- Assurez-vous que Redis est installé et en cours d'exécution
- Configurez correctement les clés API pour les services externes
- Testez la documentation Swagger après l'installation
- Vérifiez que les queues fonctionnent correctement
- Configurez les tâches planifiées selon vos besoins 
