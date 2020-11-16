'use strict'

const MovieService = use('App/Services/MovieService')
class MovieController {
  async index ({ request, response, view }) {
    return response.json(await MovieService.all())
  }

  async store ({ request, response }) {
    return response.json(await MovieService.store(request))
  }

  async show ({ params, request, response, view }) {
    return response.json(await MovieService.show(params.id))
  }

  async update ({ params, request, response }) {
    return response.json(await MovieService.update(params.id, request))
  }

  async destroy ({ params, request, response }) {
    return response.json(await MovieService.destroy(params.id))
  }
}

module.exports = MovieController
