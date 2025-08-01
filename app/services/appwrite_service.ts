import { Client, Databases, Account, ID } from 'node-appwrite'
import env from '#start/env'

export class AppwriteService {
  private client: Client
  private databases: Databases
  private account: Account

  constructor() {
    this.client = new Client()

    // Configuration du client Appwrite
    this.client
      .setEndpoint(env.get('APPWRITE_ENDPOINT', 'https://cloud.appwrite.io/v1'))
      .setProject(env.get('APPWRITE_PROJECT_ID'))
      .setKey(env.get('APPWRITE_API_KEY'))

    this.databases = new Databases(this.client)
    this.account = new Account(this.client)
  }

  /**
   * Initialise la base de données Appwrite avec les collections nécessaires
   */
  async initializeDatabase() {
    try {
      // Créer la base de données principale
      const database = await this.databases.create(ID.unique(), 'FournisseurCG')

      // Créer la collection des utilisateurs
      const usersCollection = await this.databases.createCollection(
        database.$id,
        ID.unique(),
        'users'
      )

      // Ajouter les attributs pour la collection users
      await this.databases.createStringAttribute(
        database.$id,
        usersCollection.$id,
        'email',
        255,
        true
      )

      await this.databases.createStringAttribute(
        database.$id,
        usersCollection.$id,
        'name',
        255,
        true
      )

      await this.databases.createStringAttribute(
        database.$id,
        usersCollection.$id,
        'phone',
        20,
        false
      )

      await this.databases.createStringAttribute(
        database.$id,
        usersCollection.$id,
        'role',
        50,
        true,
        'user'
      )

      await this.databases.createDatetimeAttribute(
        database.$id,
        usersCollection.$id,
        'created_at',
        true
      )

      // Créer la collection des fournisseurs
      const suppliersCollection = await this.databases.createCollection(
        database.$id,
        ID.unique(),
        'suppliers'
      )

      // Ajouter les attributs pour la collection suppliers
      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'name',
        255,
        true
      )

      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'description',
        1000,
        false
      )

      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'address',
        500,
        false
      )

      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'phone',
        20,
        false
      )

      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'email',
        255,
        false
      )

      await this.databases.createStringAttribute(
        database.$id,
        suppliersCollection.$id,
        'website',
        255,
        false
      )

      await this.databases.createBooleanAttribute(
        database.$id,
        suppliersCollection.$id,
        'is_active',
        true,
        true
      )

      await this.databases.createDatetimeAttribute(
        database.$id,
        suppliersCollection.$id,
        'created_at',
        true
      )

      return {
        database,
        usersCollection,
        suppliersCollection,
      }
    } catch (error) {
      console.error("Erreur lors de l'initialisation de la base de données:", error)
      throw error
    }
  }

  /**
   * Récupère la liste des fournisseurs
   */
  async getSuppliers() {
    try {
      const databaseId = env.get('APPWRITE_DATABASE_ID')
      const collectionId = env.get('APPWRITE_SUPPLIERS_COLLECTION_ID')

      if (!databaseId || !collectionId) {
        throw new Error('APPWRITE_DATABASE_ID et APPWRITE_SUPPLIERS_COLLECTION_ID sont requis')
      }

      const response = await this.databases.listDocuments(databaseId, collectionId)

      return response.documents
    } catch (error) {
      console.error('Erreur lors de la récupération des fournisseurs:', error)
      throw error
    }
  }

  /**
   * Crée un nouveau fournisseur
   */
  async createSupplier(supplierData: {
    name: string
    description?: string
    address?: string
    phone?: string
    email?: string
    website?: string
  }) {
    try {
      const databaseId = env.get('APPWRITE_DATABASE_ID')
      const collectionId = env.get('APPWRITE_SUPPLIERS_COLLECTION_ID')

      if (!databaseId || !collectionId) {
        throw new Error('APPWRITE_DATABASE_ID et APPWRITE_SUPPLIERS_COLLECTION_ID sont requis')
      }

      const document = await this.databases.createDocument(databaseId, collectionId, ID.unique(), {
        ...supplierData,
        is_active: true,
        created_at: new Date().toISOString(),
      })

      return document
    } catch (error) {
      console.error('Erreur lors de la création du fournisseur:', error)
      throw error
    }
  }

  /**
   * Récupère un fournisseur par son ID
   */
  async getSupplierById(supplierId: string) {
    try {
      const databaseId = env.get('APPWRITE_DATABASE_ID')
      const collectionId = env.get('APPWRITE_SUPPLIERS_COLLECTION_ID')

      if (!databaseId || !collectionId) {
        throw new Error('APPWRITE_DATABASE_ID et APPWRITE_SUPPLIERS_COLLECTION_ID sont requis')
      }

      const document = await this.databases.getDocument(databaseId, collectionId, supplierId)

      return document
    } catch (error) {
      console.error('Erreur lors de la récupération du fournisseur:', error)
      throw error
    }
  }

  /**
   * Met à jour un fournisseur
   */
  async updateSupplier(
    supplierId: string,
    supplierData: Partial<{
      name: string
      description: string
      address: string
      phone: string
      email: string
      website: string
      is_active: boolean
    }>
  ) {
    try {
      const databaseId = env.get('APPWRITE_DATABASE_ID')
      const collectionId = env.get('APPWRITE_SUPPLIERS_COLLECTION_ID')

      if (!databaseId || !collectionId) {
        throw new Error('APPWRITE_DATABASE_ID et APPWRITE_SUPPLIERS_COLLECTION_ID sont requis')
      }

      const document = await this.databases.updateDocument(
        databaseId,
        collectionId,
        supplierId,
        supplierData
      )

      return document
    } catch (error) {
      console.error('Erreur lors de la mise à jour du fournisseur:', error)
      throw error
    }
  }

  /**
   * Supprime un fournisseur
   */
  async deleteSupplier(supplierId: string) {
    try {
      const databaseId = env.get('APPWRITE_DATABASE_ID')
      const collectionId = env.get('APPWRITE_SUPPLIERS_COLLECTION_ID')

      if (!databaseId || !collectionId) {
        throw new Error('APPWRITE_DATABASE_ID et APPWRITE_SUPPLIERS_COLLECTION_ID sont requis')
      }

      await this.databases.deleteDocument(databaseId, collectionId, supplierId)

      return { success: true }
    } catch (error) {
      console.error('Erreur lors de la suppression du fournisseur:', error)
      throw error
    }
  }

  /**
   * Authentifie un utilisateur
   */
  async authenticateUser(email: string, password: string) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password)
      const user = await this.account.get()
      return { session, user }
    } catch (error) {
      console.error("Erreur lors de l'authentification:", error)
      throw error
    }
  }

  /**
   * Crée un nouvel utilisateur
   */
  async createUser(userData: { email: string; password: string; name: string; phone?: string }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        userData.email,
        userData.password,
        userData.name
      )

      return user
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error)
      throw error
    }
  }

  /**
   * Déconnecte l'utilisateur
   */
  async logoutUser() {
    try {
      await this.account.deleteSession('current')
      return { success: true }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
      throw error
    }
  }
}

// Instance singleton du service Appwrite
export const appwriteService = new AppwriteService()
