import { BaseTask } from '@adonisjs/scheduler'

export default class BackupTask extends BaseTask {
  static schedule = '0 1 * * 0' // Tous les dimanches à 1h du matin
  static queue = 'default'

  async handle() {
    this.logger.info('Starting backup task...')
    
    // Exemple de tâche de sauvegarde
    // - Sauvegarder la base de données
    // - Sauvegarder les fichiers uploadés
    // - Envoyer les sauvegardes vers le stockage cloud
    
    this.logger.info('Backup task completed')
  }
} 