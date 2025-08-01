/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

// start/routes.ts
router.ws('/ws', ({ ws }) => {
  ws.on('message', (message) => {
    ws.send('Received: ' + message.toString())
  })

  ws.on('close', () => {
    console.log('Connection closed')
  })

  ws.send('Hello! Your id is ' + ws.id)
})

// Routes pour Swagger documentation
router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.scalar('/swagger')
})

// Groupe de routes pour l'API v3
router
  .group(() => {
    // Route de base pour vérifier que l'API fonctionne
    router.get('/', async () => {
      return {
        message: 'API Fournisseur CG v3',
        version: '3.0.0',
        status: 'active',
        timestamp: new Date().toISOString(),
      }
    })

    // Route de santé de l'API
    router.get('/health', async () => {
      return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      }
    })

    // Routes pour l'authentification
    router
      .group(() => {
        router.post('/register', async () => {
          return { message: 'Register endpoint - à implémenter' }
        })

        router.post('/login', async () => {
          return { message: 'Login endpoint - à implémenter' }
        })

        router.post('/logout', async () => {
          return { message: 'Logout endpoint - à implémenter' }
        })
      })
      .prefix('/auth')

    // Routes protégées (nécessitent une authentification)
    router
      .group(() => {
        router.get('/profile', async () => {
          return { message: 'Profile endpoint - à implémenter' }
        })
      })
      .prefix('/api')

    // Routes pour WhatsApp
    router
      .group(() => {
        router.post('/webhook', async () => {
          return { message: 'WhatsApp webhook - à implémenter' }
        })

        router.get('/webhook', async () => {
          return { message: 'WhatsApp verification - à implémenter' }
        })
      })
      .prefix('/whatsapp')
  })
  .prefix('/v3')

// Route de fallback pour les anciennes versions
router.get('/', async () => {
  return {
    message: 'API Fournisseur CG',
    currentVersion: 'v3',
    availableVersions: ['v3'],
    documentation: 'https://api.fournisseur.cg/v3/docs',
  }
})

export default router
