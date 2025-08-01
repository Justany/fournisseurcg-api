import { BaseTask } from '@adonisjs/scheduler'

export default class CleanupTask extends BaseTask {
  static schedule = '0 2 * * *' // Tous les jours à 2h du matin
  static queue = 'default'

  async handle() {
    this.logger.info('Starting cleanup task...')
    
    // Exemple de tâche de nettoyage
    // - Supprimer les fichiers temporaires
    // - Nettoyer les logs anciens
    // - Archiver les données anciennes
    
    this.logger.info('Cleanup task completed')
  }
} 