'use strict'
const Genre = use('App/Models/Genre')
const Logger = use('Logger')
class GenreService {
  static async all() {
    try {
      return await Genre.all()
    } catch (error) {
      Logger.error(error)
    }
  }

  static async store(request) {
    try {
      return await Genre.create(request.only(["name", "description"]))
    } catch (error) {
      Logger.error(error)
    }
  }

  static async show(id) {
    try {
      return await Genre.findOrFail(id)
    } catch (error) {
      Logger.error(error)
    }
  }

  static async update(id, request) {
    try {
      const genre = await Genre.findOrFail(id)
      genre.merge(request.only(["name", "description"]))
      return genre.save()
    } catch (error) {
      Logger.error(error)
    }
  }

  static async destroy(id) {
    try {
      const genre = await Genre.findOrFail(id)
      return await genre.delete()
    } catch (error) {
      Logger.error(error)
    }
  }
}

module.exports = GenreService
