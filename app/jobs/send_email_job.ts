import { BaseJob } from '@rlanz/bull-queue'

export default class SendEmailJob extends BaseJob {
  static queue = 'emails'
  static concurrency = 2

  async handle() {
    const { to, subject, body } = this.data

    this.logger.info(`Sending email to ${to}`)

    try {
      // Ici vous pouvez utiliser @adonisjs/mail pour envoyer l'email
      // const mail = await this.app.container.make('mail')
      // await mail.send('emails/welcome', { user: this.data.user })
      
      this.logger.success(`Email sent successfully to ${to}`)
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}:`, error)
      throw error
    }
  }
} 