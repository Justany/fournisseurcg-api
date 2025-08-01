import { BaseCommand } from '@adonisjs/core/ace'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'
import router from '#start/routes'

export default class DocsGenerate extends BaseCommand {
  static commandName = 'docs:generate'
  static description = 'Generate Swagger documentation'

  async run() {
    this.logger.info('Generating Swagger documentation...')

    try {
      const yaml = await AutoSwagger.default.docs(router.toJSON(), swagger)
      
      // Écrire le fichier swagger.yml
      await this.app.fs.write('swagger.yml', yaml)
      
      this.logger.success('Swagger documentation generated successfully!')
      this.logger.info('File: swagger.yml')
    } catch (error) {
      this.logger.error('Failed to generate Swagger documentation')
      this.logger.error(error)
    }
  }
} 