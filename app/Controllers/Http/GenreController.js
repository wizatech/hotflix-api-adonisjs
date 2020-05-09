'use strict'
const GenreService = use('App/Services/GenreService')

class GenreController {
  async index ({ request, response, view }) {
    return response.json(await GenreService.all())
  }

  async store ({ request, response }) {
    return response.json(await GenreService.store(request))
  }

  async show ({ params, request, response, view }) {
    return response.json(await GenreService.show(params.id))
  }

  async update ({ params, request, response }) {
    return response.json(await GenreService.update(params.id, request))
  }

  async destroy ({ params, request, response }) {
    return response.json(await GenreService.destroy(params.id))
  }
}

module.exports = GenreController
