'use strict'
const Movie = use('App/Models/Movie')
const Logger = use('Logger')
class MovieService {
  static async all() {
    try {
      return await Movie.all()
    } catch (error) {
      Logger.error(error)
    }
  }

  static async store(request) {
    try {
      return await Movie.create(request.only(["name", "title", "description", "year", "image"]))
    } catch (error) {
      Logger.error(error)
    }
  }

  static async show(id) {
    try {
      return await Movie.findOrFail(id)
    } catch (error) {
      Logger.error(error)
    }
  }

  static async update(id, request) {
    try {
      const movie = await Movie.findOrFail(id)
      movie.merge(request.only(["name", "title", "description", "year", "image"]))
      return movie.save()
    } catch (error) {
      console.log(error)
      Logger.error(error)
    }
  }

  static async destroy(id) {
    try {
      const movie = await Movie.findOrFail(id)
      return await movie.delete()
    } catch (error) {
      Logger.error(error)
    }
  }
}

module.exports = MovieService
