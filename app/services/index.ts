import { appwriteService } from './appwrite_service.js'
import { EmailService } from './email_service.js'
import { PaymentService } from './payment_service.js'
import { OrdersService } from './orders_service.js'
import { ProductsService } from './products_service.js'
import { QuotesService } from './quotes_service.js'
import { QueueManagerService } from './queue_manager_service.js'

// Services instances
export const emailService = new EmailService()
export const paymentService = new PaymentService()
export const ordersService = new OrdersService()
export const productsService = new ProductsService()
export const quotesService = new QuotesService()
export const queueManager = new QueueManagerService()

// Export du service Appwrite existant
export { appwriteService }

/**
 * Interface pour les services initialisables
 */
export interface InitializableService {
  initialize(): Promise<void>
  isInitialized(): boolean
}

/**
 * Gestionnaire d'initialisation des services
 */
export class ServiceManager {
  private services: Map<string, InitializableService> = new Map()
  private initialized = false

  constructor() {
    // Enregistrer les services
    this.registerService('appwrite', appwriteService)
    this.registerService('email', emailService)
    this.registerService('payment', paymentService)
    this.registerService('orders', ordersService)
    this.registerService('products', productsService)
    this.registerService('quotes', quotesService)
    this.registerService('queue', queueManager)
  }

  /**
   * Enregistre un service
   */
  registerService(name: string, service: InitializableService): void {
    this.services.set(name, service)
  }

  /**
   * Initialise tous les services
   */
  async initializeAll(): Promise<void> {
    if (this.initialized) {
      return
    }

    console.log('🚀 Initialisation des services...')

    const initPromises = Array.from(this.services.entries()).map(async ([name, service]) => {
      try {
        console.log(`📦 Initialisation du service: ${name}`)
        await service.initialize()
        console.log(`✅ Service ${name} initialisé avec succès`)
      } catch (error) {
        console.error(`❌ Erreur lors de l'initialisation du service ${name}:`, error)
        throw error
      }
    })

    await Promise.all(initPromises)
    this.initialized = true
    console.log('🎉 Tous les services ont été initialisés avec succès')
  }

  /**
   * Arrête tous les services
   */
  async shutdownAll(): Promise<void> {
    console.log('🛑 Arrêt des services...')

    const shutdownPromises = Array.from(this.services.entries()).map(async ([name, service]) => {
      try {
        if ('close' in service && typeof (service as any).close === 'function') {
          await (service as any).close()
          console.log(`✅ Service ${name} arrêté avec succès`)
        }
      } catch (error) {
        console.error(`❌ Erreur lors de l'arrêt du service ${name}:`, error)
      }
    })

    await Promise.all(shutdownPromises)
    this.initialized = false
    console.log('👋 Tous les services ont été arrêtés')
  }

  /**
   * Vérifie l'état d'initialisation
   */
  isInitialized(): boolean {
    return this.initialized
  }

  /**
   * Récupère un service par son nom
   */
  getService<T>(name: string): T | undefined {
    return this.services.get(name) as T
  }

  /**
   * Récupère tous les services
   */
  getAllServices(): Map<string, InitializableService> {
    return new Map(this.services)
  }
}

// Instance singleton du gestionnaire de services
export const serviceManager = new ServiceManager() 