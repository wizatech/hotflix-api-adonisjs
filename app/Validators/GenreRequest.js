'use strict'

class GenreRequest {
  get rules () {
    const genreId = this.ctx.params.id ? this.ctx.params.id : ''
    return {
      name: `required|unique:movies,title,id,${genreId}`,
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
