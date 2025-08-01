import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: 'API Fournisseur CG',
  version: '3.0.0',
  description:
    "API REST pour la gestion des fournisseurs au Congo. Services de logistique, d'importation et de gestion des fournisseurs.",
  tagIndex: 2,
  productionEnv: 'production',
  info: {
    title: 'API Fournisseur CG',
    version: '3.0.0',
    description:
      "API REST complète pour la gestion des fournisseurs au Congo. Inclut l'authentification, la gestion des fournisseurs, les devis, le suivi des commandes et les services de logistique.",
  },
  snakeCase: true,
  debug: true,
  ignore: ['/swagger', '/docs'],
  preferredPutPatch: 'PUT',
  common: {
    parameters: {},
    headers: {},
  },
  securitySchemes: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  authMiddlewares: ['auth', 'auth:api'],
  defaultSecurityScheme: 'BearerAuth',
  persistAuthorization: true,
  showFullPath: true,
  scalar: {},
}
