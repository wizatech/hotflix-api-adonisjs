'use strict'

class MovieRequest {
  get rules () {
    const movieId = this.ctx.params.id ? this.ctx.params.id : ''

    return {
      name: 'required',
      title: `required|unique:movies,title,id,${movieId}`,
      year: 'required|integer',
      description: 'required',
      image: 'required',
    }
  }

  get messages () {
    return {
      'name.required': 'Você precisa preencher o nome.',
      'title.required': 'Você precisa preencher o título.',
      'image.required': 'Você precisa preencher a imagem.',
      'title.unique': 'Esse título já existe.',
      'description.required': 'Você precisa preencher a descrição.'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = MovieRequest
