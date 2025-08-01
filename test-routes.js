#!/usr/bin/env node

// Script de test pour vérifier les routes de l'API
const http = require('http')

const baseUrl = 'http://localhost:3333'

const routes = [
  '/',
  '/v3',
  '/v3/health',
  '/v3/auth/register',
  '/v3/auth/login',
  '/v3/auth/logout',
  '/v3/api/profile',
]

async function testRoute(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3333,
      path: path,
      method: 'GET',
    }

    const req = http.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        try {
          const json = JSON.parse(data)
          resolve({
            path,
            status: res.statusCode,
            data: json,
          })
        } catch (e) {
          resolve({
            path,
            status: res.statusCode,
            data: data,
          })
        }
      })
    })

    req.on('error', (err) => {
      reject(err)
    })

    req.end()
  })
}

async function runTests() {
  console.log("🧪 Test des routes de l'API Fournisseur CG")
  console.log('==========================================\n')

  for (const route of routes) {
    try {
      const result = await testRoute(route)
      console.log(`✅ ${route} (${result.status})`)
      console.log(`   ${JSON.stringify(result.data, null, 2)}`)
      console.log('')
    } catch (error) {
      console.log(`❌ ${route} - Erreur: ${error.message}`)
      console.log('')
    }
  }
}

runTests()
