import { BaseEvent } from '@adonisjs/socket-io'

export default class UserEvents extends BaseEvent {
  static eventName = 'user'

  async handle(socket, data) {
    // Exemple d'événement pour les utilisateurs
    socket.emit('user:updated', {
      message: 'User data updated',
      timestamp: new Date().toISOString(),
    })
  }
} 