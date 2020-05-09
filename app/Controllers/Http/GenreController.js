'use strict'
const GenreService = use('App/Services/GenreService')

class GenreController {
  async index ({ request, response, view }) {
    return response.json(await GenreService.getAllGenre())
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = GenreController
