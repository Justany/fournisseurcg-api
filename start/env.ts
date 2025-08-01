/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']),

  /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring Appwrite
  |----------------------------------------------------------
  */
  APPWRITE_ENDPOINT: Env.schema.string.optional(),
  APPWRITE_PROJECT_ID: Env.schema.string(),
  APPWRITE_API_KEY: Env.schema.string(),
  APPWRITE_DATABASE_ID: Env.schema.string.optional(),
  APPWRITE_SUPPLIERS_COLLECTION_ID: Env.schema.string.optional(),
  APPWRITE_USERS_COLLECTION_ID: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for JWT configuration
  |----------------------------------------------------------
  */
  JWT_SECRET: Env.schema.string.optional(),
  JWT_EXPIRES_IN: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for CORS configuration
  |----------------------------------------------------------
  */
  CORS_ORIGIN: Env.schema.string.optional(),
  CORS_METHODS: Env.schema.string.optional(),
  CORS_HEADERS: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for rate limiting
  |----------------------------------------------------------
  */
  RATE_LIMIT_WINDOW_MS: Env.schema.number.optional(),
  RATE_LIMIT_MAX_REQUESTS: Env.schema.number.optional(),

  /*
  |----------------------------------------------------------
  | Variables for file upload
  |----------------------------------------------------------
  */
  MAX_FILE_SIZE: Env.schema.number.optional(),
  ALLOWED_FILE_TYPES: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for email configuration (@adonisjs/mail)
  |----------------------------------------------------------
  */
  SMTP_HOST: Env.schema.string.optional(),
  SMTP_PORT: Env.schema.number.optional(),
  SMTP_USER: Env.schema.string.optional(),
  SMTP_PASSWORD: Env.schema.string.optional(),
  SMTP_FROM_EMAIL: Env.schema.string.optional(),
  SMTP_FROM_NAME: Env.schema.string.optional(),
  SMTP_SECURE: Env.schema.boolean.optional(),

  /*
  |----------------------------------------------------------
  | Variables for API configuration
  |----------------------------------------------------------
  */
  API_VERSION: Env.schema.string.optional(),
  API_PREFIX: Env.schema.string.optional(),
  API_TIMEOUT: Env.schema.number.optional(),

  /*
  |----------------------------------------------------------
  | Variables for security
  |----------------------------------------------------------
  */
  SESSION_SECRET: Env.schema.string.optional(),
  BCRYPT_ROUNDS: Env.schema.number.optional(),
  PASSWORD_MIN_LENGTH: Env.schema.number.optional(),

  /*
  |----------------------------------------------------------
  | Variables for Redis (@adonisjs/transmit, @rlanz/bull-queue)
  |----------------------------------------------------------
  */
  REDIS_HOST: Env.schema.string.optional(),
  REDIS_PORT: Env.schema.number.optional(),
  REDIS_PASSWORD: Env.schema.string.optional(),
  REDIS_DB: Env.schema.number.optional(),

  /*
  |----------------------------------------------------------
  | Variables for WhatsApp (@code-syncr/adonisjs-whatsapp)
  |----------------------------------------------------------
  */
  WHATSAPP_API_KEY: Env.schema.string.optional(),
  WHATSAPP_PHONE_NUMBER_ID: Env.schema.string.optional(),
  WHATSAPP_BUSINESS_ACCOUNT_ID: Env.schema.string.optional(),
  WHATSAPP_VERIFY_TOKEN: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for Firebase Cloud Messaging (@adonisjs/fcm)
  |----------------------------------------------------------
  */
  FCM_PROJECT_ID: Env.schema.string.optional(),
  FCM_PRIVATE_KEY_ID: Env.schema.string.optional(),
  FCM_PRIVATE_KEY: Env.schema.string.optional(),
  FCM_CLIENT_EMAIL: Env.schema.string.optional(),
  FCM_CLIENT_ID: Env.schema.string.optional(),
  FCM_AUTH_URI: Env.schema.string.optional(),
  FCM_TOKEN_URI: Env.schema.string.optional(),
  FCM_AUTH_PROVIDER_X509_CERT_URL: Env.schema.string.optional(),
  FCM_CLIENT_X509_CERT_URL: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for Socket.IO (@adonisjs/socket-io)
  |----------------------------------------------------------
  */
  SOCKET_CORS_ORIGIN: Env.schema.string.optional(),
  SOCKET_PING_TIMEOUT: Env.schema.number.optional(),
  SOCKET_PING_INTERVAL: Env.schema.number.optional(),

  /*
  |----------------------------------------------------------
  | Variables for Swagger documentation (adonis-autoswagger)
  |----------------------------------------------------------
  */
  SWAGGER_TITLE: Env.schema.string.optional(),
  SWAGGER_VERSION: Env.schema.string.optional(),
  SWAGGER_DESCRIPTION: Env.schema.string.optional(),
  SWAGGER_PRODUCTION_ENV: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for Scheduler (@adonisjs/scheduler)
  |----------------------------------------------------------
  */
  SCHEDULER_ENABLED: Env.schema.boolean.optional(),
  SCHEDULER_TIMEZONE: Env.schema.string.optional(),

  /*
  |----------------------------------------------------------
  | Variables for @rlanz/bull-queue
  |----------------------------------------------------------
  */
  QUEUE_REDIS_HOST: Env.schema.string.optional(),
  QUEUE_REDIS_PORT: Env.schema.number.optional(),
  QUEUE_REDIS_PASSWORD: Env.schema.string.optional(),
})
