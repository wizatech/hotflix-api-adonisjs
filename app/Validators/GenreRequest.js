'use strict'

class GenreRequest {
  get rules () {
    return {
      name: 'required|unique: genres, name',
      description: 'required|unique: genres, description'
    }
  }

  get messages () {
    return {
      'name.required': 'Você precisa preencher o nome.',
      'name.unique': 'Esse nome já existe.',
      'description.required': 'Você precisa preencher a descrição.'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = GenreRequest
